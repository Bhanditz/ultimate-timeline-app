import styled from 'styled-components';
import {media} from '../utils';

const colors = {
  backsplash: '#c3c3c3',
  cardBackground: '#989898',
};

const viewOptions = {
  title: {
    fontSize: '1.5em',
    padding: '1em',
    margin: '0.5em',
  },
  content: {
    fontSize: '1em',
    padding: '1.5em',
    margin: '0em 0.5em 0 2em',
  },
  year: {
    fontSize: '1.5em',
    padding: '0.5em 1em',
    margin: '0.5em',
  },
};

export const AppBin = styled.div`
  margin: 2em;
  ${media.desktop`
    display: grid;
    grid-template-columns: 1fr 1em 1fr;
    grid-template-rows: 2fr 8fr 2fr;
    grid-template-areas:
    "Title Title Title"
    "StoryList . StoryView"
    "StoryList . OptionsBar";
  `}
`;

export const TitleCard = styled.div`
  text-align: center;
  font-size: 3vh;
  ${media.desktop`grid-area: Title;`}
  ${media.mobile`margin: 1em 0;`}
`;

export const StoryListBin = styled.div`
  background-color: ${colors.backsplash};
  border-radius: 5px;
  padding: 1em;
  ${media.desktop`grid-area: StoryList;`}
  ${media.mobile`
    height: 30vh;
    overflow: scroll;
    margin: 0.5em 0;
    padding: 0.5em 0;
    h1 {font-size: 1.5em;}
    `}
`;

export const StoryViewBin = styled.div`
  background-color: ${colors.backsplash};
  border-radius: 5px;
  padding: 1em;
  ${media.desktop`
    grid-area: StoryView;
    padding: 1em;
  `}
  ${media.mobile`
    height: 30vh;
    overflow: scroll;
    margin: 0.5em 0;
    padding: 0.5em 0;
    `}
`;

export const YearGroupBin = styled.div`
  margin: 0.5em 1em;
`;

export const StoryCard = styled.div`
  background-color: ${colors.cardBackground};
  border-radius: 5px;
  padding: 1em;
  ${media.mobile`
    margin: 0.5em 0;
    font-size: 2vh;
    `}
  ${media.desktop`
    margin: 0.5em;
    font-size: 3vh;
    `}
`;

export const StoryViewTitleBin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.mobile`display: none;`}
`;

export const StoryViewTitle = styled.div`
  background-color: ${colors.cardBackground};
  border-radius: 5px;
  font-size: ${viewOptions.title.fontSize};
  padding: ${viewOptions.title.padding};
  margin: ${viewOptions.title.margin};
  flex-grow: 1;
`;

export const StoryViewYear = styled.div`
  background-color: ${colors.cardBackground};
  border-radius: 5px;
  font-size: ${viewOptions.year.fontSize};
  padding: ${viewOptions.year.padding};
  margin: ${viewOptions.year.margin};
  align-self: flex-end;
  ${media.mobile`display: none;`}
`;

export const StoryViewContent = styled.div`
  background-color: ${colors.cardBackground};
  border-radius: 5px;
  font-size: ${viewOptions.content.fontSize};
  padding: ${viewOptions.content.padding};
  margin: ${viewOptions.content.margin};
  ${media.mobile`
    margin: 0;
    padding: 1em;
  `}
`;

// TODO consider flex options with more people
export const PeopleBin = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${media.desktop`margin: 0.5em 1em;`}
  ${media.mobile`margin: 0.5em 0;`}
`;

export const PersonCard = styled.div`
  background-color: ${colors.cardBackground};
  ${media.desktop`
    border-radius: 30px;
    font-size: 1em;
    padding: 0.5em 1em;
    margin: 0.25em 0.5em
  `}
  ${media.mobile`
    border-radius: 5px;
    font-size: 2vh;
    padding: 0.5em;
    margin: 0 0.5em 0.5em 0;
    `}
`;

export const OptionsBin = styled.div`
  background-color: ${colors.backsplash};
  border-radius: 5px;
  margin-top: 0.5em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${media.desktop`grid-area: OptionsBar;`}
  ${media.mobile`height: 10vh;`}
`;

export const OptionsButton = styled.div`
  background-color: ${colors.cardBackground};
  border-radius: 5px;
  font-size: 1em;
  margin: 0.5em;
  padding: 1em;
  flex: 0 1 auto;
  text-align: center;
`;
