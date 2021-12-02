import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import BlogDetail from "./BlogDetail";
import AboutTeam from "./AboutTeam";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";
import Login from "./Login";
import Dashboard from './Dashboard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="team" element={<AboutTeam />} />
          </Route>
          <Route path="blog" element={<Blog />}/>
          <Route path="blog/:slug" element={<BlogDetail/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

        <nav>
          <Link to="/">Home </Link>
          <Link to="/about"> About</Link>
          <Link to="/blog"> Blog</Link>
          <Link to="/login"> Login</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;
