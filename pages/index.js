import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Layout } from "../components/Layout";
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";
import Image from "next/image";
import Head from "next/head";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  // const content = data.page.body;
  return (
    <main className="page-content">
      {(data?.page?.rows || []).map((row, i) => (
        <article key={i}>
          <TinaMarkdown content={row.block} />
        </article>
      ))}
    </main>
  );
  {
    /* USED TO CHECK WHAT THE JSON IS  */
  }
  {
    /* <pre>{JSON.stringify(data, null, 2)}</pre> */
  }
  {
    /* <div data-tina-field={tinaField(data.page, "body")}>
        <TinaMarkdown content={content} />
      </div> */
  }
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
