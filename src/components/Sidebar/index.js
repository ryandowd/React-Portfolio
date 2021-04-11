import React from 'react';

import Menu from "../Menu";
import Intro from "../Intro";

import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <Menu />
            <Intro />
        </div>
    )
}

export default Sidebar;