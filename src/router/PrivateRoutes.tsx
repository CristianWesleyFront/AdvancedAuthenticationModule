import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { SuspensedView } from '../tools/suspense';

import { Dashboard } from '../pages/Dashboard';

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path="auth/*" element={<Navigate to="/dashboard" />} />
        {/* Pages */}
        <Route
          path="dashboard"
          element={
            <SuspensedView>
              <Dashboard />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

export { PrivateRoutes };
