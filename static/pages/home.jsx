// Framework
import React from 'react';
import SectionHeader from "../components/sectionHeader/sectionHeader";

// Components
import WorkLogo from '../components/workLogo/workLogo';

// Styles
import './home.less';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedWork: undefined
    };

    this.selectAWork = this.selectAWork.bind(this);
  }

  selectAWork(work) {
    this.setState({
      selectedWork: work
    });
  }

  render() {
    const { selectedWork } = this.state;
    const workDescriptions = {
      brightwheel: {
        description: `Joined the team at brightwheel as the second front end engineer using React. Helped work on 
        key products and improvements to help drive customer acquisition during back to school season. While working 
        on such a small team I learned a lot about setting up a code base to be worked on by future larger teams.`,
        projects: [
          'Upgrade from react-router 2 to 5',
          'Updated student profiles',
          'Added attachments for students and staff',
          'Updated student immunizations',
          'Added Age, Allergy, Attachments, Contacts, Immunization records, Immunization due/overdue, Medications and Downloads reports',
          'Added ability to use Items during plan/invoice creation in billing',
          'Added Revenue Breakdown report'
        ]
      },
      nerdwallet: {
        description: `Worked on the credit card team as a front end engineer using React. While I was there I 
        implemented several A/B tests on the credit card selection flow, updated the design system used across the 
        credit card platform, and helped create a quiz to help pick a credit card.`,
        projects: [
          'Updated credit card pages to new style guide',
          'Credit Card landing page a/b tests',
          'Helped build credit card recommendation quiz',
          'Best of Credit Cards a/b/ tests',
          'Credit Card filter tool a/b tests'
        ]
      },
      rocketlawyer: {
        description: `While at Rocket Lawyer I worked several teams and built pages and flows across the entire site 
        using AngularJS. I lead the construction of the logged in dashboard redesign, helped implement angular 1 
        and later on set up our transition from angular 1 to 2. Also helped with the localization effort when Rocket 
        Lawyer implemented a french and spanish version of the website.`,
        projects: [
          'Upgraded Angular 1 to 2',
          'User Activities dashboard',
          'User upload page',
          'Account settings page',
          'Ask a lawyer flow',
          'LLC flow'
        ]
      },
      cbsinteractive: {
        description: `Joined CBS interactive after graduating college and worked on the team responsible for CNet. 
        I learned a lot about developing on web pages while there. I helped refactor the live Q&A forum page and 
        redesign the CNet forums.`,
        projects: [
          'CBS redesign launch',
          'Live editor Q/A redesign',
          'Forum style update',
          'CNet style refresh'
        ]
      }
    };

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
              <WorkLogo selectedWork={selectedWork} work="brightwheel" selectAWork={this.selectAWork} />
              <WorkLogo selectedWork={selectedWork} work="nerdwallet" selectAWork={this.selectAWork} />
              <WorkLogo selectedWork={selectedWork} work="rocketlawyer" selectAWork={this.selectAWork} />
              <WorkLogo selectedWork={selectedWork} work="cbsinteractive" selectAWork={this.selectAWork} />
            </header>
            <section className="workSection">
              {
                selectedWork && workDescriptions[selectedWork].description &&
                <React.Fragment>
                  <h3 className="workHeading">Summary</h3>
                  <p className="workDescription">
                    {workDescriptions[selectedWork].description}
                  </p>
                </React.Fragment>
              }
              {
                selectedWork && workDescriptions[selectedWork].projects &&
                <React.Fragment>
                  <h3 className="workHeading">Projects</h3>
                  <ul className="projectsList">
                    {
                      workDescriptions[selectedWork].projects.map((project, idx) => {
                        return <li key={`${selectedWork}-${idx}`}>{project}</li>
                      })
                    }
                  </ul>
                </React.Fragment>
              }
              {
                !selectedWork &&
                <p className="workDescription">
                  {!selectedWork && 'Please click a logo above to view the details'}
                </p>
              }
            </section>
          </section>
          <section className="section">
            <SectionHeader title="Hobbies" innerHeader />
            <section className="section innerSection">
            </section>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;