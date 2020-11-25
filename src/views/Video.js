import React from 'react';
//redux
import { useSelector } from 'react-redux';
//hooks
import { usePageControl } from '../hooks/usePageControl';
//imports Componentes
import { FaSearch } from 'react-icons/fa';
import Grid from '../components/Grid';
import Form from '../components/SearchInput';
import Thumb from '../components/Thumb/Video';
import Background from '../components/Background';
import Spinner from '../components/Spinner';
//icons
import { FaRegEye } from 'react-icons/fa';
//background image: Urls estão fixas no momento
import { backgroundImages } from '../helpers/data';

function Video() {
  const { query, setQuery, handleSubmit } = usePageControl('videos');
  const { data, isLoading } = useSelector((state) => state.fetchedData);

  return (
    <main>
      <Background image={backgroundImages.videos}>
        <Form
          placeholder={'Search Videos'}
          query={query}
          setQuery={setQuery}
          handleSubmit={handleSubmit}
          Icon={<FaSearch />}
        />
      </Background>
      {isLoading && <Spinner />}
      <Grid>
        {data?.map((video, index) => {
          return (
            <Thumb key={index} video={video} icons={{ views: <FaRegEye /> }} />
          );
        })}
      </Grid>
    </main>
  );
}

export default Video;
