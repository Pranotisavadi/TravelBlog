import NavBar from "./components/navbar/NavBar";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Setting";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Register from "./pages/register/Register";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    


      <Router>
         <NavBar />

         <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/setting" element={<Settings />}></Route>
        <Route path="/post/:postId" element={<Single />}></Route>
      </Routes>
      </Router>
     
    

    
   
  );
}

export default App;
