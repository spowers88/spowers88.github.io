// Framework
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './algorithm.less';

class Algorithm extends React.Component {
  constructor(props) {
    super(props);

    this.handleRunSolution = this.handleRunSolution.bind(this);
  }

  handleRunSolution() {
    const { testRunner } = this.props;
    testRunner();
  };

  render() {
    const { description, solution } = this.props;
    return (
      <section className="algorithm">
        <p className="description">{description}</p>
        <pre className="solution">
          <code>{solution}</code>
        </pre>
        <button
          onClick={this.handleRunSolution}
          className="run"
        >
          Run solution
        </button>
      </section>
    );
  }
}

const { func, string } = PropTypes;
Algorithm.propTypes = {
  solution: string.isRequired,
  testRunner: func.isRequired,
  description: string.isRequired
};

export default Algorithm;