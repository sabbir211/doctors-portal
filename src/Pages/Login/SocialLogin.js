import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from "../../firebase.init"
import { Bars, Oval } from  'react-loader-spinner'
import useToken from '../../Hooks/useToken';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const [token]=useToken(user)
    useEffect(() => {
        if (token) {
            navigate("/")
        }
    }, [user,navigate,token])
    if(loading){
     
        return   <div className="mx-auto"><Bars  color="#3A4256" height={80} width={80} /> </div>	
    }

    return (
        <div>
            <div className="divider">OR</div>
            {error && error.message}
            <button className="btn btn-outline btn-accent w-full"
                onClick={() => {
                    signInWithGoogle()
                }}
            >Continue with google</button>
        </div>
    );
};

export default SocialLogin;