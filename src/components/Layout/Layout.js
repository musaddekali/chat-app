import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Layout = () => {
    return (
        <>
            <header className='header fixed-top'>
                <Navbar />
            </header>
            <main className="main">
                <Outlet />
            </main>
        </>
    )
}

export default Layout