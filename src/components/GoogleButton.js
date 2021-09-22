import React from 'react'
import GoogleLogin from 'react-google-login'

const clientId = "YOUR_CLIENT_ID.apps.googleusercontent.com";


function GoogleButton() {
    const onSuccess = (res) => {
        console.log("[login Succes] currentUser",res.profileObj)
    };
    const onFailure = (res) => {
        console.log("[login Failed] res:",res)
    };

    return (
        <div>
            <GoogleLogin
            clientId={clientId}
            buttonText="With Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            styles={{marginTop:"100px"}}
            isSignedIn={true}
            style={{width:"100%"}}
            />
        </div>
    )
}

export default GoogleButton
