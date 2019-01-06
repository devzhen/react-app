import formatTextArrayGeneratorHelper from '../formatTextArrayGeneratorHelper';

it(`test with eighth phrase`, () => {
  const phrase = 'You’re not <format color="red">interested<format> in <format color="#fff">work during this<format> time range.';

  const formatTextArray = formatTextArrayGeneratorHelper(phrase);

  expect(formatTextArray.length).toEqual(5);

  // test first bold sub-prase
  expect(formatTextArray[1].isBold).toEqual(false);
  expect(formatTextArray[1].color).toEqual('red');
  expect(formatTextArray[1].content).toEqual('interested');

  // test first bold sub-prase
  expect(formatTextArray[3].isBold).toEqual(false);
  expect(formatTextArray[3].color).toEqual('#fff');
  expect(formatTextArray[3].content).toEqual('work during this');
});
