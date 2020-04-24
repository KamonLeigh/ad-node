const url = require('url');
const querystring = require('querystring')

const parsed = url.parse('https://www.pluralsight.com/search?q=buna');

// Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'www.pluralsight.com',
//     port: null,
//     hostname: 'www.pluralsight.com',
//     hash: null,
//     search: '?q=buna',
//     query: 'q=buna',
//     pathname: '/search',
//     path: '/search?q=buna',
//     href: 'https://www.pluralsight.com/search?q=buna'
// }

const parsedQuery = url.parse('https://www.pluralsight.com/search?q=buna', true);

// Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'www.pluralsight.com',
//     port: null,
//     hostname: 'www.pluralsight.com',
//     hash: null,
//     search: '?q=buna',
//     query: [Object: null prototype] {  NB the data structure
//         q: 'buna'
//     },
//     pathname: '/search',
//     path: '/search?q=buna',
//     href: 'https://www.pluralsight.com/search?q=buna'
// }

const q = parsedQuery.query.q // buna

/*
 * For the inverse
 * 
 */

 const inverse = {
      protocol: 'https:',
      host: 'www.pluralsight.com',
      search: '?q=buna',
      pathname: '/search',
 }

 const formatUrl = url.format(inverse); // https://www.pluralsight.com/search?q=buna

 const foo = {
     name: 'byron dunkley',
     website: 'jsComplete.com/byron-dunklet'
 }

 const bar = querystring.stringify(foo) // format to 

 const foo2 = querystring.parse(foo); // will equal bar