import React from 'react';
import StoryListContainer from './components/StoryListContainer';
import StoryViewContainer from './components/StoryViewContainer';
import OptionsBar from './components/OptionsBar';
import {TitleCard, AppBin} from './components/StyledComponents';

/*

TODO
* add forms
* update local state
* link with db

*/

const App = () => {
  return (
    <AppBin>
      <TitleCard>Swarthmore Ultimate Stories</TitleCard>
      <StoryListContainer />
      <StoryViewContainer />
      <OptionsBar />
    </AppBin>
  );
};

export default App;
