import React, { FC, Suspense } from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';

interface ISuspenseView {
  children: React.ReactNode;
}

export const SuspensedView: FC<ISuspenseView> = ({ children }) => {
  TopBarProgress.config({
    barColors: {
      '0': '#40a9ff',
    },
    barThickness: 1,
    shadowBlur: 5,
  });
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};
