
import { Container } from 'react-bootstrap';
import './App.css';
import Navbars from './Components/Navbars';
import MoviesList from './Components/MoviesList';
import axios from 'axios';
import { useEffect,useState } from 'react';
import MovieDetails from './Components/MovieDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [movies, setmovies] = useState([])
  const [pagecount,setpagecount]=useState(0)
  //GET ALL MOVIES BY AXIOS
  const getAllMovies= async()=>
  {
   const res= await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=ea612818631977ad2fed967038fbfc26&language=en-US")
   
   setmovies(res.data.results)
   setpagecount(res.data.total_pages)
   
  }
  //GET Current PAGE
  const getPage= async(page)=>
  {
   const res= await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=ea612818631977ad2fed967038fbfc26&language=en-US&page=${page}`)
   
   setmovies(res.data.results)
   setpagecount(res.data.total_pages)
   
  }
  useEffect(()=>
  {
    getAllMovies();
    

  },[])
  const search=async(word)=>
  {
    if(word==="")
    {
      getAllMovies()
    }
    else{
    const res=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ea612818631977ad2fed967038fbfc26&query=${word}&language=en-US&page=1&include_adult=false`)
    setmovies(res.data.results)
    setpagecount(res.data.total_pages)

  }}
  return (
    <div className="App">
    
      <Navbars search={search}/>
      <Container>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={ <MoviesList movies={movies} getPage={getPage} pagecount={pagecount}/>} />
          <Route path='/movie/:Id' element={<MovieDetails/>}/>
      
       
        </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
