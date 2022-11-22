import React from 'react'
import Logo from '../../assets/img/Logo.svg'
import basket from '../../assets/img/basket.png'
import  './Header.css'

const Header = () => {
  return (
    <header className="header">
            <div className="header__container _container">
            
                <div className="header__content">
                    <div className="header__logo">
                        <a href="#" className="header__logo_img">
                            <img src={Logo} alt="logo" />
                        </a>
                    </div>
                    <nav className="header__menu menu">
                            <a href="#" className="menu__link">Головна</a>
                            <a href="#" className="menu__link">Товари та послуги</a>
                            <a href="#" className="menu__link">Про компанію</a>
                            <a href="#" className="menu__link">Контакти</a>
                            <a href="#" className="menu__link">Відгуки</a>
                    </nav>
                </div>
                    <div className="header__button">
                    <a href="#" className="header__logo_img">
                            <img src={basket} alt="logo" />
                        </a>
                    </div>
            </div>
        </header>
  )
}

export default Header