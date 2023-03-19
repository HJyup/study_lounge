import React from 'react';
import { mount } from 'cypress/react18';

import ListCourse from './ListCourse';

describe('<ListCourse />', () => {
  const props = {
    order: 1,
    title: 'Test Course',
    duration: 60,
    className: 'list-content-unlocked',
  };

  beforeEach(() => {
    mount(<ListCourse {...props} />);
  });

  it('should render the course order and title', () => {
    cy.contains('1. Test Course');
  });

  it('should render the course duration', () => {
    cy.contains('1.0 minutes to complete');
  });

  it('should render the LockClockOutlinedIcon if className is list-content-locked', () => {
    mount(<ListCourse {...props} className="list-content-locked" />);
    cy.get('[data-cy="LockClockOutlinedIcon"]').should('be.visible');
  });
});
