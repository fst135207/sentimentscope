import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Sublabels() {
  const router = useRouter();
  const { id } = router.query;
  const [sublabels, setSublabels] = useState([]);

  useEffect(() => {
    if (id) {
      const fetchSublabels = async () => {
        try {
          const response = await fetch(`/api/sublabels?mainLabelId=${id}`);
          const data = await response.json();
          setSublabels(data);
        } catch (error) {
          console.error("Failed to fetch sublabels:", error);
        }
      };

      fetchSublabels();
    }
  }, [id]);

  return (
    <div>
      <h1>Sublabels</h1>
      {sublabels.map((sublabel: any) => (
        <div key={sublabel.id}>
          <h2>{sublabel.text}</h2>
          <ul>
            {sublabel.news.map((article: any) => (
              <li key={article.id}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title} - {article.source}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
