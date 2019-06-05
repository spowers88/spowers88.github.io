// Framework
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './workLogo.less';

class WorkLogo extends React.Component {
  constructor() {
    super();

    this.works = {
      brightwheel: {
        name: 'brightwheel',
        logo: '/static/img/brightwheel-logo.svg',
        alt: 'brightwheel logo'
      },
      nerdwallet: {
        name: 'nerdwallet',
        logo: '/static/img/nerdwallet-logo.png',
        alt: 'nerdwallet logo'
      },
      rocketlawyer: {
        name: 'rocketlawyer',
        logo: '/static/img/rocketlawyer-logo.png',
        alt: 'rocketlawyer logo'
      },
      cbsinteractive: {
        name: 'cbsinteractive',
        logo: '/static/img/cbs-logo.png',
        alt: 'cbsinteractive logo'
      }
    };
  }

  render() {
    const { work, selectedWork, selectAWork } = this.props;

    return (
      <a
        className={`logoLink ${selectedWork === this.works[work].name && 'selected'}`}
        onClick={() => {selectAWork(this.works[work].name)}}
      >
        <span className="imageWrapper">
          <img className="logo" src={this.works[work].logo} alt={this.works[work].alt} />
        </span>
      </a>
    );
  }
}

const { func, string } = PropTypes;
WorkLogo.propTypes = {
  work: string,
  selectAWork: func.isRequired,
  selectedWork: string
};

export default WorkLogo;