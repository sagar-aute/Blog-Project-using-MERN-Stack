import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import ArticleList from "./pages/ArticleList";
import Article from "./pages/Article";

function App() {
  return (
    <Router>
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/articles-list' element={<ArticleList />} />
          <Route path='/article' element={<Article />} />        
        </Routes>
      </div>
    </Router>   
  );
}

export default App;
