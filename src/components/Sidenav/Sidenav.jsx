import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from '../../hooks/useAuth';

import {SidenavList} from './SidenavList';
import EnvironmentList from './EnvironmentList';
import APIList from './APIList';
import RepositoryList from './RepositoryList';

import M from 'materialize-css';
import Background from './background.jpg';
import './Sidenav.scss';

export const Sidenav = () => {
    const {user, isAuthenticated, loginWithRedirect, logout} = useAuth();
    useEffect(() => {
        const collapsible = document.querySelectorAll('.collapsible');
        M.Collapsible.init(collapsible);
    }, []);

    return (
        <>
            <ul className="sidenav sidenav-fixed">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src={Background} alt="background" />
                        </div>
                        <img className="circle" src={user.picture} alt={user.name} />
                        <span className="white-text name">{user.nickname}</span>
                        <span className="white-text email">{user.email}</span>
                    </div>
                </li>
                {isAuthenticated &&
                <>
                    <li><Link to="/catalog">Catalogue</Link></li>
                    <li><Link to="/purchase">Mes achats</Link></li>
                    <li><span className="is-clickable" onClick={() => logout()}>Log out</span></li>
                </>
                }
                {!isAuthenticated && <li><span onClick={() => loginWithRedirect()}>Login</span></li>}
                <li>
                    <div className="divider" />
                </li>
                <li><SidenavList title={EnvironmentList.title} links={EnvironmentList.links} /></li>
                <li><SidenavList title={APIList.title} links={APIList.links} /></li>
                <li><SidenavList title={RepositoryList.title} links={RepositoryList.links} /></li>
                <li><a href="https://stats.uptimerobot.com/oAv8EtXL6L">Monitoring</a></li>
            </ul>
        </>
    );
};
