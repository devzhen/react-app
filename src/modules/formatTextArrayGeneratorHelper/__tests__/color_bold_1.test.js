import formatTextArrayGeneratorHelper from '../formatTextArrayGeneratorHelper';

it(`test with first phrase`, () => {
  const phrase = 'You’re not <format color="red" bold>interested<format> in work during this time range.';

  const formatTextArray = formatTextArrayGeneratorHelper(phrase);

  expect(formatTextArray.length).toEqual(3);

  expect(formatTextArray[1].isBold).toEqual(true);
  expect(formatTextArray[1].color).toEqual('red');
  expect(formatTextArray[1].content).toEqual('interested');
});
