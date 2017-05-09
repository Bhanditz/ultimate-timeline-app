import React from 'react';
import {nest} from 'd3-collection';
import YearGroup from './YearGroup';
import {StoryListBin} from './StyledComponents';

const renderYearGroup = update => (datum, index) => {
  return (
    <YearGroup
      year={datum.key}
      stories={datum.values}
      updater={update}
      key={index}
    />
  );
};

// TODO highlight selected story
function StoryList({data, actions}) {
  const storyByYear = nest()
    .key(d => d.year)
    .entries(data)
    .sort((a, b) => a.key - b.key);
  return (
    <StoryListBin>
      {storyByYear.map(renderYearGroup(actions.updateView))}
    </StoryListBin>
  );
}

export default StoryList;
