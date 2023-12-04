import React from 'react';
import Sidebar from './sidebar';
import Trends from './trends';


function Layout({children}) {
    return (
        <>
            <div className="left-sidebar">
                <Sidebar />
            </div>
            {children}
            <div className="right-sidebar">  
            <Trends />
            </div>
        </>
    );
}


export default Layout;