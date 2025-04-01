// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './layouts/Home';
import Homecoming from './layouts/Homecoming';
import HCMain from './components/Homecoming/HC-Main';
import Login from './layouts/Login';
import LGMain from './components/Login/LG-Main';
import ChooseUser from './components/Login/LG-ChooseUser';
import SubHome from './components/Main/Home';
import Games from './components/Main/Games';



export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login><LGMain /></Login>} />
      <Route path="/login/user" element={<Login><ChooseUser /></Login>} />
      <Route path="/Homecoming" element={<Homecoming><HCMain /></Homecoming>} />
      <Route path="/" element={<Home />}>
        <Route index element={<SubHome />} />
        <Route path="games" element={<Games />} />
        <Route path="time" element={<div>time</div>} />
        <Route path="calender" element={<div>calender</div>} />
        <Route path="settings" element={<div>settings</div>} />
      </Route>
    </Routes>
  );
};
