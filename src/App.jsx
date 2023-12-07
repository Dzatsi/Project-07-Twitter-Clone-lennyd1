import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import UserProfil from "./pages/userprofil.jsx";
import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userprofil" element={<UserProfil />}  />
          </Routes>
        
        </Layout>
      </BrowserRouter>
    </>
  
    
  );
}
{/* <Home /> */}
