import formatTextArrayGeneratorHelper from '../formatTextArrayGeneratorHelper';

it(`test with fourth phrase`, () => {
  const phrase = 'You’re not <format test color="#fff" test test>interested<format> in work during this time range.';

  const formatTextArray = formatTextArrayGeneratorHelper(phrase);

  expect(formatTextArray.length).toEqual(3);

  // test first bold sub-prase
  expect(formatTextArray[1].isBold).toEqual(false);
  expect(formatTextArray[1].color).toEqual('#fff');
  expect(formatTextArray[1].content).toEqual('interested');
});
