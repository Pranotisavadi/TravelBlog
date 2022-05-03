import Header from '../../header/Header';
import Posts from '../../posts/Posts';
import SideBar from '../../sidebar/SideBar';
import './home.css'

const Home = () => {
    return ( 
    <div>
            <Header />
        
        
        <div className="home">
           <Posts />
           <SideBar />
          
        </div>
    </div>
        
     );
}
 
export default Home;