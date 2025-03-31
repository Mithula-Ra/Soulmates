// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './layouts/Home';
import Homecoming from './layouts/Homecoming';
import HCMain from './components/Homecoming/HC-Main';
import Login from './layouts/Login';
import LGMain from './components/Login/LG-Main';
import ChooseUser from './components/Login/LG-ChooseUser';



export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login><LGMain /></Login>} />
      <Route path="/login/user" element={<Login><ChooseUser /></Login>} />
      <Route path="/Homecoming" element={<Homecoming><HCMain /></Homecoming>} />
      <Route path="/" element={<Home><div>Hello</div></Home>} />
    </Routes>
  );
};
