/**
 *
 **/
function findLargestAndSmallestInt(intArray) {
  let smallest;
  let largest;

  intArray.forEach((int) => {
    smallest = int < smallest || !Number.isInteger(smallest) ? int : smallest;
    largest = int > largest || !Number.isInteger(largest) ? int : largest;
  });

  return {
    smallest,
    largest
  };
}

function testSolution() {
  const testCases = [
    {
      text: "Array of only one number",
      expected: { smallest: 5, largest: 5 },
      result: findLargestAndSmallestInt([ 5 ])
    },
    {
      text: 'Random short positive integers',
      expected: { smallest: 1, largest: 20 },
      result: findLargestAndSmallestInt([
        4, 5, 3, 9, 10, 20, 1, 12
      ])
    },
    {
      text: 'Random short positive and negative integers',
      expected: { smallest: -9, largest: 19 },
      result: findLargestAndSmallestInt([
        0, 5, 19, -2, -1, 8, -9, 11
      ])
    },
    {
      text: 'Random long positive integers',
      expected: { smallest: 0, largest: 90 },
      result: findLargestAndSmallestInt([
        4, 4, 5, 39, 3, 9, 10, 20, 1, 12, 0, 72, 90, 81, 88, 55, 50, 42, 60, 8, 11, 3, 19, 37, 89
      ])
    },
    {
      text: 'Random long positive and negative integers',
      expected: { smallest: -63, largest: 99 },
      result: findLargestAndSmallestInt([
        0, 0, 84, 5, 19, -2, -32, -1, 8, -9, 11, 24, -16, -20, 12, -63, 63, 99, 10, 76, 88, 24, -37
      ])
    }
  ];
  let failed = 0;

  console.group('Finding largest and smallest integer in array');
  testCases.forEach((testCase, idx) => {
    console.group(`Test case ${idx + 1}`);
    console.log('%s', testCase.text);
    if (testCase.expected.smallest === testCase.result.smallest && testCase.expected.largest === testCase.result.largest) {
      console.log('%cPassed!%c', 'color: green', '');
    } else {
      failed += 1;
      console.error('Failed: found %o, but expected %o', testCase.result, testCase.expected);
    }
    console.groupEnd();
  });
  console.groupEnd();
}

const solutionText = `
  let smallest;
  let largest;

  intArray.forEach((int) => {
    smallest = int < smallest || !Number.isInteger(smallest) ? int : smallest;
    largest = int > largest || !Number.isInteger(largest) ? int : largest;
  });

  return {
    smallest,
    largest
  };
`;

export {
  testSolution,
  solutionText
}