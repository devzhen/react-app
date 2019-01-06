import formatTextArrayGeneratorHelper from '../formatTextArrayGeneratorHelper';

it(`test with third phrase`, () => {
  const phrase = 'You’re not <format test bold>interested<format> in work during this time range.';

  const formatTextArray = formatTextArrayGeneratorHelper(phrase);

  expect(formatTextArray.length).toEqual(3);

  // test first sub-prase
  expect(formatTextArray[0].isBold).toEqual(false);
  expect(formatTextArray[0].color).toEqual(null);
  expect(formatTextArray[0].content).toEqual('You’re not ');

  // test second sub-prase
  expect(formatTextArray[1].isBold).toEqual(true);
  expect(formatTextArray[1].color).toEqual(null);
  expect(formatTextArray[1].content).toEqual('interested');

  // test third sub-prase
  expect(formatTextArray[2].isBold).toEqual(false);
  expect(formatTextArray[2].color).toEqual(null);
  expect(formatTextArray[2].content).toEqual(' in work during this time range.');
});
