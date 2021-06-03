import logo from './logo.svg';
import './App.css';
import Topbar from './Components/Topbar/Topbar';
import Banner from './Components/Banner/Banner';
import requests from './Components/key'
import RowCard from './Components/RowCard/RowCard';


function App() {
  return (
    <div className="App">
     <Topbar/>
     <Banner/>
     <RowCard
     isLargeRow={true}
     title="NETFLIX ORIGINAL"
     fetchUrl={requests.fetchNetFlixOriginals}/>
       <RowCard title = "Trending Now" fetchUrl = {requests.fetchTreding}/>
        <RowCard title = "Top Rated" fetchUrl = {requests.fetchTopRated}/>
        <RowCard title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
        <RowCard title = "Horror Movies" fetchUrl = {requests.fetchHorroMovies}/>
        <RowCard title = "Romance Movies" fetchUrl = {requests.fetchRomanticMovies}/>
        <RowCard title = "Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
