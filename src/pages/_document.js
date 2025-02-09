import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Next.js Meetups</title>
        <meta name="description" content="Find a lot of great meetups!" />  
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
