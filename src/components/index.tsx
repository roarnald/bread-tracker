import '../css/main.css';
import 'react-toastify/dist/ReactToastify.css';

import React, { FC } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import lazy from '~/src/utils/lazy';

const Home = lazy(() => import('./Home'));

const Application: FC = () => (
  <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/bread-tracker">
          <Route index element={<Home />} />
        </Route>

        <Route path="*" element={<Navigate replace to="/bread-tracker" />} />
      </Routes>
    </BrowserRouter>

    <ToastContainer position="top-center" />
  </>
);

render(<Application />, document.getElementById('root'));
