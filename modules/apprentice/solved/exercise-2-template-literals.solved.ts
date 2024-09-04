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

type UrlType = 'absolute' | 'relative'


/**
 * Exercise 1: Create a type for absolute and relative urls utilizing template literals
 */
type AbsoluteUrl = `https://${string}`;
type RelativeUrl = `/${string}`;

const test: AbsoluteUrl = 'https://dashboard.merch.google.com';
const test1: RelativeUrl = '/product-catalog-service/api/v1/';




/**
 * Exercise 2: Create Service type which forces AbsoluteUrl if urlType is 'absolute' and RelativeUrl if urlType is 'relative'
 */

interface DummyService {
    name: string;
    url: string;
    urlType: string;
}

const dummyService: DummyService = {
    name: 'catalog',
    urlType: 'relative',
    url: 'https://product-catalog-service/api/v1/', // This shouldn't be allowed!!
}

interface AbsoluteService {
    urlType: 'absolute',
    url: AbsoluteUrl,
}

interface RelativeService {
    urlType: 'relative',
    url: RelativeUrl,
}

type Service = {name: string} & (AbsoluteService | RelativeService);

const test2: Service = {
    name: 'catalog',
    urlType: 'absolute',
    url: 'https://product-catalog-service/api/v1/',
}

// Exercise 3*: Utilize type map to dynamically resolve url based on UrlType
// See return type of `document.createElement` for example implementation
type UrlTypeMap = {
    'absolute': AbsoluteUrl,
    'relative': RelativeUrl,
}

type AutoService<TType extends UrlType> = {
    name: string,
    urlType: TType,
    url: UrlTypeMap[TType],
}

function createService<TType extends UrlType>(props: Omit<AutoService<TType>, 'name'>): AutoService<TType> {
    return {name: 'random name', ...props};
}

const newService = createService({urlType: 'relative', url: 'https://api.printify.com'}); // This shouldn't be allowed!!
