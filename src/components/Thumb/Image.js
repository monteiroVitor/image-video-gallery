import React from 'react';
import { Wrapper, Info } from './styles.js';
function Image(props) {
  const { user, pageURL, likes, webformatURL, tags, favorites } = props.image;
  const { icons } = props;
  return (
    <Wrapper>
      <img src={webformatURL} alt={tags} />
      <Info>
        <div>
          <p>
            <span className='icon'>{icons.like}</span>
            {likes}
            <span className='icon'>{icons.favorite}</span>
            {favorites}
          </p>
        </div>
        <a href={pageURL}>
          <h4>{user}</h4>
        </a>
      </Info>
    </Wrapper>
  );
}

export default Image;
