// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './layouts/Home';
import Homecoming from './layouts/Homecoming';
import HCMain from './components/Homecoming/HC-Main';



export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Homecoming" element={<Homecoming><HCMain /></Homecoming>} />
      <Route path="/" element={<Home><div>Hello</div></Home>} />
    </Routes>
  );
};
