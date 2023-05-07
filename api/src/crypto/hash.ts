import crypto from 'node:crypto';

/**
 * Generate a hash from a string.
 *
 * @param {string} value String to generate hash from.
 * @returns {string} Hash string.
 */
export const generateHash = (value: string): string => {
  if (!value) {
    throw new Error('Value is required to generate hash');
  }

  return crypto.createHash('sha256').update(value).digest('hex');
};

/**
 * Compare a non-hash string with a hash string by generating a hash from the value and comparing it to the hash.
 *
 * @param {string} value Non-hash string.
 * @param {string} hash Hash string.
 * @returns {boolean} True if the hash matches the generated hash from the value.
 */
export const compareHash = (value: string, hash: string): boolean => {
  if (!value) {
    throw new Error('Value is required to compare hash');
  }

  if (!hash) {
    throw new Error('Hash is required to compare hash');
  }

  return generateHash(value) === hash;
};
