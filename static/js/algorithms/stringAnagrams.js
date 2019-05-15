function checkForAnagram(str1, str2) {
  let str1Sum = 0;
  let str2Sum = 0;
  const longestString = str1.length > str2.length ? str1.length : str2.length;

  for(let idx = 0; idx < longestString; idx++) {
    if (str1[idx]) {
      str1Sum += getLowerCaseAsciiValue(str1[idx]);
    }

    if (str2[idx]) {
      str2Sum += getLowerCaseAsciiValue(str2[idx]);
    }
  }

  return str1Sum === str2Sum;
}

function getLowerCaseAsciiValue(char) {
  const ASCII_A_VALUE = 97;
  const UPPER_TO_LOWER_CONVERSION = 32;

  if (!char || char === ' ') {
    return 0;
  }

  if (char.charCodeAt(0) < ASCII_A_VALUE) {
    return char.charCodeAt(0) + UPPER_TO_LOWER_CONVERSION;
  }

  return char.charCodeAt(0);
}

function testSolution() {
  const testCases = [
    {
      text: 'small anagram of strings abc and cba',
      expected: true,
      result: checkForAnagram('abc', 'cba')
    },
    {
      text: 'not an anagram with strings abcd and edcba',
      expected: false,
      result: checkForAnagram('abcd', 'edcba')
    },
    {
      text: 'single length string of a',
      expected: true,
      result: checkForAnagram('a', 'a')
    },
    {
      text: 'mixed case strings of AbC and cbA',
      expected: true,
      result: checkForAnagram('AbC', 'cbA')
    },
    {
      text: 'longer anagram of Tom Marvolo Riddle and I am Lord Voldemort',
      expected: true,
      result: checkForAnagram('Tom Marvolo Riddle', 'I am Lord Voldemort')
    }
  ];
  let failed = 0;

  console.group('Checking string anagrams');
  testCases.forEach((testCase, idx) => {
    console.group(`Test case ${idx + 1}`);
    console.log('%s', testCase.text);
    if (testCase.expected === testCase.result) {
      console.log('%cPassed!%c', 'color: green', '');
    } else {
      failed += 1;
      console.error('Failed: found %s, but expected %s', testCase.result, testCase.expected);
    }
    console.groupEnd();
  });
  console.log('Total: %i/%i passing.', testCases.length, testCases.length - failed);
  console.groupEnd();
}

const solutionText = `
  let str1Sum = 0;
  let str2Sum = 0;
  const longestString = str1.length > str2.length ? str1.length : str2.length;

  for(let idx = 0; idx < longestString; idx++) {
    if (str1[idx]) {
      str1Sum += getLowerCaseAsciiValue(str1[idx]);
    }

    if (str2[idx]) {
      str2Sum += getLowerCaseAsciiValue(str2[idx]);
    }
  }

  return str1Sum === str2Sum;
`;

export {
  solutionText,
  testSolution
}