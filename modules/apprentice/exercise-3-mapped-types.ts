/**
 * Mapped types - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
 */

const servers = {
    'merch': {
        isProd: false,
        services: [
            {name: 'dashboard', url: 'https://dashboard.merch.google.com', urlType: 'absolute'},
            {name: 'segmentation', url: 'https://segmentation-service.merch.google.com', urlType: 'absolute'},
            {name: 'catalog', url: '/product-catalog-service/api/v1/', urlType: 'relative'},
        ],
    },
    'prod': {
        isProd: true,
        services: [
            {name: 'dashboard', url: 'https://dashboard.prod.google.com', urlType: 'absolute'},
            {name: 'segmentation', url: 'https://segmentation-service.prod.google.com', urlType: 'absolute'},
            {name: 'catalog', url: '/product-catalog-service/api/v1/', urlType: 'relative'},
        ]
    }
} as const

type ServersConfig = typeof servers;




/**
 * Exercise 1: Create a type describing object which properties are server id's, and values are the isProd property of the server
 */
type IsServerProdConfig = any

const test: IsServerProdConfig = {
    'merch': false,
    'prod': true,
}





/**
 * Exercise 2: Create a map type of Merch Service urls indexed by service name
 */
type MerchServices = any; // use index type to extract the array type of merch services
type MerchServiceUrlsMap = any;

const test2: MerchServiceUrlsMap = {
    'dashboard': 'https://dashboard.merch.google.com',
    'segmentation': 'https://segmentation-service.merch.google.com',
    'catalog': '/product-catalog-service/api/v1/',
}
