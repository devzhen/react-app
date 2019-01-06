import formatTextArrayGeneratorHelper from '../formatTextArrayGeneratorHelper';

it(`test with fifth phrase`, () => {
  const phrase = 'You’re not <format color="#fff">interested<format> in work during this time range.';

  const formatTextArray = formatTextArrayGeneratorHelper(phrase);

  expect(formatTextArray.length).toEqual(3);

  expect(formatTextArray[1].isBold).toEqual(false);
  expect(formatTextArray[1].color).toEqual('#fff');
  expect(formatTextArray[1].content).toEqual('interested');
});
