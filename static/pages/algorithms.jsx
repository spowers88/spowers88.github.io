// Framework
import React from 'react';

// Components
import Algorithm from '../components/algorithm/algorithm';
import SectionHeader from '../components/sectionHeader/sectionHeader';

// Algorithms
import * as MissingInteger from '../js/algorithms/missingInteger';
import * as LargestSmallestInt from '../js/algorithms/largestSmallestInt';

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
          </section>
        </section>
        <section className="section">
          <SectionHeader title="String algorithms" innerHeader />
          <section className="section innerSection">
          </section>
        </section>
        <section className="section">
          <SectionHeader title="Linked list algorithms" innerHeader />
          <section className="section innerSection">
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