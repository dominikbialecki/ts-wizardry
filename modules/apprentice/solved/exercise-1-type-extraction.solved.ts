/**
 * The purpose of this module is to learn techniques to extract types from values.
 * You'll learn how to use `typeof`, `keyof` and indexed types
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

/**
 * Exercise 1: Extract the type of `servers` constant
 */
type ServersConfig = typeof servers;

const test: ServersConfig = {
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
}



/**
 * Exercise 2: Extract  a type storing all possible server id's ('merch', 'prod')
 */
type ServerId = keyof ServersConfig;

const test2: ServerId[] = ['merch', 'prod'];



/**
 * Exercise 3: Extract the type of 'merch' server
 */
type MerchServer = ServersConfig['merch'];

const test3: MerchServer = {
    isProd: false,
    services: [
        {name: 'dashboard', url: 'https://dashboard.merch.google.com', urlType: 'absolute'},
        {name: 'segmentation', url: 'https://segmentation-service.merch.google.com', urlType: 'absolute'},
        {name: 'catalog', url: '/product-catalog-service/api/v1/', urlType: 'relative'},
    ],
}



/**
 * Exercise 4: Extract a type describing all possible servers
 */
type Server = ServersConfig[ServerId];


const test4: Server[] = [
    {
        isProd: false,
        services: [
            {name: 'dashboard', url: 'https://dashboard.merch.google.com', urlType: 'absolute'},
            {name: 'segmentation', url: 'https://segmentation-service.merch.google.com', urlType: 'absolute'},
            {name: 'catalog', url: '/product-catalog-service/api/v1/', urlType: 'relative'},
        ],
    }, {
        isProd: true,
        services: [
            {name: 'dashboard', url: 'https://dashboard.prod.google.com', urlType: 'absolute'},
            {name: 'segmentation', url: 'https://segmentation-service.prod.google.com', urlType: 'absolute'},
            {name: 'catalog', url: '/product-catalog-service/api/v1/', urlType: 'relative'},
        ]
    }
]



/**
 * Exercise 5: Extract a type describing all possible urlType values
 */
type UrlType = Server['services'][number]['urlType'];

const test5: UrlType[] = ['absolute', 'relative'];
