import React, {createRef} from 'react';

export const navigationRef = createRef(null);

export const navigate = (screenName, params) => {
  if (navigationRef.current) {
    navigationRef.current.navigate(screenName, params);
  }
};
