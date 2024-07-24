import React, { useState, useEffect } from 'react';
import BlogPostItem from './BlogPostItem';
import ReactPaginate from 'react-paginate';

const BlogPostList = (props) => {
    const { blogs, setCurrentPage, totalPages } = props;
    const [filteredBlogs, setFilteredBlogs] = useState(blogs);
    const [search, setSearch] = useState('');

    useEffect(() => {
        if (blogs) {
            setFilteredBlogs(() => {
                return blogs.filter((blog) => {
                    return blog.title.toLowerCase().includes(search.toLowerCase());
                });
            });
        }
    }, [search, blogs]);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1);
    };
    return (
        <div className="container mt-5">
            <div className="position-relative col-12 col-md-4 mb-3">
                <input
                    type="text"
                    placeholder="Search Blog"
                    className="form-control py-2 pr-4"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {filteredBlogs && filteredBlogs.map((blog, index) => (
                    <div key={blog.url} className="col">
                        <BlogPostItem blog={blog} index={index} />
                    </div>
                ))}
            </div>
            <ReactPaginate
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                pageCount={totalPages}
                breakLabel="..."
                nextLabel="Next"
                previousLabel="Previous"
                containerClassName='pagination d-flex justify-content-center my-4'
                pageLinkClassName='page-link'
                previousLinkClassName='page-link'
                nextLinkClassName='page-link'
                activeClassName='active'
                disabledClassName='disabled'
            />
        </div>
    );
};

export default BlogPostList;
