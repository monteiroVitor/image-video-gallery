import { FETCH_DATA } from '../helpers/Constants';
import API from '../service/API';

export const startFetchData = () => ({
  type: FETCH_DATA.START_FETCH,
});
export const failFetchData = (error) => ({
  type: FETCH_DATA.FAIL_FETCH,
  payload: error,
});
export const finishFetchData = (data) => ({
  type: FETCH_DATA.FINISH_FETCH,
  payload: data,
});
export const changePage = (page) => ({
  type: FETCH_DATA.CHANGE_PAGE,
  payload: page,
});

export const updatePage = (page) => (dispatch) => {
  return dispatch(changePage(page));
};

export const fetchData = (url) => async (dispatch) => {
  dispatch(startFetchData());
  try {
    const { hits } = await API.fetchData(url);
    dispatch(finishFetchData(hits));
  } catch (error) {
    dispatch(failFetchData(error));
  }
};
