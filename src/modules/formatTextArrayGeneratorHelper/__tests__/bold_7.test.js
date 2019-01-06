import formatTextArrayGeneratorHelper from '../formatTextArrayGeneratorHelper';

it(`test with seventh phrase`, () => {
  const phrase = 'You’re not <format bold>interested<format> in work <format>during this time<format> range.';

  const formatTextArray = formatTextArrayGeneratorHelper(phrase);

  expect(formatTextArray.length).toEqual(5);

  // test first bold sub-prase
  expect(formatTextArray[1].isBold).toEqual(true);
  expect(formatTextArray[1].color).toEqual(null);
  expect(formatTextArray[1].content).toEqual('interested');

  // test second bold sub-prase
  expect(formatTextArray[3].isBold).toEqual(false);
  expect(formatTextArray[3].color).toEqual(null);
  expect(formatTextArray[3].content).toEqual('during this time');
});
