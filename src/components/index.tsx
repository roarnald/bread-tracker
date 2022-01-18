import '../css/main.css';
import 'react-toastify/dist/ReactToastify.css';

import React, { FC } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import lazy from '~/src/utils/lazy';

const Home = lazy(() => import('./Home'));

const Application: FC = () => (
  <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>

    <ToastContainer position="top-center" />
  </>
);

render(<Application />, document.getElementById('root'));
