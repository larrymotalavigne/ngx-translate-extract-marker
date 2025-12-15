import { describe, it, expect } from 'vitest';
import { marker, _, TranslationKey, TranslationKeys } from './marker.js';

describe('marker', () => {
  describe('single string', () => {
    it('should return the same string', () => {
      const key = 'HOME.TITLE';
      expect(marker(key)).toBe(key);
    });

    it('should work with empty string', () => {
      const key = '';
      expect(marker(key)).toBe(key);
    });

    it('should work with complex translation keys', () => {
      const key = 'HOME.SECTION.SUBSECTION.TITLE';
      expect(marker(key)).toBe(key);
    });

    it('should preserve string identity', () => {
      const key = 'TEST.KEY';
      expect(marker(key)).toBe(key);
      expect(Object.is(marker(key), key)).toBe(true);
    });
  });

  describe('array of strings', () => {
    it('should return the same array', () => {
      const keys = ['HOME.TITLE', 'HOME.SUBTITLE'] as const;
      expect(marker(keys)).toBe(keys);
    });

    it('should work with empty array', () => {
      const keys = [] as const;
      expect(marker(keys)).toBe(keys);
    });

    it('should work with single element array', () => {
      const keys = ['HOME.TITLE'] as const;
      expect(marker(keys)).toBe(keys);
    });

    it('should work with large arrays', () => {
      const keys = Array.from({ length: 100 }, (_, i) => `KEY.${i}`) as readonly string[];
      expect(marker(keys)).toBe(keys);
    });

    it('should preserve array identity', () => {
      const keys = ['TEST.KEY1', 'TEST.KEY2'] as const;
      expect(marker(keys)).toBe(keys);
      expect(Object.is(marker(keys), keys)).toBe(true);
    });
  });

  describe('_ alias', () => {
    it('should work identically to marker for strings', () => {
      const key = 'HOME.TITLE';
      expect(_(key)).toBe(key);
      expect(_(key)).toBe(marker(key));
    });

    it('should work identically to marker for arrays', () => {
      const keys = ['HOME.TITLE', 'HOME.SUBTITLE'] as const;
      expect(_(keys)).toBe(keys);
      expect(_(keys)).toBe(marker(keys));
    });

    it('should be the same function', () => {
      expect(_).toBe(marker);
    });
  });

  describe('type safety', () => {
    it('should accept string literals', () => {
      const key: TranslationKey = marker('HOME.TITLE');
      expect(key).toBe('HOME.TITLE');
    });

    it('should accept typed string literals', () => {
      type AppKeys = 'HOME.TITLE' | 'HOME.SUBTITLE';
      const key: TranslationKey<AppKeys> = marker<AppKeys>('HOME.TITLE');
      expect(key).toBe('HOME.TITLE');
    });

    it('should accept readonly arrays', () => {
      type AppKeys = 'HOME.TITLE' | 'HOME.SUBTITLE';
      const keys: TranslationKeys<AppKeys> = marker<readonly AppKeys[]>([
        'HOME.TITLE',
        'HOME.SUBTITLE',
      ]);
      expect(keys).toEqual(['HOME.TITLE', 'HOME.SUBTITLE']);
    });
  });

  describe('edge cases', () => {
    it('should handle strings with special characters', () => {
      const key = 'KEY.WITH-DASH_UNDERSCORE.123';
      expect(marker(key)).toBe(key);
    });

    it('should handle strings with dots', () => {
      const key = 'MULTIPLE.DOTS.IN.KEY.NAME';
      expect(marker(key)).toBe(key);
    });

    it('should handle strings with unicode', () => {
      const key = 'KEY.WITH.日本語.UNICODE';
      expect(marker(key)).toBe(key);
    });

    it('should handle very long strings', () => {
      const key = 'A'.repeat(1000);
      expect(marker(key)).toBe(key);
    });
  });

  describe('immutability', () => {
    it('should not modify the input string', () => {
      const key = 'HOME.TITLE';
      const result = marker(key);
      expect(result).toBe(key);
      expect(key).toBe('HOME.TITLE');
    });

    it('should not modify the input array', () => {
      const keys = ['HOME.TITLE', 'HOME.SUBTITLE'] as const;
      const originalLength = keys.length;
      const result = marker(keys);
      expect(result).toBe(keys);
      expect(keys.length).toBe(originalLength);
      expect(keys[0]).toBe('HOME.TITLE');
      expect(keys[1]).toBe('HOME.SUBTITLE');
    });
  });
});
