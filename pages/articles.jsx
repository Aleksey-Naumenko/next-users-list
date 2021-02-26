import CustomHead from "../components/CustomHead";
import ArticleList from "../components/ArticleList";
// import { server } from "../config/index"; // example how to work with own API

const Articles = ({ articles }) => {
  return (
    <>
      <CustomHead
        title="Articles Page"
        description="This is Articles page"
        keywords="articles, articles are awesome, articles, companies articles"
      />
      <div>
        <ArticleList articles={articles} />
      </div>
    </>
  );
};

// fetch from our API
// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`);
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//     revalidate: 60,
//   };
// };

// fetch from REST
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
    revalidate: 60,
  };
};

export default Articles;
