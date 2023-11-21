import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bloggers from './components/Bloggers';
import Profile from './components/Profile';
import CreatePost from './components/CreatePost';

function App() {

  return (
    <div className="App" style={{ marginBottom: "20px" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bloggers" element={<Bloggers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/newPost" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
