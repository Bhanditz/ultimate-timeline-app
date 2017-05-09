import React from 'react';
import {OptionsBin, OptionsButton} from './StyledComponents';

/* TODO
  * conditionally render Options Button if a view is showing
  * edit function takes in current data 
*/
function OptionsBar() {
  return (
    <OptionsBin>
      <OptionsButton>Edit Story</OptionsButton>
      <OptionsButton>Add Story</OptionsButton>
    </OptionsBin>
  );
}

export default OptionsBar;
