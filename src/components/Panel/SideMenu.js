import React from 'react';
import { Link } from 'react-router-dom';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import './SideMenu.css';

const SideMenu = () => {
    return (
        <div>
        <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <Link to="/cimentacion">
                    <i className="lni-shovel" style={{ fontSize: '1.75em' }}></i>
                </Link>
            </NavIcon>
            <NavText>
                <Link to="/cimentacion">CIMENTACIÓN</Link>
            </NavText>
        </NavItem>
        <NavItem eventKey="home">
            <NavIcon>
                <Link to="/muros">
                    <i className="lni-brick" style={{ fontSize: '1.75em' }}></i>
                </Link>
            </NavIcon>
            <NavText>
                <Link to="/muros">MUROS</Link>
            </NavText>
        </NavItem>
        <NavItem eventKey="home">
            <NavIcon>
                <Link to="/capsulas">
                    <i className="lni-arrow-right-circle" style={{ fontSize: '1.75em' }}></i>
                </Link>
            </NavIcon>
            <NavText>
                <Link to="/capsulas">CÁPSULAS</Link>
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>
        </div>
    )
    
}

export default SideMenu;