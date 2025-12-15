/**
 * Marker function for ngx-translate-extract.
 *
 * This function serves as a marker to indicate strings that should be extracted
 * for translation. It's a pure identity function that returns the input unchanged,
 * but provides a recognizable pattern for the extraction tool.
 *
 * @template T - The type of the translation key (string or array of strings)
 * @param key - The translation key(s) to mark for extraction
 * @returns The same key(s) unchanged
 *
 * @example
 * // Single string marker
 * const translationKey = marker('HELLO_WORLD');
 *
 * @example
 * // Array of strings
 * const translationKeys = marker(['HELLO', 'WORLD', 'GOODBYE']);
 *
 * @example
 * // With TranslateService
 * import { marker } from '@larrym/ngx-translate-extract-marker';
 *
 * const key = marker('MY_TRANSLATION_KEY');
 * this.translate.get(key).subscribe(translation => {
 *   console.log(translation);
 * });
 */
export function marker<T extends string | readonly string[]>(key: T): T {
  return key;
}

/**
 * Alias for the marker function.
 * Provides a shorter alternative name for convenience.
 *
 * @see {@link marker}
 */
export const _ = marker;

/**
 * Type-safe translation key type.
 * Use this type to ensure compile-time safety for translation keys.
 *
 * @example
 * type MyAppKeys = 'HOME.TITLE' | 'HOME.SUBTITLE' | 'ABOUT.TITLE';
 *
 * const key: TranslationKey<MyAppKeys> = marker('HOME.TITLE'); // ✓ OK
 * const invalid: TranslationKey<MyAppKeys> = marker('INVALID'); // ✗ Type error
 */
export type TranslationKey<T extends string = string> = T;

/**
 * Helper type for translation key arrays.
 *
 * @example
 * type MyAppKeys = 'HOME.TITLE' | 'ABOUT.TITLE';
 * const keys: TranslationKeys<MyAppKeys> = marker(['HOME.TITLE', 'ABOUT.TITLE']);
 */
export type TranslationKeys<T extends string = string> = readonly T[];
