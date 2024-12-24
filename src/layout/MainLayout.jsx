
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { useEffect, useState } from 'react';

const MainLayout = () => {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
          setTheme(savedTheme);
        }
      }, []);
    
      // Change the theme
      const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Save to localStorage
      };
    
      // Apply the theme class to the body
      useEffect(() => {
        document.body.className = theme; // Set body class to either 'light' or 'dark'
      }, [theme]);

   
    return (
        <div className='max-w-7xl mx-auto'>
             <button className='lightDarkBtn' onClick={toggleTheme}>
                 {theme === 'light' ? 'Dark' : 'Light'} Theme
            </button>

            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;