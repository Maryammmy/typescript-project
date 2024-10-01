/**
 * Slices the input text to a specified character limit, adding ellipsis (`...`) if the text exceeds the limit.
 *
 * @param {string} text - The input text to be sliced.
 * @param {number} [limit=50] - The character limit for the slice. Defaults to 50 if not provided.
 * @returns {string} The sliced text with ellipsis if it exceeds the limit, or the original text if it's shorter.
 */
export const textSlicer = (text:string, limit:number = 50) => {
    if (text.length >= limit) return `${text.slice(0, limit)} ...`;
    return text;
};