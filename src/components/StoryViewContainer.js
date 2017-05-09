import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import StoryView from './StoryView';

const mapStatetoProps = state => ({
  story: state.story,
  selected: state.selected,
});

// const mapDispatchtoProps = dispatch => ({
//   actions: bindActionCreators(Actions, dispatch),
// });

export default connect(mapStatetoProps)(StoryView);
