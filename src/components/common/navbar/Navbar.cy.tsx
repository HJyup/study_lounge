import React from 'react';
import { mount } from 'cypress/react18';

import Navbar from './Navbar';

import styles from './Navbar.module.scss';

describe('<Navbar />', () => {
  it('should render the navbar', () => {
    mount(<Navbar />);
    cy.get('.' + styles['title']).should('exist');
  });

  it('should display the app name', () => {
    mount(<Navbar />);
    cy.get('.' + styles['title']).contains('Study Lounge');
  });
});
