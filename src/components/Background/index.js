import React from 'react';

import { Wrapper, Content } from './styles.js';
//{ header}
function index({ image, children }) {
  const { largeImageURL, user, pageURL } = image;
  return (
    <Wrapper image={largeImageURL}>
      <Content>
        {children}
        <span className='info'>
          <a data-testid='background-credit' href={pageURL}>
            Credits: {user}
          </a>
        </span>
      </Content>
    </Wrapper>
  );
}

export default index;
