import React from 'react';
//redux
import { useSelector } from 'react-redux';
//hooks
import { usePageControl } from '../hooks/usePageControl';
//imports Componentes
import { FaSearch } from 'react-icons/fa';
import Grid from '../components/Grid';
import Form from '../components/SearchInput';
import Thumb from '../components/Thumb/Image';
import Background from '../components/Background';
import Spinner from '../components/Spinner';
//icons
import { BiHeart, BiStar } from 'react-icons/bi';
//background image: Urls estão fixas no momento
import { backgroundImages } from '../helpers/data';
function Home() {
  const { query, setQuery, handleSubmit } = usePageControl('images');
  const { data, isLoading } = useSelector((state) => state.fetchedData);
  return (
    <main>
      <Background image={backgroundImages.photos}>
        <Form
          placeholder={'Search Images'}
          query={query}
          setQuery={setQuery}
          handleSubmit={handleSubmit}
          Icon={<FaSearch />}
        />
      </Background>

      {isLoading && <Spinner />}
      <Grid>
        {data?.map((image, index) => {
          return (
            <Thumb
              key={index}
              image={image}
              icons={{ like: <BiHeart />, favorite: <BiStar /> }}
            />
          );
        })}
      </Grid>
    </main>
  );
}

export default Home;
