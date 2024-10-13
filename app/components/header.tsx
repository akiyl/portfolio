"use client";
import Card from "./card";
import Link from "next/link";
import { useState } from "react";
import GenerativeArtBackground from "./sketchBg";
import { GithubIcon } from "lucide-react";
const Header = () => {
  const discordProfile = "Akshat(akiyl)#0263";
  const [feedback, setFeedback] = useState<string>("");

  const handleEmailClick = () => {
    window.location.href =
      "mailto:Akshatthapliyal2004@gmail.com.com?subject=Contact%20Request&body=Please%20write%20your%20message%20here";
  };
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setFeedback("Discord profile copied to clipboard!");
        setTimeout(() => setFeedback(""), 2000);
      })

      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  return (
    <>
      {/* bg-[#d8e2dc] */}
      <GenerativeArtBackground />
      <div className="w-screen h-screen  inset-0 absolute top-0 z-[-1] bg-blue/20  backdrop-filter backdrop-blur-[1px]"></div>
      <div className=" h-[100vh]  bg-center flex   bg-transparent px-8  justify-between  ">
        <div className="flex flex-col ">
          <section className="w-full flex flex-col gap-12 ">
            <h1 className=" text-6xl text-black font-extrabold leading-[4.5rem] pt-14">
              {" "}
              HEY, I'M
              <br /> AKSHAT THAPLIYAL
            </h1>
            <p className=" text-gray-600 w-[500px]  text-lg pointer-events-none">
              A passionate Frontend Developer with a keen interest in web
              <br />
            </p>
            <div className="flex gap-6 text-gray-800  mt-16   ml-5 ">
              <Link
                onClick={handleEmailClick}
                href=""
                className=" cursor-pointer  rounded-lg py-1 px-2 hover:bg-[#adb5bd]/40 hover:backdrop-blur-md backdrop-filter"
              >
                <svg
                  className="w-6 h-6"
                  width="17"
                  viewBox="0 0 19 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 2.32013V13.3314C19 14.0471 18.4205 14.6266 17.7048 14.6266H14.6815V7.28625L9.5 11.1733L4.31854 7.28625V14.6274H1.29517C1.12502 14.6274 0.956534 14.5939 0.799345 14.5287C0.642157 14.4636 0.499343 14.3681 0.379066 14.2478C0.258788 14.1274 0.163403 13.9845 0.0983616 13.8273C0.03332 13.6701 -0.000103762 13.5016 2.41974e-07 13.3314V2.32013C2.41974e-07 0.718588 1.82796 -0.195787 3.10888 0.765296L4.31854 1.67334L9.5 5.55884L14.6815 1.67175L15.8911 0.765296C17.1713 -0.194995 19 0.718588 19 2.32013Z"
                    fill="#000000"
                  ></path>
                </svg>
              </Link>
              <Link
                href="https://github.com/akiyl"
                className=" cursor-pointer rounded-lg py-1 px-2 hover:bg-[#adb5bd]/40 hover:backdrop-blur-md backdrop-filter"
              >
                <GithubIcon className="w-6 h-6" />
              </Link>
              <Link
                href=""
                onClick={() => copyToClipboard(discordProfile)}
                className=" cursor-pointer  rounded-lg py-1 px-2 hover:bg-[#adb5bd]/40 hover:backdrop-blur-md backdrop-filter"
              >
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 -28.5 256 256"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  className="w-6 h-6  "
                >
                  <g>
                    <path
                      d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                      fill="#5865F2"
                      fill-rule="nonzero"
                    ></path>
                  </g>
                </svg>
              </Link>
              {feedback && (
                <span className="text-sm font-thin">{feedback}</span>
              )}
            </div>
          </section>
        </div>
        <section className="w-[35vw] mr-28 overflow-y-scroll no-scrollbar overflow-x-hidden pt-12  ">
          <div className="  backdrop-filter backdrop-blur-[3px]  bg-gray-300/20 px-8 py-3 rounded-lg bg-">
            <div className="">
              <p className="text-black leading-8 tracking-wide pointer-events-none   ">
                {" "}
                <span className=" text-black  capitalize ">
                  i'm a growing web Developer looking for my first paying job .
                </span>
                <br />
                I started my journey in 2020 and since then i have been learning
                and growing in the field of web development. since school i've
                been intresed in this field and i started taking youtube courses
                since then after that i found out about web development and i
                persued this field.
                <br /> my parents wanted me to be a civil engineer so i have a
                diploma in civil engineering but i was not intrested in that
                field so i started learning web development and i am still
                learning and growing in this field
              </p>
            </div>
            <div>
              <div className="w-[18vw] h-[1px] bg-black mt-5 "></div>
              <Card />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Header;
