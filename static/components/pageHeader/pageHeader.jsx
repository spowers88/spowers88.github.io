// Framework
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './pageHeader.less';

const PageHeader = ({title = '', description = ''}) => {
  return (
    <header className="pageHeader">
      <h2 className="header">{title}</h2>
      <p className="description">{description}</p>
    </header>
  );
};

const { string } = PropTypes;
PageHeader.propTypes = {
  title: string,
  description: string
};

export default PageHeader;