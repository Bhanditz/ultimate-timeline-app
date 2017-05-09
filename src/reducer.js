import DATA from './data/index.js';

const defaultState = {
  data: DATA,
  selected: false,
  story: {
    title: '',
    year: 0,
    story: '',
    people: [{first: '', last: '', nickname: '', grad: 0}],
  },
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_VIEW':
      return {
        ...state,
        selected: action.selected,
        story: action.story,
      };
    default:
      return state;
  }
};

export default reducer;
