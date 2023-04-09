import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Component/header/Header';
import Home from './pages/home/Home';
import movieList from './Component/movieList/movieList';


function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                {/* <Route path="movie/:id" element={<Movie />}></Route> */}
                <Route path="movies/:type" element={<movieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
