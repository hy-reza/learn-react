import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Blog() {

    let [news, setNews] = useState([])
    let [loading, setLoading] = useState(true)

    useEffect(function(){
        async function getData(){
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles')
            const response = await request.json()
            console.log(response)
            setNews(response)
            setLoading(false)
        }
        
        getData()

    },[])


    return (
      <section>
        <h1>BLOG PAGE</h1>
        {loading && <li type='none'>loading...</li> }
        {!loading && <ol>
            {news.map(function(news){
                return <li  type='none' key={news.id}>
                <Link to={`/blog/${news.id}`}>{news.title}</Link>
                <p>{new Date(news.publishedAt).toLocaleDateString()}</p>
                </li>
            })}
        </ol>}

        

      </section>
    );
  }
  