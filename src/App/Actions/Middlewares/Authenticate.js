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
    getData = () => {
        fetch(this.URI, this.initializeRequest())
            .then(data => {
                console.log('0', data);
                return data;
            })
            .catch(error => {
                console.log('2');
               throw new Error('Failed to fetch: ' + error);
            });
    };
}

const auth = new Authenticate();
export default auth;