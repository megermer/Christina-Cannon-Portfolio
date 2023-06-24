import { Layout } from "../components/Layout";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import Image from "next/legacy/image";
import { client } from "../tina/__generated__/client";
import { Content } from "next/font/google";

export default function PostList(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <Layout>
      <main className="flex mt-20 justify-center gap-20">
        <Image
          src="/uploads/pinkProfile.jpg"
          width={275}
          height={400}
          objectFit="cover"
        />
        <div className="w-2/5">
          <div className="flex items-center">
            <Image
              src="/uploads/flippedFerns.png"
              width={75}
              height={75}
              objectFit="cover"
            />
            <h1 className="text-3xl">a bit about me</h1>
          </div>
          <p className="text-xs indent-8 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
            malesuada fames ac turpis egestas sed tempus. Imperdiet proin
            fermentum leo vel orci porta non pulvinar neque. Ut ornare lectus
            sit amet est placerat in egestas erat. Donec pretium vulputate
            sapien nec sagittis aliquam malesuada bibendum. Pharetra magna ac
            placerat vestibulum lectus. Posuere ac ut consequat semper viverra
            nam libero justo.{" "}
          </p>
          <p className="text-xs indent-8 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
            malesuada fames ac turpis egestas sed tempus. Imperdiet proin
            fermentum leo vel orci porta non pulvinar neque. Ut ornare lectus
            sit amet est placerat in egestas erat. Donec pretium vulputate
            sapien nec sagittis aliquam malesuada bibendum. Pharetra magna ac
            placerat vestibulum lectus. Posuere ac ut consequat semper viverra
            nam libero justo.{" "}
          </p>
        </div>
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.postConnection();

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  };
};
