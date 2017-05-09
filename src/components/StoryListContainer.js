import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import StoryList from './StoryList';

const mapStatetoProps = state => ({
  data: state.data,
});

const mapDispatchtoProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(StoryList);
