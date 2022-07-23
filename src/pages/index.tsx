import type { NextPage } from "next";
import Head from "next/head";
import cubeImg from "/public/devcatalog-cube.png";
import SignInUpForm from "../components/signInUpForm";

const Home: NextPage = () => {

    return (
    <>
      <Head>
        <title>DevCatalog</title>
        <meta name="description" content="Discover developers, assets and helpful resources fast and securely." />
          <meta property="og:image" content={cubeImg.src}/>
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

              <SignInUpForm/>
          </header>
      </div>
    </>
  );
};

export default Home;
