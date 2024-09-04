/**
 * Exercise 1: Create a conditional type which removes leading underscore from a string
 */
type NoUnderscore<T> = T extends `_${infer R}` ? R : T;

const test: NoUnderscore<'_test'> = 'test';




/**
 * Exercise 2: Create a type which removes leading underscore from all keys in an object
 */
type NoUnderscoreObj<T extends {}> = {
    [K in keyof T as NoUnderscore<K>]: T[K]
}

const objWithUnderscores = {
    _prop: {
        _nestedProp: 123
    }
} as const;

const test2: NoUnderscoreObj<typeof objWithUnderscores> = {
    prop: {
        _nestedProp: 123
    }
}





/**
 * Exercise 3: Create a type which removes leading underscore from all keys in an object recursively
 */
type DeepNoUnderscoreObj<T extends {}> = {
    [K in keyof T as NoUnderscore<K>]: T[K] extends {} ? DeepNoUnderscoreObj<T[K]> : T[K]
}

const test3: DeepNoUnderscoreObj<typeof objWithUnderscores> = {
    prop: {
        nestedProp: 123
    }
}





/**
 * Exercise 4: Create a type which prefixes all boolean properties with 'is'
 */
type PrefixBooleanKeys<T extends {}> = {
    [K in keyof T as T[K] extends boolean ? `is${Capitalize<string & K>}` : K]: T[K]
};

const test4: PrefixBooleanKeys<{active: boolean, prod: boolean, name: string}> = {
    isActive: true,
    isProd: false,
    name: 'test'
}





/**
 * Exercise 5*: Create a type which converts all snake_case property names to camelCase
 */
type StringSnakeToCamelCase<T extends string> = T extends `${infer F}_${infer R}` ? `${Lowercase<F>}${Capitalize<StringSnakeToCamelCase<R>>}` : Lowercase<T>;

type SnakeToCamelCaseShallow<T> = {[K in keyof T as K extends string ? StringSnakeToCamelCase<K> : K]: T[K] }

type SnakeToCamelCase<T> = T extends object ? {[K in keyof T as K extends string ? StringSnakeToCamelCase<K> : K]: SnakeToCamelCaseShallow<T[K]> } : T;

const test5: SnakeToCamelCase<{snake_case: string, nested: {nested_case: string}}> = {
    snakeCase: 'test',
    nested: {
        nestedCase: 'test'
    }
}
