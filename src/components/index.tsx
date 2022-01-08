import 'css/main.css';

import React, { FC } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import lazy from 'utils/lazy';

const Home = lazy(() => import('./Home'));

const Application: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bread-tracker" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

render(<Application />, document.getElementById('root'));
