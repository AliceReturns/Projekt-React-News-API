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
  const [searchTerm, setSearchTerm] = useState<string>(""); // Zustand für die Suche
  const [filteredArticles, setFilteredArticles] = useState<Articles[]>([]);

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

  // Funktion, um den Suchbegriff zu speichern
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Funktion, um die Artikel basierend auf der Suchanfrage zu filtern
  const handleSearchClick = () => {
    const filtered = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArticles(filtered); // Gefilterte Artikel im Zustand speichern
  };

  return (
    <div>
      <h1>Breaking News</h1>
      <div className="Suchoptionen">
        <input
          id="SearchArticle"
          type="search"
          placeholder="Type to search ..."
          value={searchTerm} // Der Wert des Inputs wird vom Zustand gesteuert
          onChange={handleSearchChange} // Suche bei jeder Änderung
        />

        <select name="LanguageSelection" id="Language">
          <option value="" disabled selected hidden>
            Bitte Sprache auswählen...
          </option>
          <option value="1">German</option>
          <option value="2">English</option>
        </select>
        <button id="SearchBtn" onClick={handleSearchClick}>
          SEARCH
        </button>
      </div>
      {/* Zeigt die gefilterten Artikel an */}
      {filteredArticles.length > 0
        ? filteredArticles.map((article, index) => (
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
        : null}
    </div>
  );
}

export default App;
