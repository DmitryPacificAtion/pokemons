// class Authenticate {
//   initializeRequest = () => {
//     const headers = new Headers({
//       'Content-Type': 'application/json'
//     });
//     return {
//       method: 'GET',
//       headers,
//       cache: 'default'
//     };
//   };

//   sendRequest = (endpoint: string): Promise<JSON> => {
//     const mainURL = 'https://pokeapi.co/api/v2/pokemon/';
//     return fetch(endpoint = mainURL)
//       .then(data => {
//         return data.json();
//       })
//       .catch(error => {
//         throw new Error('Failed to fetch: ' + error);
//       });
//   };

//   serialize = (name: string, json: any) => {
//     localStorage.setItem(name, JSON.stringify(json));
//   };

//   unserialize = (item: string) => {
//     const data = localStorage.getItem(item) || '';
//     return JSON.parse(data,
//       (key, value) => {
//         return value;
//       });
//     };
// }

// const auth = new Authenticate();
// export default auth;
