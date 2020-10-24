import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#e0e0e0',
    error: '#e9b425',
    button: 'linear-gradient(90deg, #ff2d04 0%, #c13216 100%)',
    background: 'linear-gradient(180deg, #33393d 0%, #1c1d20 100%)',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Theme;
