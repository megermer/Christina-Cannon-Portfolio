import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export const Layout = (props) => {
  return (
    <div
      style={{
        margin: "3rem",
      }}
    >
      <Head>
        <title>Tina App</title>
        <meta name="description" content="A TinaCMS Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className=" flex flex-c -screen w-screen justify-center">
        <Image
          src="/uploads/signatureFerns.png"
          width={300}
          height={100}
          alt="red ferns"
        />

        {/* <Link href="/">Home</Link>
        {" | "}
        <Link href="/posts">Posts</Link> */}
      </header>
      <main>{props.children}</main>
    </div>
  );
};
