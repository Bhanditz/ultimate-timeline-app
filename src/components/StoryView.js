import React from 'react';
import {
  StoryViewBin,
  StoryViewTitleBin,
  StoryViewTitle,
  StoryViewYear,
  StoryViewContent,
  PeopleBin,
  PersonCard,
} from './StyledComponents';

const abrvYear = year => `'${year.toString().slice(2)}`;

const renderPeople = (person, index) => {
  return (
    <PersonCard key={index}>
      {`${person.first} ${person.last} ${abrvYear(person.grad)}`}
    </PersonCard>
  );
};

function StoryView({story, selected}) {
  if (!selected) {
    return <StoryViewBin />;
  } else {
    return (
      <StoryViewBin>
        <StoryViewTitleBin>
          <StoryViewTitle>{story.title}</StoryViewTitle>
          <StoryViewYear>{story.year}</StoryViewYear>
        </StoryViewTitleBin>
        <StoryViewContent>{story.story}</StoryViewContent>
        <PeopleBin>
          {story.people.map(renderPeople)}
        </PeopleBin>
      </StoryViewBin>
    );
  }
}

export default StoryView;
