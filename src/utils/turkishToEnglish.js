/**
 * @param {String} text
 * @returns {Object}
 * @description Converts Turkish characters in the given string to English characters to prevent API request errors.
 */
export function turkishToEnglish(text) {
  const turkishChars = "çğıöşüÇĞİÖŞÜ";
  const englishEquivalents = "cgiosuCGIOSU";
  const charMap = new Map();

  for (let i = 0; i < turkishChars.length; i++) {
    charMap.set(turkishChars.charAt(i), englishEquivalents.charAt(i));
  }

  let convertedText = "";
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    convertedText += charMap.has(char) ? charMap.get(char) : char;
  }

  return convertedText;
}
