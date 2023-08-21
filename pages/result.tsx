import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { HomeCointainer } from "../styles/components/home";

const Result: NextPage = (props: any) => {
  const score = props?.query?.score;

  return (
    <HomeCointainer>
      <Head>
        <title>RISE Purity Test Results</title>
        <meta name="description" content="RISE Purity Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center items-center flex-col min-h-[100vh] w-full">
        <div className="title flex flex-col text-center justify-center items-center mx-5 mt-16 mb-6 max-w-[750px]">
          <h1 className="text-white font-extrabold text-4xl">
            <span className="text-[#f7cb48]">RISE</span> Purity Test{" "}
          </h1>
          <h1 className="text-white text-3xl font-extrabold mt-12 mb-2">
            Your score is:
          </h1>
          <h1 className="text-[#ffffff] text-8xl font-extrabold mt-2 mb-16">
            {score}
          </h1>
          <h2 className="text-white text-lg font-bold">
            Click{" "}
            <span className="text-[#f7cb48]">
              <a href="https://forms.gle/TRpYGa4J6ZStefNq7">here</a>
            </span>{" "}
            to share your score{" "}
          </h2>
        </div>
      </main>
    </HomeCointainer>
  );
};

export default Result;

export async function getServerSideProps(context: any) {
  const { query } = context;
  console.log(query);
  if (!query.score) {
    return {
      notFound: true,
    };
  }
  return {
    props: { query },
  };
}
