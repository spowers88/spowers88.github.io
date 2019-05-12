// Framework
import React from 'react';
import SectionHeader from "../components/sectionHeader/sectionHeader";

import './home.less';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedWork: undefined
    };
    this.works = {
      brightwheel: 'brightwheel',
      nerdwallet: 'nerdwallet',
      rocketlawyer: 'rocketlawyer',
      cbsinteractive: 'cbsinteractive'
    };

    this.selectAWork = this.selectAWork.bind(this);
  }

  selectAWork(work) {
    const { state } = this.state;

    this.setState({
      selectedWork: this.works[work]
    })
  }

  render() {
    const { selectedWork } = this.state;

    return (
      <React.Fragment>
        <SectionHeader
          title="Sean Powers"
          description="Personal website highlighting my career and projects I'm working on."
        />
        <section className="section">
          <SectionHeader title="Current projects" innerHeader />
          <section className="section innerSection">
            <div className="project">
              <img
                alt="fullstack react"
                src="/static/img/fullstack-react-native-gumroad.png"
                className="projectImage"
              />
              <p className="projectDescription">
                Currently reading through the great fullstack react native book. Going to use what I
                learn to create an app for tracking the comic books I own.
              </p>
            </div>
          </section>
        </section>
        <section className="section">
          <SectionHeader title="Work history (recent - oldest)" innerHeader />
          <section className="section innerSection">
            <header className="workImages">
              <a className="logoLink" onClick={() => {this.selectAWork(this.works.brightwheel)}}>
                <span className="imageWrapper">
                  <img className="brightwheelLogo" src="/static/img/brightwheel-logo.svg" alt="brightwheel logo" />
                </span>
                <span className="view">View</span>
              </a>
              <a className="logoLink" onClick={() => {this.selectAWork(this.works.nerdwallet)}}>
                <span className="imageWrapper">
                  <img className="nerdwalletLogo" src="/static/img/nerdwallet-logo.png" alt="nerdwallet logo" />
                </span>
                <span className="view">View</span>
              </a>
              <a className="logoLink" onClick={() => {this.selectAWork(this.works.rocketlawyer)}}>
                <span className="imageWrapper">
                  <img className="rocketLawyerLogo" src="/static/img/rocketlawyer-logo.png" alt="rocket lawyer logo" />
                </span>
                <span className="view">View</span>
              </a>
              <a className="logoLink" onClick={() => {this.selectAWork(this.works.cbsinteractive)}}>
                <span className="imageWrapper">
                  <img className="cbsLogo" src="/static/img/cbs-logo.png" alt="cbs interactive logo" />
                </span>
                <span className="view">View</span>
              </a>
            </header>
            {
              selectedWork &&
              <section>
                <p>{selectedWork}</p>
              </section>
            }
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;