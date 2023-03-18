
import React from "react";
import LightTheme from '../icons/ui/light_theme.svg'
import DarkTheme from '../icons/ui/dark_theme.svg'

function changeTheme() {
    const e = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = e, localStorage.setItem("theme", e)
}

export function ThemeChanger() {
    return (
        <button id={'theme-changer'} onClick={changeTheme}>
            <img src={LightTheme} className={'theme-light'}/>
            <img src={DarkTheme} className={'theme-dark'}/>
        </button>
    )
}

export default ThemeChanger