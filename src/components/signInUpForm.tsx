import {NextPage} from "next";
import { useForm } from 'react-hook-form';
import {useRef, useState} from "react";
import Image from "next/image";
import cubeImg from "/public/devcatalog-cube.png";

const SignInUpForm: NextPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();
    const onSubmit = (data: any) => console.log(data);

    const password = useRef({});
    password.current = watch("password", "");

    const [isSignInMode, setIsSignInMode] = useState(false);
    const toggleSignInMode = () => {
        setIsSignInMode(!isSignInMode);
    }


    // <form onSubmit={handleSubmit(onSubmit)}>
    //     <input {...register('firstName')} />
    //     <input {...register('lastName', { required: true })} />
    //     {errors.lastName && <p>Last name is required.</p>}
    //     <input {...register('age', { pattern: /\d+/ })} />
    //     {errors.age && <p>Please enter number for age.</p>}
    //     <input type="submit" />
    // </form>

    console.log(errors);

    // @ts-ignore
    // @ts-ignore
    return (
        <div className={"p-2 mt-2 md:mt-20 login-animate"}>
            <div className={`p-5 bg-white bg-opacity-50 border rounded-2xl relative ${isSignInMode ? "animation-expand" : ""}`}>
                <div className={"absolute mx-auto w-[50px] left-0 right-0 -top-5"}>
                    <Image
                        src={cubeImg}
                        alt={"DevCatalog Cube"}
                        width={50}
                        height={50}
                    />
                </div>
                <div className={`flex flex-col gap-3`}>
                    <div className={`text-center mt-3 text-3xl text-purpleSpot-500`}>
                        {isSignInMode ? "Login" : "Sign Up"}
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-3"}>

                        {/* Username */}
                        <input
                            className={`w-full p-2 border rounded-2xl ${errors.username && "login-error-icon"}`}
                            type={"text"}
                            placeholder={"Username"}
                            {...register('username', { required: true })}
                        />
                        {errors.username &&
                            <p className={"w-full text-center italic text-sm text-purple-600"}>
                                Username is required.
                            </p>
                        }

                        {/* Password */}
                        <input
                            className={`w-full p-2 border rounded-2xl ${errors.password && "login-error-icon"}`}
                            type={"password"}
                            placeholder={"Password"}
                            {...register('password', {
                                required: "Password is required",
                                pattern:
                                    { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i,
                                        message: "Password is too easy"
                                    }
                            })}
                        />
                        {/* Minimum eight characters, at least one letter, one number and one special character */}
                        {errors.password &&
                            <p className={"w-full text-center italic text-sm text-purple-600"}>
                                {/*// @ts-ignore*/}
                                {errors.password.message}
                            </p>
                        }

                        {/* Sign in / Sign up */}
                        {!isSignInMode &&
                            <div className={"flex gap-2 justify-center"}>
                                <button
                                    className={"w-full rounded bg-white p-1 border-2 border-sky-500 hover:bg-violet-200 hover:text-purpleSpot-500 duration-200"}
                                    onClick={toggleSignInMode}
                                >
                                    Sign Up
                                </button>

                                <button
                                    className={"w-full rounded bg-white p-1 border-2 border-sky-500 hover:bg-violet-200 hover:text-purpleSpot-500 duration-200"}
                                >
                                    Log In
                                </button>
                            </div>
                        }

                        {isSignInMode &&
                            <>
                                {/* Confirm Password */}
                                <input
                                    className={`w-full p-2 border rounded-2xl ${errors.confirmPassword && "login-error-icon"}`}
                                    type={"password"}
                                    placeholder={"Confirm Password"}
                                    {...register('confirmPassword', {
                                        validate: (value) => value === password.current || "Passwords do not match"
                                    })}
                                />
                                {errors.confirmPassword &&
                                    <p className={"w-full text-center italic text-sm text-purple-600"}>
                                        {/*// @ts-ignore*/}
                                        {errors.confirmPassword.message}
                                    </p>
                                }

                                {/* Email */}
                                <input
                                    className={`w-full p-2 border rounded-2xl ${errors.email && "login-error-icon"}`}
                                    type={"email"}
                                    placeholder={"Email"}
                                    {...register('email', {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: "Invalid email address"

                                        }
                                    })}
                                />
                                {errors.email &&
                                    <p className={"w-full text-center italic text-sm text-purple-600"}>
                                        {/*// @ts-ignore*/}
                                        {errors.email.message}
                                    </p>
                                }

                                {/* Sign Up Button */}
                                <button
                                    className={"w-full rounded bg-white p-1 border-2 border-sky-500 hover:bg-violet-200 hover:text-purpleSpot-500 duration-200"}
                                >
                                    Register
                                </button>

                                {/* Return to Sign In */}
                                <button className={"absolute -rotate-90 top-2 left-1 text-purple-300"} onClick={toggleSignInMode}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                                    </svg>
                                </button>
                            </>
                        }
                    </form>

                    <div className={"text-center text-gray-400"}>
                        OR
                    </div>

                    <button type="button" className="login-with-google-btn">
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignInUpForm;