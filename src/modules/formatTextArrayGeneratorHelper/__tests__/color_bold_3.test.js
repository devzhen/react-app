import formatTextArrayGeneratorHelper from '../formatTextArrayGeneratorHelper';

it(`test with third phrase`, () => {
  const phrase = 'You’re not <format color="#fff" bold>interested<format> in work during this time range.';

  const formatTextArray = formatTextArrayGeneratorHelper(phrase);

  expect(formatTextArray.length).toEqual(3);

  expect(formatTextArray[1].isBold).toEqual(true);
  expect(formatTextArray[1].color).toEqual('#fff');
  expect(formatTextArray[1].content).toEqual('interested');
});
