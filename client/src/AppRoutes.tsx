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
import Game from './components/Main/Game';

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
        <Route path="games/this-or-that" element={<Game />} />
        <Route path="time" element={<div>Time</div>} />
        <Route path="calender" element={<div>Calender</div>} />
        <Route path="settings" element={<div>Settings</div>} />
      </Route>
        
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
