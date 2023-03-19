import React from 'react';
import { mount } from 'cypress/react18';

import Video from './Video';

describe('<Video />', () => {
  const props = {
    source: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    hasControls: true,
  };

  it('should render the video element', () => {
    mount(<Video {...props} />);
    cy.get('video').should('exist');
  });

  it('should set the playback rate to 1 when the component mounts', () => {
    mount(<Video {...props} />);
    cy.get('video').should('have.prop', 'playbackRate', 1);
  });

  it('should render video without controls when hasControls=false', () => {
    mount(<Video source={props.source} hasControls={false} />);
    cy.get('video')
      .should('have.prop', 'autoplay', true)
      .should('have.prop', 'muted', true);
  });
});
