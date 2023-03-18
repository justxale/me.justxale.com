import React from 'react'
import ReactDOM from 'react-dom/client'

import Profile from '../components/Profile'
import ThemeChanger from "../components/ThemeChanger";
import Footer from "../components/Footer";

import '../css/index.css'
import '../css/vars/colors.css'
import '../css/media.css'
import '../css/themes.css'
import '../css/footer.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeChanger/>
        <Profile/>
        <Footer/>
    </React.StrictMode>
)
