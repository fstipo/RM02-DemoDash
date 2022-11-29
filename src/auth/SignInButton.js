import React, { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import Button from "react-bootstrap/Button";
import { EventType } from "@azure/msal-browser"



function handleLogin(instance) {
    instance.loginPopup(loginRequest).catch(e => {
        console.error(e);
    });
}

/*
 * Renders a button which, when selected, will open a popup for login
 */
export const SignInButton = () => {
    const [user, setUser] = useState(null);

    const { instance } = useMsal();
    const callbackId = instance.addEventCallback((message) => {
        // Update UI or interact with EventMessage here
        if (message.eventType === EventType.LOGIN_SUCCESS) {
            console.log(message.payload);
            console.log(message.payload.idTokenClaims.name);
            setUser(message.payload.idTokenClaims.name);
        }
    });

    return (

        <Button variant="light" to="/" className=" nav-link mx-3 login mt-5" onClick={() => handleLogin(instance)} ><i className="bi bi-box-arrow-in-right h5"></i><span className="navigation__link-title ms-2 h5">Login</span></Button>

    );

}

