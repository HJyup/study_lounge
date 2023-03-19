import React from 'react';
import { mount } from 'cypress/react18';

import Navbar from './Navbar';

describe('<Navbar />', () => {
  it('should render the navbar', () => {
    mount(<Navbar />);
    cy.get('.MuiAppBar-root').should('exist');
  });

  it('should display the app name', () => {
    mount(<Navbar />);
    cy.get('.MuiTypography-subtitle1').contains('Study Lounge');
  });
});
