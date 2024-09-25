import { useEffect, useState } from "react";
import NewsCard from "./components/News";

interface Articles {
  source: { name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  content: string;
}

function App() {
  const [articles, setArticles] = useState<Articles[]>([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2024-09-24&to=2024-09-24&sortBy=popularity&apiKey=95cf379ce4ea4644ac321191a145f41f"
    )
      .then((response) => response.json())
      .then((json) => {
        setArticles(json.articles);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>Breaking News</h1>
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <NewsCard
            key={index}
            source={article.source.name}
            author={article.author}
            title={article.title}
            description={article.description}
            url={article.url}
            publishedAt={article.publishedAt}
            content={article.content}
          />
        ))
      ) : (
        <p>Laden...</p>
      )}
    </div>
  );
}

export default App;
