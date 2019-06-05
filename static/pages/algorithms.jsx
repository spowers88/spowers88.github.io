// Framework
import React from 'react';

// Components
import Algorithm from '../components/algorithm/algorithm';
import SectionHeader from '../components/sectionHeader/sectionHeader';

// Algorithms
import * as TwoSum from '../js/algorithms/twoSum';
import * as StringAnagrams from '../js/algorithms/stringAnagrams';
import * as MissingInteger from '../js/algorithms/missingInteger';
import * as LargestSmallestInt from '../js/algorithms/largestSmallestInt';
import * as ReverseLinkedListNoRecursion from '../js/algorithms/reverseLinkedListNoRecursion';

class Algorithms extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SectionHeader
          title="Algorithms"
          description={
            `Various algorithms implemented to challenge myself and practice. These are not optimal 
            solutions; this is just me trying to figure out working solutions and attempting to optimize them after.
            (Please open the console to see the tests being run after clicking 'Run solution')`
          }
        />
        <section className="section">
          <SectionHeader title="Array algorithms" innerHeader />
          <section className="section innerSection">
            <Algorithm
              solution={MissingInteger.solutionText}
              testRunner={MissingInteger.testSolution}
              description="How to find the missing number in given integer array of 1 to 100?"
            />
            <Algorithm
              solution={LargestSmallestInt.solutionText}
              testRunner={LargestSmallestInt.testSolution}
              description="How to find the largest and smallest number in an unsorted integer array?"
            />
            <Algorithm
              solution={TwoSum.solutionText}
              testRunner={TwoSum.testSolution}
              description="Given an array of integers, return indices of the two numbers such that they add up to a specific target."
            />
          </section>
        </section>
        <section className="section">
          <SectionHeader title="String algorithms" innerHeader />
          <section className="section innerSection">
            <Algorithm
              solution={StringAnagrams.solutionText}
              testRunner={StringAnagrams.testSolution}
              description="How to check if two Strings are anagrams of each other?"
            />
          </section>
        </section>
        <section className="section">
          <SectionHeader title="Linked list algorithms" innerHeader />
          <section className="section innerSection">
            <Algorithm
              solution={ReverseLinkedListNoRecursion.solutionText}
              testRunner={ReverseLinkedListNoRecursion.testSolution}
              description="How to reverse a singly linked list without recursion?"
            />
          </section>
        </section>
        <section className="section">
          <SectionHeader title="Sorting algorithms" innerHeader />
          <section className="section innerSection">
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default Algorithms;