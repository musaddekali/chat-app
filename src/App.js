import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/global-styles/app-global.css';
import Layout from './components/Layout/Layout';
import { Home, Profile, Regester, Login, NoPage } from './pages';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path='profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path='regester' element={<Regester />} />
          <Route path='login' element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
