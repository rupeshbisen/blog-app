import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BlogPostList from './BlogPostList';

const mockBlogs = [
    { title: 'Test Post 1', description: 'Test Description 1', url: 'http://test1.com', publishedAt: '2023-01-01' },
    { title: 'Test Post 2', description: 'Test Description 2', url: 'http://test2.com', publishedAt: '2023-01-02' }
];

test('renders blog posts', () => {
    render(
        <BrowserRouter>
            <BlogPostList blogs={mockBlogs} setCurrentPage={jest.fn()} totalPages={1} />
        </BrowserRouter>
    );

    expect(screen.getByText('Test Post 1')).toBeInTheDocument();
    expect(screen.getByText('Test Post 2')).toBeInTheDocument();
});
