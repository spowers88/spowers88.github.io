// Framework
import React from 'react';
import PageHeader from "../components/pageHeader/pageHeader";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader
          title="Sean Powers"
          description="Personal website highlighting my career and projects I'm working on."
        />
        <main className="pageMain">

        </main>
      </React.Fragment>
    );
  }
}

export default Home;