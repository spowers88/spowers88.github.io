// Framework
import React from 'react';
import SectionHeader from "../components/sectionHeader/sectionHeader";

import './home.less';

class Home extends React.Component {
  render() {
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
          <SectionHeader title="Work history" innerHeader />
          <section className="section innerSection">
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;