import formatTextArrayGeneratorHelper from '../formatTextArrayGeneratorHelper';

it(`test with third phrase`, () => {
  const phrase = 'You’re not <format color="#fff">interested<format> in work during this time range.';

  const formatTextArray = formatTextArrayGeneratorHelper(phrase);

  expect(formatTextArray.length).toEqual(3);

  // test first bold sub-prase
  expect(formatTextArray[1].isBold).toEqual(false);
  expect(formatTextArray[1].color).toEqual('#fff');
  expect(formatTextArray[1].content).toEqual('interested');
});
