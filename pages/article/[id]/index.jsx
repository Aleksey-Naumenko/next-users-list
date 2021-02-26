import Link from "next/link";
import CustomHead from "../../../components/CustomHead";
// import { server } from "../../../config/index"; // example how to work with own API

const article = ({ article }) => {
  return (
    <>
      <CustomHead title={article.title} description={article.excerpt} />
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href="/articles">
          <a className="btn">Back to articles</a>
        </Link>
      </div>
      <style>
        {`
      .btn {
        display: block;
        width: 150px;
        padding: 8px 0;
        margin: 20px auto;
        background: #4979ff;
        border-radius: 4px;
        color: white;
        text-align: center;
      }
      `}
      </style>
    </>
  );
};

// fetch from our API
// export const getStaticProps = async (context) => {
//   const res = await fetch(`${server}/api/articles/${context.params.id}`);
//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`${server}/api/articles`);
//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// fetch from REST
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default article;
