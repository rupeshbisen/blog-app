import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostItem = ({ blog, index }) => {
    return (
        <div className="card h-100">
            <div className="card-body">
                <img src={blog.urlToImage} alt={`blog-Image ${index}`} className='img-fluid h-25 ratio ratio-4x3' />
                <h5 className="card-title mt-3">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
                <div className='d-flex justify-content-between'>
                    <p className="card-text">
                        <small className="text-muted">{new Date(blog.publishedAt).toLocaleDateString()}</small>
                    </p>
                    <Link to={`/post/${encodeURIComponent(blog.url)}`} className="btn btn-primary">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogPostItem;
