import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './layouts/Main';
import Homecoming from './layouts/Homecoming';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Homecoming" element={<Homecoming />} />
      <Route path="/" element={<Main><div>Hello</div></Main>} />
    </Routes>
  );
};
