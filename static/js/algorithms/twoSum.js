const twoSum = (nums, target) => {
  const numsMap = nums
    .reduce((map, num, index) => {
      if (map[num]) {
        map[num].push(index);
      } else {
        map[num] = [index];
      }

      return map;
    }, {});
  let pair = [];

  Object.keys(numsMap).forEach((numKey) => {
    const leftOver = target - numKey;

    if (numsMap[leftOver] && !pair.length) {
      if (numKey == leftOver) {
        pair = pair.concat(numsMap[numKey]);
      } else {
        pair.push(numsMap[numKey][0]);
        pair.push(numsMap[leftOver][0]);
      }
    }
  });

  return pair;
};

function testSolution() {
  const testCases = [
    {
      text: 'small array of numbers with target of 9',
      expected: [1, 4],
      result: twoSum([0, 2, 4, 6, 7, 10], 9)
    },
    {
      text: 'small array with matching numbers and target of 6',
      expected: [0, 1],
      result: twoSum([3, 3], 6)
    },
    {
      text: 'small array of negative numbers with target of -10',
      expected: [0, 4],
      result: twoSum([-8, -6, -4, -3, -2, -1, 0], -10)
    }
  ];
  let failed = 0;

  console.group('Checking arrays for two sums');
  testCases.forEach((testCase, idx) => {
    console.group(`Test case ${idx + 1}`);
    console.log('%s', testCase.text);
    if (testCase.expected[0] === testCase.result[0] && testCase.expected[1] === testCase.result[1]) {
      console.log('%cPassed!%c', 'color: green', '');
    } else {
      failed += 1;
      console.error('Failed: found %o, but expected %o', testCase.result, testCase.expected);
    }
    console.groupEnd();
  });
  console.log('Total: %i/%i passing.', testCases.length, testCases.length - failed);
  console.groupEnd();
}

const solutionText = `
  const numsMap = nums
    .reduce((map, num, index) => {
      if (map[num]) {
        map[num].push(index);
      } else {
        map[num] = [index];
      }

      return map;
    }, {});
  let pair = [];

  Object.keys(numsMap).forEach((numKey) => {
    const leftOver = target - numKey;

    if (numsMap[leftOver] && !pair.length) {
      if (numKey == leftOver) {
        pair = pair.concat(numsMap[numKey]);
      } else {
        pair.push(numsMap[numKey][0]);
        pair.push(numsMap[leftOver][0]);
      }
    }
  });

  return pair;
`;

export {
  solutionText,
  testSolution
}