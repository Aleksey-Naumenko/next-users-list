import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div className="">
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
