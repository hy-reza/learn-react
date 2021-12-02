import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";

export default function BlogDetail() {
  let params = useParams();
  let [article, setArticle] = useState({});
  let [loading, setlaoding] = useState(true);
  let [notFound, setNotFound] = useState(false)

  useEffect(
    function () {
      async function getArticle() {
        const request = await fetch(
          `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
        );

        if(!request.ok){
          return setNotFound(true)
        }
        const response = await request.json();
        setArticle(response);
        setlaoding(false);
      }

      getArticle();
    },
    [params]
  );

  if(notFound){
    return <h1>SORRY ARTICLE NOT FOUND :(</h1>
  }

  return (
    <section>

    {loading && <li type='none'>Loading...</li>}
      <h1>{article.title}</h1>
      <p>{article.summary}</p>
    </section>
  );
}
