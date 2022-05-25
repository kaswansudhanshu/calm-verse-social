import { useEffect, useState } from 'react';
import { getPosts } from '../api';
import { Home } from '../pages/index';
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

  return (
    <div className="App">
      <Navbar />
      <Home posts={posts} />
    </div>
  );
}

export default App;
