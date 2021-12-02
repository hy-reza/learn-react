import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>ABOUT PAGE</h1>
      <Link to="/about/team">About Team</Link>
      <Outlet />
    </>
  );
}
