import React from "react";

function Header() {
    return (
        <header className="header">
            <div className="site_title">
                <a href={"/"}>
                    <img src="/images/title.png" alt="Logo"/><span>now I know more</span>
                </a>
            </div>
        </header>
    );
}

export default Header;