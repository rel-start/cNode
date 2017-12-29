import axios from 'axios'

const GET_TOPICS_SUCC = 'GET_TOPICS_SUCC'
const GET_TOPICS_ERR = 'GET_TOPICS_ERR'
const LOADING = 'LOADING'
const LOADEND = 'LOADEND'

const init = {
  loading: false,
  topics: [],
  msg: '',
}

export function homePageReducer(state = init, action) {
  switch (action.type) {
    case GET_TOPICS_SUCC:
      return { ...state, success: action.payLoad.success, topics: action.payLoad.data, currentPage: action.page, tabKey: action.tab };
    case GET_TOPICS_ERR:
      return { ...state };
    case LOADING:
      return { ...state, loading: true };
    case LOADEND:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export function getTopicList({ page, tab, limit }) {
  return (dispatch) => {
    dispatch({ type: LOADING });
    
    axios.get('/api/topics', {
      params: {
        page, tab, limit
      }
    })
    .then((res) => {
      if (res.status === 200 && res.data.success) {
          dispatch({ type: GET_TOPICS_SUCC, payLoad: res.data, tab, page });
        } else {
          dispatch({ type: GET_TOPICS_ERR, payLoad: res.data });
        }

        dispatch({ type: LOADEND });
      })
      .catch((err) => {
        console.log(err)
      });
  };
}