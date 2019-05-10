function arrayMissingInteger(arrayToTest) {
  let oneToHundSum = 0;

  for (let num = 1; num < 101; num++) {
    const index = num - 1;
    oneToHundSum += num;

    if (arrayToTest[index]) {
      oneToHundSum -= arrayToTest[index];
    }
  }

  return oneToHundSum;
}

function createArrayWithMissingNumber(idxToSkip) {
  const arr = [];

  for (let idx = 1; idx < 101; idx++) {
    if (idx !== idxToSkip) {
      arr.push(idx);
    }
  }

  return arr;
}

function testSolution() {
  const testCases = [
    {
      text: 'missing 1st item in array',
      expected: 1,
      result: arrayMissingInteger(createArrayWithMissingNumber(1))
    },
    {
      text: 'missing 50th item in array',
      expected: 50,
      result: arrayMissingInteger(createArrayWithMissingNumber(50))
    },
    {
      text: 'missing 100th item in array',
      expected: 100,
      result: arrayMissingInteger(createArrayWithMissingNumber(100))
    },
    {
      text: 'missing 15th item in array',
      expected: 15,
      result: arrayMissingInteger(createArrayWithMissingNumber(15))
    },
    {
      text: 'missing 49th item in array',
      expected: 49,
      result: arrayMissingInteger(createArrayWithMissingNumber(49))
    }
  ];
  let failed = 0;

  console.group('Missing number in 1 - 100 array');
  testCases.forEach((testCase, idx) => {
    console.group(`Test case ${idx + 1}`);
    console.log('%s', testCase.text);
    if (testCase.expected === testCase.result) {
      console.log('%cPassed!%c', 'color: green', '');
    } else {
      failed += 1;
      console.error('Failed: found %i, but expected %i', testCase.result, testCase.expected);
    }
    console.groupEnd();
  });
  console.log('Total: %i/%i passing.', testCases.length, testCases.length - failed);
  console.groupEnd();
}

const solutionText = `
  let oneToHundSum = 0;

  for (let num = 1; num < 101; num++) {
    const index = num - 1;
    oneToHundSum += num;

    if (arrayToTest[index]) {
      oneToHundSum -= arrayToTest[index];
    }
  }

  return oneToHundSum;
`;

export {
  testSolution,
  solutionText
}