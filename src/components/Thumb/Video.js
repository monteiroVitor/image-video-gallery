import React from 'react';
import { Wrapper, Info } from './styles.js';

function Video(props) {
  const {
    videos: { tiny },
    views,
    user,
    pageURL,
  } = props.video;
  const { icons } = props;
  return (
    <Wrapper>
      <video
        src={tiny.url}
        onMouseOver={(e) => e.target.play()}
        onMouseOut={(e) => e.target.pause()}
        muted
      ></video>
      <Info>
        <div>
          <p>
            {views}
            <span className='icon'>{icons.views}</span>
          </p>
        </div>
        <a href={pageURL}>
          <h4>{user}</h4>
        </a>
      </Info>
    </Wrapper>
  );
}

export default Video;
