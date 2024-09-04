/**
 * https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
 */

/**
 * Exercise 1: Create a conditional type which removes leading underscore from a string
 */
type NoUnderscore<T> = any;

const test: NoUnderscore<'_test'> = 'test';




/**
 * Exercise 2: Create a type which removes leading underscore from all keys in an object
 */
type NoUnderscoreObj<T> = any;

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
type DeepNoUnderscoreObj<T> = any;

const test3: DeepNoUnderscoreObj<typeof objWithUnderscores> = {
    prop: {
        nestedProp: 123
    }
}





/**
 * Exercise 4: Create a type which prefixes all boolean properties with 'is'
 */
type PrefixBooleanKeys<T> = any

const test4: PrefixBooleanKeys<{active: boolean, prod: boolean, name: string}> = {
    isActive: true,
    isProd: false,
    name: 'test'
}





/**
 * Exercise 5*: Create a type which converts all snake_case property names to camelCase
 */
type SnakeToCamelCase<T> = any;

const test5: SnakeToCamelCase<{snake_case: string, nested: {nested_case: string}}> = {
    snakeCase: 'test',
    nested: {
        nestedCase: 'test'
    }
}
