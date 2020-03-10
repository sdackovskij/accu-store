import React from 'react';
import PropTypes from 'prop-types';
import Sidenav from '../ViewComponents/Navbar/Sidenav';

const Layout = ({ children }) => (
  <div>
    <Sidenav />
    <main>{children}</main>
  </div>
);


Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
