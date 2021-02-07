import Head from "next/head";

const CustomHead = ({ title, description, keywords }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <title>{title}</title>
    </Head>
  );
};

CustomHead.defaultProps = {
  title: "default title should be here",
  description: "default description",
  keywords: "default keywords",
};

export default CustomHead;
