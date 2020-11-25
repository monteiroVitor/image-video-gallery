import React, { useEffect, useState, useRef } from 'react';
import { Nav, Wrapper, Header, Links } from './styles';
import { FaBars, FaSearch } from 'react-icons/fa';

function Navbar({ routes }) {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
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
          <ul className='links' ref={linksRef}>
            {routes.map(({ id, url, text }) => {
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
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
