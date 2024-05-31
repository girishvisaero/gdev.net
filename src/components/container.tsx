"use client";

import cn from "classnames";
import { useTheme } from "next-themes";
import Head from "next/head";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Url } from "url";

function NavItem({
  href,
  text,
  isGame,
}: {
  href: Url | string;
  text: string;
  isGame: boolean;
}) {
  const path = usePathname();
  const isActive = path === href;

  return (
    <NextLink href={href} legacyBehavior>
      <a
        className={cn(
          isActive
            ? "font-semibold text-gray-800 dark:text-gray-200"
            : "font-normal text-gray-600 dark:text-gray-400",
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
        )}
      >
        <span
          className={cn(
            isGame
              ? "font-extrabold text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
              : "capsize"
          )}
        >
          {text}
        </span>
      </a>
    </NextLink>
  );
}

export default function Container(props: any) {
  const path = usePathname();

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const meta = {
    title: "Girish Chaudhari - Web Developer and Software Developer",
    description: `Full stack web developer and computer Software Developer. `,
    type: "website",
    image: "https://blog-forum.vercel.app/home.png",
    tags: "Next.js, blog, Girish Chaudhari",
    ...customMeta,
  };

  return (
    <div className="flex flex-col min-h-[48vh] items-start max-w-2xl mx-auto w-full mb-8">
      <div className="bg-gray-50 dark:bg-gray-900">
        <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <meta
            property="og:url"
            content={`https://blog-forum.vercel.app/${path}`}
          />
          <link
            rel="canonical"
            href={`https://blog-forum.vercel.app/${path}`}
          />
          <link
            rel="icon"
            type="image/x-icon"
            href="/static/favicons/favicon.ico"
          />
          <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicons/favicon.ico"
          />
          <link
            rel="icon"
            type="image/x-icon"
            sizes="32x32"
            href="/static/favicons/favicon.ico"
          />
          <link
            rel="icon"
            type="image/x-icon"
            sizes="16x16"
            href="/static/favicons/favicon.ico"
          />

          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="Girish Chaudhari" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@girish-chaudhari" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
          <meta name="keywords" content={meta.tags}></meta>
          {meta.date && (
            <meta property="article:published_time" content={meta.date} />
          )}
        </Head>

        {children}
      </div>
    </div>
  );
}
