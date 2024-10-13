import Netflix from "../public/images/netflix.jpeg";
import Discord from "../public/images/discord.jpeg";
import Image from "next/image";
import Link from "next/link";
const Card = () => {
  return (
    <>
      <div id="Porjects" className="  flex flex-col  gap-9 text-[#582f0e] ">
        <div className=" flex-col flex gap-5 ">
          <div className=""></div>

          <Link
            href="https://github.com/akiyl/Newflix"
            className=" group flex gap-4 cursor-pointer"
          >
            <div className=" mt-2">
              <Image
                className="w-[150px] h-[100px] rounded-lg "
                src={Netflix}
                alt="netflix"
              />
            </div>
            <div className=" flex  flex-col gap-4">
              <h2 className="flex gap-3 text-xl">
                {" "}
                Netflix clone{" "}
                <span className="  ">
                  <svg
                    className=" group-hover:animate-bounce"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18px"
                    viewBox="0 -1300 960 960"
                    width="18px"
                    fill="#582f0e"
                  >
                    <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
                  </svg>{" "}
                </span>
              </h2>
              <p className="text-[15px]    w-80 ">
                {" "}
                A clone of well knowned online streaming service Netflix. built
                using Nextjs , NextAuth prisma , Postgresql , supabase, tailwind
                , vercel{" "}
              </p>
              <div
                id="projects"
                className=" flex flex-wrap gap-2 pointer-events-none   "
              >
                <span className="border px-3 py-1  border-[#582f0e]  rounded-md text-[13px] ">
                  Nextjs
                </span>
                <span className="border px-3 py-1  border-[#582f0e] rounded-md text-[13px]">
                  Prisma
                </span>
                <span className="border px-3 py-1  border-[#582f0e] rounded-md text-[13px]">
                  Postgresql
                </span>
                <span className="border px-2 py-1  border-[#582f0e] rounded-md text-[13px]">
                  Supabase
                </span>
                <span className="border px-3 py-1  border-[#582f0e] rounded-md text-[13px] ">
                  Tailwind
                </span>
              </div>
            </div>
          </Link>
          <div className="w-[15vw] h-[0.5px] bg-black mt-5 "></div>

          <div>
            <Link
              href="https://github.com/akiyl/discord-clone"
              className="flex group gap-4 cursor-pointer"
            >
              <div className=" mt-2">
                <Image
                  className="w-[150px] h-[100px] rounded-lg"
                  src={Discord}
                  alt="netflix"
                />
              </div>
              <div className=" flex  flex-col gap-4">
                <h2 className="flex gap-3 text-xl">
                  {" "}
                  Discord clone{" "}
                  <span className="  ">
                    <svg
                      className=" group-hover:animate-bounce"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18px"
                      viewBox="0 -1300 960 960"
                      width="18px"
                      fill="#582f0e"
                    >
                      <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
                    </svg>{" "}
                  </span>
                </h2>
                <p className="text-[15px]    w-80 ">
                  {" "}
                  A clone discord. built using Nextjs , NextAuth, prisma ,
                  Postgresql , supabase, tailwind , vercel , clerk{" "}
                </p>
                <div
                  id="projects"
                  className=" flex flex-wrap gap-2 pointer-events-none  "
                >
                  <span className="border px-3 py-1  border-[#582f0e]  rounded-md text-[13px] ">
                    Nextjs
                  </span>
                  <span className="border px-3 py-1  border-[#582f0e]  rounded-md text-[13px] ">
                    NextAuth
                  </span>
                  <span className="border px-3 py-1  border-[#582f0e] rounded-md text-[13px]">
                    Prisma
                  </span>
                  <span className="border px-3 py-1  border-[#582f0e] rounded-md text-[13px]">
                    Postgresql
                  </span>
                  <span className="border px-2 py-1  border-[#582f0e] rounded-md text-[13px]">
                    Supabase
                  </span>
                  <span className="border px-3 py-1  border-[#582f0e] rounded-md text-[13px] ">
                    Tailwind
                  </span>
                </div>
              </div>
            </Link>
            <div className="w-[18vw] h-[0.5px] bg-black mt-5 "></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
