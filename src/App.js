import NavBar from "./components/Navbar/NavBar";
import './App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import {trending,Popular_shows,Animation,action,Drama,Popular_Movies} from "./constants/urls";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title ="Trending & Latest" url={trending}  className="expand"/>
      <RowPost title='Popular Shows' url={Popular_shows}/> 
      <RowPost title='Animation' url={Animation}/>
      <RowPost title='Actions' url={action}/>
      <RowPost title='Drama' url={Drama}/>
      <RowPost title='Popular Movies' url={Popular_Movies}/>
    </div>
  );
}

export default App;
