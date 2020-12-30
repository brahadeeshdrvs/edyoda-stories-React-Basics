import './App.css';
import Header from './comps/Header';
import Cards from './comps/Cards';
import{cardData} from "./CardObj";
import Footer from "./comps/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      
      <div className="FilterSection">
        <h3 className="LatestPosts">Latest Posts</h3>
        <div  className="IconWrapper">
          <i className="fas fa-filter"></i>
          <p className="FilterCategory">Filter by Category</p>
        </div>
        <div className="FilterWrapper">
          <span className="Active">All</span>
          <span className="Filter">Artificial Intelligence</span>
          <span className="Filter">Cloud Computing</span>
          <span className="Filter" >DevOps</span>
          <span className="Filter">Programming Languages</span>
          <span className="Filter">Mobile Application development</span>
          <span className="Filter">Technology and Tools</span>
          <span className="Filter">Get a Job a Tech Company</span>
          <span className="Filter">Others</span>
      </div>
    </div>
    <div className="CardGrid">
    {cardData.map((data)=> <Cards  id={data.id} url={data.url} title={data.title} author={data.author} courseDate = {data.courseDate} courseDetails={data.courseDetails.split(" ",25).join(" ")+"..."}/>)}
      </div>

     <Footer/>

    </div>
  );
}

export default App;
