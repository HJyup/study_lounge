import React from 'react';
import { mount } from 'cypress/react18';

import MediaContentCourse from './MediaContentCourse';

describe('<MediaContentCourse />', () => {
  it('renders all the props correctly', () => {
    const props = {
      title: 'Test Course',
      courseDescription: 'This is a test course.',
      rating: 4.5,
      launchDate: new Date('2022-03-19T00:00:00Z'),
      status: 'In Progress',
      skills: ['Test Skill 1', 'Test Skill 2'],
      videoLink: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    };

    mount(<MediaContentCourse {...props} />);

    cy.contains(props.title);
    cy.contains(props.courseDescription);
    cy.contains('Course Rating');
    cy.contains(props.skills[0]);
    cy.contains(props.skills[1]);
    cy.contains(
      `Launch date: ${props.launchDate.getFullYear()}/${props.launchDate.getMonth()}/${props.launchDate.getDay()}`,
    );
  });
});
