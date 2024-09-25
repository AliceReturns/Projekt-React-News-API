interface NewsProps {
  name: string;
  author: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  content: string;
}

function NewsCard(props: NewsProps) {
  return (
    <div
      className="news-card"
      style={{ border: "1px solid #ddd", padding: "1em", margin: "1em 0" }}
    >
      <h2>{props.title}</h2>
      <p>
        <strong>Source:</strong> {props.name}
      </p>
      <p>
        <strong>Author:</strong> {props.author || "Unknown"}
      </p>
      <p>
        <strong>Published At:</strong>{" "}
        {new Date(props.publishedAt).toLocaleString()}
      </p>
      <p>{props.description}</p>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
}

export default NewsCard;

/* //       <div className="Suchoptionen">
//         <input id="SearchArticle" type="search" />
//         <select name="LanguageSelection" id="Language">
//           <option value="" disabled selected hidden>
//             Bitte Sprache auswählen...
//           </option>
//           <option value="1">German</option>
//           <option value="2">English</option>
//         </select>
//         <button id="SearchBtn">SEARCH</button>
//       </div>
//     </div>
    ); */
