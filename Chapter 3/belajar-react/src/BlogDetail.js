import { useParams } from "react-router-dom";

export default function BlogDetail() {
    const urlParams= useParams()
  return (
    <>
      <h1>BLOG DETAIL</h1>
      <p>Ini adalah  {urlParams.slug} </p>
    </>
  );
}
