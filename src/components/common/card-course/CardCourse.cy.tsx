import React from 'react';
import { mount } from 'cypress/react18';

import CardCourse, { CardCourseProps } from './CardCourse';

import styles from './CardCourse.module.scss';

describe('<CardCourse />', () => {
  const props: CardCourseProps = {
    image:
      'https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it',
    courseId: '123',
    title: 'Example Course',
    tags: 'Example Tag',
    rating: 4.5,
    description: 'Example description',
    skills: ['Skill 1', 'Skill 2'],
    previewVideo: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  };

  it('renders the card with the correct props', () => {
    mount(<CardCourse {...props} />);
    cy.get('img').should('have.attr', 'src', props.image + '/cover.webp');
    cy.get('.' + styles['information']).should('contain', props.title);
    cy.get('.' + styles['information']).should('contain', props.tags);
    cy.get('.' + styles['description']).should('contain', props.description);
    cy.get('.' + styles['skills']).should('contain', props.skills[0]);
  });

  it('shows the preview video on hover', () => {
    mount(<CardCourse {...props} />);
    cy.get('.' + styles['video']).should('have.css', 'display', 'none');
    cy.get('.' + styles['card'])
      .trigger('mouseenter')
      .should('have.css', 'display', 'flex');
  });
});
