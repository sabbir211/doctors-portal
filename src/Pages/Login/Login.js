import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Oval } from 'react-loader-spinner';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import PasswordResetModal from './PasswordResetModal';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user)
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };
    useEffect(() => {
        if (user) {
            swal("Login", "SuccessFully Logged in", "success")
            navigate(from, { replace: true })
        }
    }, [user])
    if (loading) {
        return <div className="flex justify-center"> <Oval color='#145B29' width={80} height={80} /></div>
    }
    if (error) {
        swal("Sorry", `${error.message.split("/")[1].split(")")[0]}`, "error")
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="text-xl text-center font-semibold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="form-control w-full max-w-xs">
                        <label className="label" htmlFor="email">
                            <span className="label-text"> Email</span>

                        </label>
                        <input {...register("email", { required: true })} type="text" placeholder="example@email.com" className="input input-bordered w-full max-w-xs" id='email' />
                        <label className="label" htmlFor='password'>
                            <span className="label-text"> Password</span>
                        </label>
                        <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered w-full max-w-xs" id='password' />
                        <label for="resetModal" class=" link-hover link-primary modal-button">Forgot password ?</label>

                        <input type="submit" value="Login" className="btn btn-accent mt-4 w-full max-w-xs" />

                    </form>
                    <p className='text-sm'>New to doctors portal? <Link to="/registration" className='text-primary hover:underline'>create new account</Link> </p>
                    <SocialLogin></SocialLogin>
                    <PasswordResetModal></PasswordResetModal>
                </div>
            </div>
        </div>
    );
};

export default Login;