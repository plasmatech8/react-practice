import React, { useState, useEffect } from 'react';

import articleContent from './article-content';
import NotFoundPage from './NotFoundPage';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';


const ArticlePage = ({ match }) => {

  // Article text data (stored locally)
  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);

  // Article upvotes and comments (stored in backend)
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] })
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    }
    fetchData();
  }, [name]);

  // Page not found
  if (!article)
    return <NotFoundPage/>;

  const otherArticles = articleContent.filter(a => a.name !== name);

  return (
    <>
      <h1>{article.title}</h1>
      <UpvotesSection
        articleName={name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      />
      {article.content.map((paragraph, key) => <p key={key}>{paragraph}</p>)}
      <CommentsList comments={articleInfo.comments}/>
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/>
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles}/>
    </>
  );
}

export default ArticlePage;