import { FETCH_DATA } from '../../helpers/Constants';

const initialState = {
  data: [],
  isLoading: false,
  page: 0,
  error: null,
};

const reducer = (state = initialState, action = null) => {
  switch (action.type) {
    case FETCH_DATA.START_FETCH:
      return { ...state, isLoading: true };
    case FETCH_DATA.FINISH_FETCH:
      return {
        ...state,
        isLoading: false,
        page: state.page + 1,
        data:
          state.page >= 1
            ? [...state.data, ...action.payload]
            : [...action.payload],
        error: false,
      };
    case FETCH_DATA.FAIL_FETCH:
      return { ...state, isLoading: false, error: action.payload };
    case FETCH_DATA.CHANGE_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

export default reducer;
