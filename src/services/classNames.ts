/**
 * It converts array of strings and boolean values to a string with class names.
 * All false values will be ignored.
 *
 * @param arr
 */
export const classNames = (arr:any) => arr.filter(Boolean).join(' ');
