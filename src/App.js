import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/global-styles/app-global.css';
import Layout from './components/Layout/Layout';
import {Home,Profile, Regester, Login, NoPage} from './pages';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='regester' element={<Regester />} />
          <Route path='login' element={<Login />} />
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
