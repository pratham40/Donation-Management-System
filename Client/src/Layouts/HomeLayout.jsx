import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';

const HomeLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const changeWidth = () => {
    const drawerSide = document.getElementsByClassName('drawer-side');
    drawerSide[0].style.width = 'auto';
  };

  const hideDrawer = () => {
    setIsSidebarOpen(false);
    const drawerSide = document.getElementsByClassName('drawer-side');
    drawerSide[0].style.width = '0px';
  };

  return (
    <div className="min-h-[90vh] bg-base-200">
      <div className="drawer h-[100vh]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" checked={isSidebarOpen} onChange={toggleSidebar} />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-base-100 shadow-md">
            <div className="flex-none">
              <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
                <FiMenu onClick={changeWidth} size={"32px"} className="font-bold" />
              </label>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-primary">Donation Management System</h1>
            </div>
            <div className="flex-none gap-2">
              <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
                {theme === 'light' ? <FiMoon size={"24px"} /> : <FiSun size={"24px"} />}
              </button>
              <Link to="/login" className="btn btn-ghost text-primary">Login</Link>
            </div>
          </div>

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto bg-base-200 p-6">
            <Outlet />
          </main>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-100 text-base-content">
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer} className="btn btn-ghost btn-circle">
                <AiFillCloseCircle size={"24px"} />
              </button>
            </li>
            <li className="mb-4 font-bold text-2xl text-primary">Donation Management</li>
            <li><Link to="/" className="hover:bg-base-200">Home</Link></li>
            <li><Link to="/donations" className="hover:bg-base-200">Donations</Link></li>
            <li><Link to="/reports" className="hover:bg-base-200">Reports</Link></li>
            <li><Link to="/contact" className="hover:bg-base-200">Contact Us</Link></li>
            <li><Link to="/about" className="hover:bg-base-200">About Us</Link></li>

            <div className="mt-auto">
              <li>
                <div className="w-full flex items-center justify-center gap-4 mt-6">
                  <Link to="/login" className="btn btn-primary">Login</Link>
                  <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
