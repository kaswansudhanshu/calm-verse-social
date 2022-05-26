import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getPosts } from '../api';
import { Home, Login } from '../pages/index';
import { Loader, Navbar } from './index';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPosts();
      if (res.success) {
        setPosts(res.data.posts);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  const About = () => {
    reutrn(<h1>About</h1>);
  };
  const UserInfo = () => {
    reutrn(<h1>UserInfo</h1>);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home posts={posts} />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/user/djsdf" element={<UserInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
