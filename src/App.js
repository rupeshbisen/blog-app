import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetails from './components/BlogPostDetails';
import { fetchPosts } from './Api';

const App = () => {

  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadPosts = async () => {
      const { articles, totalResults } = await fetchPosts(currentPage);
      setBlogs(articles);
      setTotalPages(Math.ceil(totalResults / 9));
    };

    loadPosts();
  }, [currentPage]);

  console.log("blogs", blogs)
  if (blogs.length === 0) {
    return <div className="container mt-5">
      <div className='d-flex justify-content-center align-content-center'>
        <b>Post not found</b>

      </div>
    </div>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact
          element={
            <BlogPostList
              blogs={blogs}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages} />
          }
        />
        <Route path="/post/:id" element={<BlogPostDetails blogs={blogs} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
