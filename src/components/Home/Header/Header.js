import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../Shared/Navbar/Navbar';
import PaintingBusinessData from '../PaintingBusinessData/PaintingBusinessData';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <PaintingBusinessData></PaintingBusinessData>
        </div>
    );
};

export default Header;