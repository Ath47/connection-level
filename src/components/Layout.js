import React from "react";
import "../styles/Layout.css";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <div className="mobile-screen">
                {children}
            </div>
        </div>
    );
};

export default Layout;
