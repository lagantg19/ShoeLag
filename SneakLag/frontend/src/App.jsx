import { createRoot } from "react-dom/client";
import LandingPage from "../pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../css/styles.css";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AuthContextProvider from "../context/AuthContext";
import Inventory from "../pages/Inventory";
import Explore from "../pages/Explore";
import InventoryContextProvider from "../context/InventoryContext";
import Sell from "../pages/Sell";
import Liked from "../pages/Liked";
import Cart from "../pages/Cart";
import Chatbot from "../pages/Chatbot";
import Speech from "../pages/Speech";
import ChatBotTrailer from "../pages/ChatBotTrailer";
import Authentication from "../pages/ChatApplication/Authentication";
import ChatsPage from "../pages/ChatApplication/ChatsPage";
import Approval from "../pages/ADMIN/Approval";
import Stock from "../pages/ADMIN/Stock";
import Dashboard from "../pages/ADMIN/Dashboard";


const App = () => {
  
 
  return (
    <AuthContextProvider>
    <InventoryContextProvider>
    <BrowserRouter>
        <Navbar />

        <Routes>
        
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/sell" element={<Sell/>} />
          <Route path="/like" element={<Liked/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/trailer" element={<ChatBotTrailer/>} />
          <Route path="/chatbot" element={<Chatbot/>} />
          <Route path="/speech" element={<Speech/>} />
          <Route path="/chatauth" element={<Authentication/>} />
          <Route path="/chats" element={<ChatsPage/>} />
          <Route path="/approval" element={<Approval/>} />
          <Route path="/stock" element={<Stock/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </InventoryContextProvider>
      
    </AuthContextProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
