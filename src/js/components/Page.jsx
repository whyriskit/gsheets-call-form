import PropTypes from "prop-types";
import React from "react";

import LoginContainer from "./LoginContainer";
import Nav from "./Nav";
import propTypes from "./propTypes";

export default function Page({
    isLoggedIn,
    onLoginStateChange,
    onUserChange,
    user,
}) {
    return (
        <div>
            <Nav
                onUserChange={onUserChange}
                user={user}
            />
            <div className="container page">
                <LoginContainer
                    isLoggedIn={isLoggedIn}
                    onLoginStateChange={onLoginStateChange}
                    onUserChange={onUserChange}
                    user={user}
                />
            </div>
        </div>
    );
}

Page.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    onLoginStateChange: PropTypes.func.isRequired,
    onUserChange: PropTypes.func.isRequired,
    user: propTypes.user,
};
