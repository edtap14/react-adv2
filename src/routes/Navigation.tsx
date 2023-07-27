import React, { Suspense } from 'react'
import { Routes, NavLink, Navigate, Route } from 'react-router-dom'
import logo from '../logo.svg'
import routes from './routes'
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

const Navigation = () => {
    return (
        <Suspense fallback={ <div>Loading...</div> }>
            <Route>
                <div className="main-layout">
                    <nav>
                        <img src={ logo } alt="React logo"/>
                        <ul>
                            { routes.map( ( { to, name } ) => (
                                <li key={ to }>
                                    <NavLink
                                        to={ to }
                                        className={ ( { isActive } ) => ( isActive ? "nav-active" : "" ) }
                                    >
                                        { name }
                                    </NavLink>
                                </li>
                            ) ) }
                        </ul>
                    </nav>
                    <Routes>
                        { routes.map( ( { path, Component } ) => (
                            <Route key={ path } path={ path } element={ <Component/> }/>
                        ) ) }
                        <Route path="/*" element={ <Navigate to={ routes[ 0 ].to } replace/> }/>
                    </Routes>
                </div>
            </Route>
        </Suspense>
    );
};

export default Navigation
