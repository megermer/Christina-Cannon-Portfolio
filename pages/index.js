import { TinaMarkdown } from "tinacms/dist/rich-text";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";
import Image from "next/legacy/image";
import Head from "next/head";
import { Inter } from "@next/font/google";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <main className="h-screen w-screen">
      <div className="absolute -z-10 h-full w-full bg-black">
        <Image
          src="/uploads/bridgePhoto.jpg"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      {(data?.page?.rows || []).map((row, i) => (
        <article key={i} className="text-white text-center">
          <TinaMarkdown content={row.block} />
        </article>
      ))}
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
