function reverseLinkedList(listNode) {
  let curNode = listNode;
  let listHead = { ...listNode, next: null };

  while(curNode.next) {
    let tempNode = { ...curNode.next, next: null };
    curNode = curNode.next;
    tempNode.next = listHead;
    listHead = tempNode;
  }

  return listHead;
}

function printList(listNode) {
  let curNode = listNode;
  let listString = `${curNode.value}`;

  while(curNode.next) {
    curNode = curNode.next;
    listString += ` -> ${curNode.value}`;
  }

  return listString;
}

function createLinkedList(...values) {
  let head = null;
  let curNode = null;
  let prevNode = null;

  values.forEach((value) => {
    curNode = {
      value: value,
      next: null
    };

    if (!head) {
      head = curNode;
    }

    if (prevNode) {
      prevNode.next = curNode;
    }

    prevNode = curNode;
  });

  return head;
}

function testSolution() {
  const testCases = [
    {
      text: 'Single linked list',
      expected: '1',
      result: printList(reverseLinkedList({value: '1', next: null}))
    },
    {
      text: '10 node linked list',
      expected: '10 -> 9 -> 8 -> 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1',
      result: printList(reverseLinkedList(createLinkedList('1', '2', '3', '4', '5', '6', '7', '8', '9', '10')))
    }
  ];
  let failed = 0;

  console.group('Reversing linked lists without recursion');
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
  let curNode = listNode;
  let listHead = { ...listNode };

  while(curNode.next) {
    let tempNode = { ...curNode.next };
    curNode = curNode.next;
    tempNode.next = listHead;
    listHead = tempNode;
  }

  return listHead;
`;

export {
  testSolution,
  solutionText
}