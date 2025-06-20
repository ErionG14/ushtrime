import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import MainLayout from "@/components/MainLayout";
import { NewsProvider } from "@/lib/contexts/NewsContext";
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps }: AppProps) {
    const title = pageProps.title ? pageProps.title : "My Platform";
    const description = pageProps.description
        ? pageProps.description
        : "My Platform is a platform for developers to build and deploy their applications.";
    const image = pageProps.image ? pageProps.image : "https://myplatform.com";
    const url = pageProps.url ? pageProps.url : "https://myplatform.com";

      return (
        <>
          <Head>
            <title>{Component.displayName}</title>

            {/* Viewport Meta Tags */}
            <meta
              name="viewport"
              content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />
            <meta
              http-equiv="Content-Security-Policy"
              content="upgrade-insecure-requests"
            />
            <meta property="og:type" content="article" />
            <meta property="fb:app_id" content="{fb-id}" />
            {/* SEO for Web */}
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="url" content={url} />
            <meta name="image" content={image} />
            <meta name="image:secure" content={image} />

            {/* SEO for Facebook */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:image:secure_url" content={image} />

            {/* SEO for Twitter */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:image:secure" content={image} />
          </Head>
          <SessionProvider>
            <MainLayout name={Component.displayName}>
              <NewsProvider>
                <Component {...pageProps} />
              </NewsProvider>
            </MainLayout>
          </SessionProvider>
        </>
      );
}