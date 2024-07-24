import React from 'react';
import { useNavigate, useParams, } from 'react-router-dom';

const BlogPostDetails = ({ blogs }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const blog = blogs.find((p) => p.url === decodeURIComponent(id));

    if (!blog) {
        return <div>Post not found</div>;
    }
    return (
        <div className="container mt-5">
            <button onClick={() => navigate('/')} className="btn btn-secondary mb-3">Back</button>

            <div>
                <p className='text-muted mb-1'>Author: {blog.author}</p>
                <p className='text-muted'>Published: {new Date(blog.publishedAt).toLocaleDateString()}</p>
            </div>
            <h1>{blog.title}</h1>
            <img src={blog.urlToImage} alt={`blog-Image`} className='img-fluid ratio ratio-4x3 my-3' />
            <p className='mt-5'>{blog.description}</p>
            <p className='mt-5'>{blog.content}</p>
            <p>
                To read the full article, please visit the link below:
            </p>
            <a href={blog.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mb-5">
                Visit Full Article
            </a>
        </div>
    );
};

export default BlogPostDetails;
