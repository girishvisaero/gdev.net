import Image from "next/image";
import filming from '/public/images/home/filming.jpg';
import meetups from '/public/images/home/meetups.jpg';
import reactathon from '/public/images/home/reactathon.jpg';
import ship from '/public/images/home/ship.jpg';
import smashing from '/public/images/home/smashing.jpg';
import summit from '/public/images/home/summit.jpg';
import { AnchorHTMLAttributes, Suspense } from "react";

function Badge(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <div className="flex flex-col justify-center max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse justify-between items-center mb-3 sm:flex-row">
          <div className="flex flex-col pr-8">
            <p className="text-rose-500 dark:text-rose-400">Hey, I am</p>
            <h1 className="font-bold text-3xl md:text-6xl -ml-0.5 mb-2 text-black dark:text-white">
              Girish Chaudhari 👋
            </h1>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Web Developer
            </p>
          </div>

          <div className="w-[80px] sm:w-[100px] relative mb-8 sm:mb-0 flex-shrink-0">
            <Image
              alt="Girish Chaudhari"
              height={176}
              width={176}
              src="/avatar.png"
              sizes="30vw"
              priority={true}
              className="rounded-full filter grayscale w-full"
            />
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-16">
          I am a software developer at Visaero, specializing in&nbsp;
          <Badge href="https://nextjs.org">
            <img
              alt="Next.js logomark"
              src="/next-logo.svg"
              className="!mr-1"
              width="14"
              height="14"
            />
            Next.js
          </Badge>
          {` community, an open-source web framework built with `}
          <Badge href="https://react.dev">
            <svg
              width="14"
              height="14"
              role="img"
              aria-label="React logo"
              className="!mr-1"
            >
              <use href="/sprite.svg#react" />
            </svg>
            React
          </Badge>.&nbsp;
          I build dynamic, efficient web applications and leverage leading
          technologies to deliver innovative business solutions. My expertise
          ensures high-quality, performant applications that address complex
          business needs and enhance operational efficiency.
        </p>
        <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        <div className="relative h-40">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={summit}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative sm:row-span-2 row-span-1">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            src={reactathon}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src={ship}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            src={filming}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover sm:object-center"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src={meetups}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src={smashing}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      </div>
    </Suspense>
  );
}
