/**
 * Create array of objects with metadata from phrase.
 * @param {string} phrase.
 * @returns {Object} array of objects with metadata.
 */
const formatTextArrayGeneratorHelper = (phrase) => {
  let boldPhrasesArray  = [];
  let colorPhrasesArray = [];
  let finalArray        = [];

  let regexResult = null;

  // Find bold phrases.
  const hasBoldRegex = /<format([a-zA-Z0-9",#=\(\)\s])*(bold)([a-zA-Z0-9",#=\(\)\s])*>(([\sa-zA-Z0-9"'\(\)#])*)*<format>/g;

  while (regexResult = hasBoldRegex.exec(phrase)) {
    const bold    = regexResult[2];
    const content = regexResult[4];

    const resultObject = {
      isBold : bold === 'bold',
      content,
    };

    boldPhrasesArray.push(resultObject);
  }

  // Find color phrases.
  const hasColorRegex = /<format([a-zA-Z0-9"=,\s])*color="([\sa-z,0-9#\(\)]*)"([a-zA-Z0-9"=,\s])*>(([\sa-zA-Z0-9"'\(\)#])*)*<format>/g;

  while (regexResult = hasColorRegex.exec(phrase)) {
    const color   = regexResult[2];
    const content = regexResult[4];

    const resultObject = {
      color : color !== '' ? color : null,
      content,
    };

    colorPhrasesArray.push(resultObject);
  }

  // Remove format attributes from phrase
  const preparedPhrase = phrase.replace(/<format[\sa-zA-Z0-9#,'"=\(\)]*>/g, '<format>');

  // Split prase by <format> tag
  const splittedPhrase = preparedPhrase.split('<format>');

  splittedPhrase.forEach((item) => {
    const phraseObj = {
      content : item,
      isBold  : false,
      color   : null,
    };

    // Compare with array of bold phrases
    boldPhrasesArray.forEach((boldPhrase) => {
      if (item === boldPhrase.content) {
        phraseObj.isBold = true;
      }
    });

    // Compare with array of color phrases
    colorPhrasesArray.forEach((colorPhrase) => {
      if (item === colorPhrase.content) {
        phraseObj.color = colorPhrase.color;
      }
    });

    // Append to final array
    finalArray.push(phraseObj);
  });

  return finalArray;
};

export default formatTextArrayGeneratorHelper;
