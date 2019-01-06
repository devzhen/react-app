import formatTextArrayGeneratorHelper from '../formatTextArrayGeneratorHelper';

it(`test with sixth phrase`, () => {
  const phrase = 'You’re not <format color="#fff">interested<format> in work <format bold color="red">during<format> this time range.';

  const formatTextArray = formatTextArrayGeneratorHelper(phrase);

  expect(formatTextArray.length).toEqual(5);

  expect(formatTextArray[1].isBold).toEqual(false);
  expect(formatTextArray[1].color).toEqual('#fff');
  expect(formatTextArray[1].content).toEqual('interested');

  expect(formatTextArray[3].isBold).toEqual(true);
  expect(formatTextArray[3].color).toEqual('red');
  expect(formatTextArray[3].content).toEqual('during');
});
