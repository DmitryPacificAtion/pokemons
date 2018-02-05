class Authenticate {
    URI = 'https://pokeapi.co/api/v2/';
    pokemons = {};
    initializeRequest = () => {
        const headers = new Headers({'Content-Type': 'text/xml'});
        return {
            method: 'GET',
            headers: headers,
            cache: 'default'
        };

    };
    getData = () => {
        fetch(this.URI, this.initializeRequest())
            .then(data => {
                return data.json()
            })
            .then(data => {
                this.pokemons = data;
                return data;
            })
            .catch(error => {
               throw new Error('Failed to fetch: ' + error);
            });
    };
    showData = () => {
        console.log('I have: ', this.pokemons)
    }
}

const auth = new Authenticate();
export default auth;