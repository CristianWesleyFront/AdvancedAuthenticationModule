/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'tools/loadable';

export const Dashboard = lazyLoad(
  () => import('./index'),
  module => module.Dashboard,
);
