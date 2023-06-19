import { TinaMarkdown } from "tinacms/dist/rich-text";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";
import Image from "next/legacy/image";
import Head from "next/head";
import { Inter } from "next/font/google";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center text-slate-300">
      <div className="absolute -z-10 h-full w-full bg-black">
        <Image
          src="/uploads/bridgePhoto.jpg"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <div className="text-5xl italic pt-5">{data?.page?.title}</div>
      <div className="text-xl pt-9">{data?.page?.subtitle}</div>
      <div className="absolute bottom-20">
        <Link href="/posts">
          <p className="hover:underline">{data?.page?.link}</p>
        </Link>
      </div>
      {/* {(data?.page?.rows || []).map((row, i) => (
        <div key={i} className="text-slate-200 text-2xl pt-9">
          <TinaMarkdown content={row.block} />
        </div>
      ))} */}
    </main>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.page({
    relativePath: "home.json",
  });

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  };
};
