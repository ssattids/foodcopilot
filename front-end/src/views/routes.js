import React from 'react';

import {
  Home as HomeView,
} from './';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <HomeView {...params} />,
  },
];

export default routes;