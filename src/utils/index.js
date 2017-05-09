import {css} from 'styled-components';

export const groupByKey = (key, storyData) => {
  const keySet = new Set(storyData.map(d => d.year));

  // { key: [] }
  const keyObj = Array(keySet).reduce(
    (acc, k) => Object.assign(acc, {[k]: {}}),
    {}
  );

  const keyVal = storyData.reduce((acc, d) => {
    const currentKey = d[key];
    return Object.assign(acc, {[currentKey]: acc[currentKey].push(d)});
  }, keyObj);

  return keyVal;
};

export const media = {
  mobile: (...args) => css`
    @media (max-width: 630px) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 631px) {
      ${css(...args)}
    }
  `,
};
