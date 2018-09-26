/**
 * Returns true if its arguments are equals, false otherwise
 * @internal
 * @private
 */
export const equals = (expected: any) => (value: any) => value === expected;

/**
 * Takes a list of predicates and returns a predicate that returns true for a given list of arguments if at least one of the provided
 * predicates is satisfied by those arguments
 * @internal
 * @private
 */
export const anyPass = (checks: Array<(...args: any[]) => boolean>) => (...args: any[]) => checks.some(check => check(...args));

/**
 * Returns true if the specified object property is equal, false otherwise
 * @internal
 * @private
 */
export const propEq = <T extends object>(property: keyof T, value: any) => (item: T) => Boolean(item && item[property] === value);
