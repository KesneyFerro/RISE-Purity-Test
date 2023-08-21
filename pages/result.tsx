import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { HomeCointainer } from "../styles/components/home";

const Result: NextPage = (props: any) => {
  const score = props?.query?.score;

  const perguntas = [
    "Made a friend :))",
    "Received a nickname",
    "Had a secret handshake",
    "Talked in your native language with another winner",
    "Got your name written in another alphabet",
    "Wrote someone's name in your alphabet",
    "Switched badges with someone",
    "Took photos of someone without their consent (not in a weird way)",
    "Pranked someone or got pranked",
    "Liked someone you hated on the internet",
    "Made a post-RRS group chat",
    "Changed career/college plans",
    "Went to the “Early Risers” less than 2 times",
    "Played table-tennis, pool or table-football",
    "Raced with wheelchairs",
    "Gave a Lightning Talk",
    "Sang at Karaoke",
    "Performed at the Open-mic",
    "Performed at the closing ceremony",
    "Had something amazing happen back home",
    "Did the riCe purity test",
    "Played Paranoia or CAH (Cards Against Humanity)",
    "Changed your own or someone else's hair",
    "Broke the 'social media safety' rules",
    "Talked with a british stranger (uncomfortable)",
    "Talked with a homeless person or someone drunk",
    "Talked in your native language to someone who did not speak it",
    "Laughed when someone said something you did not understand hoping it was not a question",
    "Took photos of someone without their consent (in a weird way)",
    "Installed duolingo due to peer pressure",
    "Bought something questionable from Tesco",
    "Skipped breakfast more than once",
    "Stole or helped someone steal a badge",
    "Stole someone’s laundry accidentally (or not)",
    "Wore someone else’s clothes",
    "Pole danced on the boat",
    "Fell in a river",
    "Stepped on the grass in Brasenose",
    "Stayed awake until/past midnight",
    "Pulled an all nighter",
    "Slept during a presentation",
    "Slept during base group’s gathering",
    "Slept during capstone work time/presentation",
    "Got sick",
    "Missed one or more days of the summit due to sickness or personal issues",
    "Got lost during a field trip",
    "Lost key/fob/id",
    "Lost phone",
    "Lost backpack",
    "Lost jewelry",
    "Complained about the weather",
    "Complained about the food",
    "Got fed up with AI, climate change, or any other issue",
    "Went to a union day you didn't pick",
    "Switched places with someone for a union dinner",
    "Ate something that was against your dietary requirements",
    "Skipped networking",
    "Forgot someone's name",
    "Was overdressed",
    "Was underdressed",
    "Burned out",
    "Learned cuss words in another language",
    "Had a terrible trip to the summit",
    "Had something terrible happen back home",
    "Felt homesick",
    "Didn't talk to your parents for >48 hours",
    "Got competitive",
    "Bragged about yourself/your achievements",
    "Felt jealous of someone/their achievements",
    "Felt you did not belong",
    "Felt superior",
    "Lied about some aspect of your life",
    "Disliked someone you loved on the internet",
    "Gave a thank you note to someone you disliked",
    "Did not like your capstone work",
    "Had beef with someone else",
    "Did not like one or more capstone team members",
    "Gossiped",
    "Spread rumors about yourself/others",
    "Never finished Rise's RRS feedback form",
    "Lied to an RA",
    "Sneaked out in London",
    "Sneaked out in Oxford",
    "Got caught sneaking out",
    "Third-wheeled",
    "Had a crush",
    "Got rejected by a crush",
    "Held hands romantically",
    "Kissed somebody",
    "Questioned your sexuality",
    "Had a summer romance",
    "Started a long-distance relationship",
    "Spent a night in someone else's room",
    "Shared a bed",
    "Had sexual intercourse",
    "Smoked/vaped",
    "Drank alcohol",
    "Got into a physical fight",
    "Started a cult or fandom",
    "Said 'Hello, my name is Divit, I am from India, and my question is...' ironically (or not)",
  ];

  const [checkboxes, setCheckboxes] = React.useState(
    perguntas.map(() => false)
  );

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
