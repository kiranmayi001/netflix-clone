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
    </div>
  );
}

export default App;
