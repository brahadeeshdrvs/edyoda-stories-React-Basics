import React from 'react';
import headstyle from "../Css/Header.module.css"

const Header = () => {
    return ( 
    <header>
        <div className={headstyle.Topbar}>
            <a className={headstyle.Logo} href="#">
                <div>
                    <div className={headstyle.LogoText}>EDYODA</div>
                    <p className={headstyle.Logopara}>Stories</p>
                </div>
            </a>
            <div className={headstyle.ExploreDiv}>
                <ul className={headstyle.UnList}>
                    <li className={headstyle.List}>
                        <div className={headstyle.Categories}>Explore Categories<span><i className="fas fa-caret-down"></i></span></div>
                    </li>
                </ul>
                <ul className={headstyle.TopbarDetails}>
                    <div className={headstyle.GrayText}>
                        <p className={headstyle.GrayPara}>
                            EdYoda is free learning and knowledge <br /> sharing platform for techies
                        </p>
                    </div>
                    <div className={headstyle.ButtonWrapper}>
                        <button className={headstyle.MainButton}>Go To Main Website</button>
                    </div>
                </ul>
            </div>
        </div>
    </header>
    );
}
 
export default Header;
