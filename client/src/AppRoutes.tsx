import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './layouts/Home';
import Homecoming from './layouts/Homecoming';
import HCMain from './components/Homecoming/HC-Main';
import Login from './layouts/Login';
import LGMain from './components/Login/LG-Main';
import ChooseUser from './components/Login/LG-ChooseUser';
import SubHome from './components/Main/Home';
import Games from './components/Main/Games';
import PrivateRoute from './util/PrivateRoute';
import HomecomingAlert from './components/Homecoming/HomecomingAlert';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login><LGMain /></Login>} />
      
      <Route element={<PrivateRoute />}>
        <Route path="/login/user" element={<Login><ChooseUser /></Login>} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/Homecoming" element={<Homecoming />} >
          <Route index element={<HCMain />} />
          <Route path="special" element={<HomecomingAlert />} />
        </Route>
        <Route path="/" element={<Home />}>
          <Route index element={<SubHome />} />
          <Route path="games" element={<Games />} />
          <Route path="time" element={<div>time</div>} />
          <Route path="calender" element={<div>calender</div>} />
          <Route path="settings" element={<div>settings</div>} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
