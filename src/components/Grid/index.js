import React from 'react';

import { Wrapper, Content } from './styles.js';
//{ header}
function index({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default index;
