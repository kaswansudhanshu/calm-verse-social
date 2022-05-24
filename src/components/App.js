import { useEffect } from 'react';
import { getPosts } from '../api';
import { Home } from '../pages/index';

function App() {
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPosts();
      console.log('response', res);
    };

    fetchPosts();
  }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
