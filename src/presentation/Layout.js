import React from 'react';
import Aux from '../hoc/Aux';

const layout = (props) => (
  <Aux>
    {props.children}
  </Aux>
);

export default layout;