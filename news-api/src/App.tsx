import { useState } from "react";
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
  const [searchTerm, setSearchTerm] = useState<string>(""); // Zustand für die Suche
  const [filteredArticles, setFilteredArticles] = useState<Articles[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("de"); // Standardmäßig deutscher Sprachfilter

  // Funktion, um den Suchbegriff zu speichern
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Funktion, um die Sprache zu speichern
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };

  // Funktion, um die Artikel basierend auf der Suchanfrage und der Sprache zu holen
  const handleSearchClick = () => {
    const url = `https://newsapi.org/v2/everything?q=${searchTerm}&language=${selectedLanguage}&apiKey=95cf379ce4ea4644ac321191a145f41f`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setFilteredArticles(json.articles || []); // Gefilterte Artikel im Zustand speichern
      })
      .catch((err) => {
        console.error(err);
      });
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

        <select
          name="LanguageSelection"
          id="Language"
          onChange={handleLanguageChange}
        >
          <option value="" disabled selected hidden>
            Bitte Sprache auswählen...
          </option>
          <option value="de">German</option>
          <option value="en">English</option>
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
