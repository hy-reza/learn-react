
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog'
import NotFound from './pages/NotFound';
import BlogDetail from './pages/BlogDetail'
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='home' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='blog/:id' element={<BlogDetail/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='blog/*' element={<BlogDetail/>}/>
        </Routes>

        <nav>
          <li type='none'><Link to='home'>Home</Link></li>
          <li type='none'><Link to='about'>About</Link></li>
          <li type='none'><Link to='blog'>Blog</Link></li>
        </nav>
      </header>
    </div>
  );
}

export default App;
