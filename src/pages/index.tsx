import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {useState} from "react";
import cubeImg from "/public/devcatalog-cube.png";


const Home: NextPage = () => {

    const [isSignInMode, setIsSignInMode] = useState(false);

    const toggleSignInMode = () => {
        setIsSignInMode(!isSignInMode);
    }

    return (
    <>
      <Head>
        <title>DevCatalog</title>
        <meta name="description" content="Discover developers, assets and helpful resources fast and securely." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className={"animatedBackground"} />

      <div className="w-screen h-screen p-20">
          <header className={"flex flex-wrap justify-center"}>
              <div className={"min-w-[50%] relative flex flex-col items-center"}>
                  <h1 className={"font-medium md:text-8xl md:text-left text-center text-4xl mt-0 mb-2 text-purple-600 drop-shadow-l"}>
                      DevCatalog
                  </h1>
                  <h3 className={"text-alexisBlue-300 p-2 md:text-2xl text-center md:w-[70%] w-full drop-shadow"}>
                      Discover developers, assets and helpful resources fast and securely.
                  </h3>
              </div>

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
                              Login
                          </div>

                          <input
                                className={"w-full p-2 border rounded-2xl"}
                                type={"text"}
                                placeholder={"Username"}
                          />

                          <input
                                className={"w-full p-2 border rounded-2xl"}
                                type={"password"}
                                placeholder={"Password"}
                          />

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
                                  <input
                                      className={"w-full p-2 border rounded-2xl"}
                                      type={"password"}
                                      placeholder={"Confirm Password"}
                                  />

                                  <input
                                      className={"w-full p-2 border rounded-2xl"}
                                      type={"email"}
                                      placeholder={"Email"}
                                  />

                                  <button
                                      className={"w-full rounded bg-white p-1 border-2 border-sky-500 hover:bg-violet-200 hover:text-purpleSpot-500 duration-200"}
                                  >
                                      Register
                                  </button>
                              </>
                          }

                          <div className={"text-center text-gray-400"}>
                              OR
                          </div>

                          <button type="button" className="login-with-google-btn">
                              Sign in with Google
                          </button>
                      </div>
                  </div>
              </div>
          </header>
      </div>
    </>
  );
};

export default Home;
