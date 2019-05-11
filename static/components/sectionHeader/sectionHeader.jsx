// Framework
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './sectionHeader.less';

const SectionHeader = ({title = '', description = '', innerHeader}) => {
  return (
    <header className={`sectionHeader ${innerHeader && 'innerHeader'}`}>
      <h2 className={`header ${!description && 'noDescription'}`}>{title}</h2>
      {description && <p className="description">{description}</p>}
    </header>
  );
};

const { bool, string } = PropTypes;
SectionHeader.propTypes = {
  title: string,
  innerHeader: bool,
  description: string
};

export default SectionHeader;