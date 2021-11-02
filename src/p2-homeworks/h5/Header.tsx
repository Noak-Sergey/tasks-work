import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

function Header() {
    return (

        <div>

            <div className={s.hidden}>
                <NavLink to='/pre-junior' className={s.navPreJunPlus} activeClassName={s.active}>
                    Pre-junior
                </NavLink>

                <NavLink to='/junior' className={s.navPreJunPlus} activeClassName={s.active}>
                    Junior
                </NavLink>

                <NavLink to='/junior+' className={s.navPreJunPlus} activeClassName={s.active}>
                    Junior+
                </NavLink>
                <div className={s.header}>Header</div>
            </div>

        </div>
    )
}

export default Header
