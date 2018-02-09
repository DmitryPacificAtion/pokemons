class Authenticate {
    URI = 'https://pokeapi.co/api/v2/';
    initializeRequest = () => {
        const headers = new Headers({'Content-Type': 'application/json'});
        return {
            method: 'GET',
            headers: headers,
            cache: 'default'
        };

    };
    sendRequest = () => {
        return fetch(this.URI, this.initializeRequest())
            .then(data => {
                return data.json();
            })
            .catch(error => {
               throw new Error('Failed to fetch: ' + error);
            });
    };
}

const auth = new Authenticate();
export default auth;