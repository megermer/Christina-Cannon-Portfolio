import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Tina App</title>
        <meta name="description" content="A TinaCMS Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex flex-col w-screen items-center mt-5">
        <Image
          src="/uploads/signatureFerns.png"
          width={300}
          height={100}
          alt="red ferns"
        />
        <div className="w-screen flex flex-row gap-20 justify-center mt-3">
          <Link href="" className="hover:text-red-700">
            about
          </Link>
          <Link href="" className="hover:text-red-700">
            art
          </Link>
          <Link href="" className="hover:text-red-700">
            writing
          </Link>
          <Link href="" className="hover:text-red-700">
            research
          </Link>
          <Link href="/posts" className="hover:text-red-700">
            blog
          </Link>
          <Link href="" className="hover:text-red-700">
            contact
          </Link>
        </div>
        {/* <Link href="/">Home</Link>
        {" | "}
        <Link href="/posts">Posts</Link> */}
      </header>
      <main>{props.children}</main>
    </div>
  );
};
