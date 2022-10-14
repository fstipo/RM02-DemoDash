import React from "react";
import { useMsal } from "@azure/msal-react";
import Button from "react-bootstrap/Button";

function handleLogout(instance) {
    instance.logoutPopup().catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will open a popup for logout
 */
export const SignOutButton = () => {
    const { instance } = useMsal();

    return (
        <Button variant="dark"  to="/" className=" nav-link mx-3 login mt-5 text-white" onClick={() => handleLogout(instance)}><i className="bi bi-box-arrow-in-left h5"></i><span className="navigation__link-title ms-2 h5">Log Out</span></Button>
    );
}