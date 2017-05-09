import titleCase from 'title-case';

// TODO put titleCase at top-level or db-level, not at rendering level
export const updateView = newStory => ({
  type: 'UPDATE_VIEW',
  selected: true,
  story: {
    ...newStory,
    title: titleCase(newStory.title),
  },
});
