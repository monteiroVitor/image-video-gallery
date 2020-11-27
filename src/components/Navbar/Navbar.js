import React, { useEffect, useState, useRef } from 'react';
import { Nav, Wrapper, Header, Links } from './styles';
import { FaBars, FaSearch } from 'react-icons/fa';

function Navbar({ routes }) {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const current = localStorage.getItem('@image-video-gallery/route');
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    localStorage.setItem('@image-video-gallery/route', routes[0].text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <Nav>
      <Wrapper>
        <Header>
          <FaSearch className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </Header>
        <Links ref={linksContainerRef}>
          <ul data-testid='links-navbar' className='links' ref={linksRef}>
            {routes.map(({ id, url, text }) => {
              return (
                <li key={id}>
                  <a
                    className={current === text ? 'current' : null}
                    onClick={() =>
                      localStorage.setItem('@image-video-gallery/route', text)
                    }
                    href={url}
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </Links>
      </Wrapper>
    </Nav>
  );
}

export default Navbar;
