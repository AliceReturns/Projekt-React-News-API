interface NewsProps {
  source: { name: string };
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
