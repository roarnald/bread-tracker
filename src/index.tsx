import React, { FC } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import lazy from 'utils/lazy';

const Home = lazy(() => import('./components/Home'));

const Application: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

render(<Application />, document.getElementById('root'));
