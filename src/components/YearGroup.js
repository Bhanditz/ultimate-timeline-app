import React from 'react';
import {StoryCard, YearGroupBin} from './StyledComponents';

function YearGroup({year, stories, updater}) {
  return (
    <YearGroupBin>
      <h1>{year}</h1>
      {stories.map((d, i) => (
        <StoryCard key={i} onClick={() => updater(d)}>
          {d.title}
        </StoryCard>
      ))}
    </YearGroupBin>
  );
}

export default YearGroup;
