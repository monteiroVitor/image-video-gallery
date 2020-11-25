import { useState, useEffect } from 'react';
//imports redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchData, updatePage } from '../actions/fetchDataActions';

import API from '../service/API';

export const usePageControl = (pageType) => {
  //redux
  const { isLoading } = useSelector((state) => state.fetchedData);
  const dispatch = useDispatch();
  //states
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  //Funções auxiliares
  const getData = () => {
    let url;
    if (pageType === 'images')
      url = API.endpointImages(query.replaceAll(' ', '+'), page + 1);
    if (pageType === 'videos')
      url = API.endpointVideos(query.replaceAll(' ', '+'), page + 1);
    dispatch(fetchData(url));
  };
  //funções handle
  const handleSubmit = (e) => {
    //Colocar alguma coisa p prevenir pesquisa vazia
    e.preventDefault();
    dispatch(updatePage(0));
    if (!page) {
      getData();
      return;
    }
    setPage(0);
  };
  //useEffects
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      const totalHeight = window.innerHeight + window.scrollY;
      const scrollHeight = document.body.scrollHeight - 2;
      if ((!isLoading && totalHeight) >= scrollHeight) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener('scroll', event);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { query, setQuery, page, setPage, handleSubmit };
};
