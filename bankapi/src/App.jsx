import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/index';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Profile from './pages/Profile/index';
//import ProgressPage from './pages/Progress/ProgressPage';

import Guard from './components/Guard';
import { Provider } from 'react-redux';
import store from './redux/store';

import './sass/main.scss';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route element={<Guard />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;

/*

<Route path="/transaction" element={<ProgressPage />} />
*/
