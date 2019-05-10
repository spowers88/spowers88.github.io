// Framework
import React from 'react';

// Components
import Algorithm from '../components/algorithm/algorithm';
import PageHeader from '../components/pageHeader/pageHeader';

// Algorithms
import * as MissingInteger from '../js/algorithms/missingInteger';
import * as LargestSmallestInt from '../js/algorithms/largestSmallestInt';

class Algorithms extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader
          title="Algorithms"
          description={
            `Various algorithms implemented to challenge myself and practice. These are not optimal 
            solutions; this is just me trying to figure out working solutions and attempting to optimize them after.`
          }
        />
        <section className="pageMain">
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
      </React.Fragment>
    );
  }
}

export default Algorithms;