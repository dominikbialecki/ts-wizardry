/**
 * The purpose of this module is to learn techniques to extract types from values.
 * You'll learn how to use:
 * - `typeof` - https://www.typescriptlang.org/docs/handbook/2/typeof-types.html,
 * - `keyof` - https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
 * - indexed types - https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
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
type ServersConfig = any;

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
type ServerId = any;

const test2: ServerId[] = ['merch', 'prod'];




/**
 * Exercise 3: Extract the type of 'merch' server
 */
type MerchServer = any;

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
type Server = any;

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
type UrlType = any

const test5: UrlType[] = ['absolute', 'relative'];


