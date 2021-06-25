import React, {useState} from 'react';

import './Login.css';

const LoginEx = (props) => {
    const [emailid, setEmailid] = useState("");
    const [password, setPassword] = useState("");

    const login=()=>{
        if(emailid.length > 3 && password.length > 3){
            props.history.push('/home');
        }
    }
    
    return(
        <div className="maincontainer">
            <div className="container">
                <div className="row no-gutter">
                    <div className="col-md-7 d-none d-md-flex bg-image"><div className=" ipl-logo"></div></div>
                    <div className="col-md-5 bg-light">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 col-xl-7 mx-auto">
                                        <h3 className="py-4 appName">Fantacy League</h3>
                                        <p className=" mb-4"><b>Login</b></p>
                                        <form>
                                            <div className="form-group mb-3 email-input ">
                                                <img alt="" src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e7d7999d-2ee8-4057-a2d5-957032f5cd84;revision=0?component_id=60f81057-2424-43bd-b52e-5bc6e05eee37&api_key=CometServer1&access_token=1624637006_urn%3Aaaid%3Asc%3AUS%3Ae7d7999d-2ee8-4057-a2d5-957032f5cd84%3Bpublic_3af4d1342cba7da660703a99d9208e6bfebd41e1" /> 
                                                <input id="inputEmail" type="email" placeholder="Email Id" value={emailid} onChange={(e)=>setEmailid(e.target.value)} className="form-control border-2 shadow-sm px-5" />
                                            </div>
                                            <div class="form-group mb-3 password-input">
                                                <img alt="" src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e7d7999d-2ee8-4057-a2d5-957032f5cd84;revision=0?component_id=a2fe2735-fddd-4b3a-9260-c9a287b8755f&api_key=CometServer1&access_token=1624637006_urn%3Aaaid%3Asc%3AUS%3Ae7d7999d-2ee8-4057-a2d5-957032f5cd84%3Bpublic_3af4d1342cba7da660703a99d9208e6bfebd41e1" />
                                                <input id="inputPassword" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control border-2 shadow-sm px-5 text-primary" />
                                            </div>
                                            <button type="button"  className="btn-primary btn-lg btn-size" onClick={login}>Login</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginEx;