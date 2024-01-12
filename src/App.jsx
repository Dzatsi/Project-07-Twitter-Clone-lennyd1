import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import {UserProfil} from "./pages/userprofil.jsx";
import UserName from "./pages/username.jsx"
import('./style/reset.css');
import('./style/App.css');
import('./style/icone.css');
import('./style/index.css');

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userprofil" element={<UserProfil />}  />
            <Route path="/username" element={<UserName />}  />
          </Routes>
        
        </Layout>
      </BrowserRouter>
    </>
  
    
  );
}
{/* <Home /> */}
