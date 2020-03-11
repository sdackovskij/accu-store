import React from 'react';
import PropTypes from 'prop-types';
import Sidenav from '../ViewComponents/Navbar/Navbar';
import ContentBar from '../ViewComponents/ContentBar/ContentBar';

const Layout = ({ children }) => (
  <div>
    <Sidenav />
    <ContentBar />
    <main>{children}</main>
  </div>
);


Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
