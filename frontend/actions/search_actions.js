
import * as SearchAPI from '../util/search_api_util';

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const searchVideos = (query) => {
  return (dispatch) => {
    return SearchAPI.searchVideos(query).then(
      (payload) => dispatch({ type: RECEIVE_SEARCH, payload }),
    );
  };
};