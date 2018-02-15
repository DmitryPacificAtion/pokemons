class Authenticate {
    initializeRequest = () => {
        const headers = new Headers({'Content-Type': 'application/json'});
        return {
            method: 'GET',
            headers: headers,
            cache: 'default'
        };
    };
    sendRequest = (endpoint) => {
        let url = 'https://pokeapi.co/api/v2/pokemon/';
        if (endpoint !== null && endpoint !== undefined && endpoint.length > 0)
            url = endpoint;
        return fetch(url, this.initializeRequest())
            .then(data => {
                return data.json();
            })
            .catch(error => {
               throw new Error('Failed to fetch: ' + error);
            });
    };
    serialize = (name, json) => {
        localStorage.setItem(name, JSON.stringify(json));
    };
    unserialize = (item) => {
        return JSON.parse(localStorage.getItem(item),
            (key, value) => {
                return value;
            })
    };
}

const auth = new Authenticate();
export default auth;