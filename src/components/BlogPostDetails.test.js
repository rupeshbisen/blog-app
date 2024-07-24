import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import BlogPostDetails from './BlogPostDetails';

const mockBlogs = [
    { title: 'Test Post 1', description: 'Test Description 1', url: 'http://test1.com', publishedAt: '2023-01-01' },
    { title: 'Test Post 2', description: 'Test Description 2', url: 'http://test2.com', publishedAt: '2023-01-02' }
];

test('renders blog post details', () => {
    render(
        <MemoryRouter initialEntries={['/post/http%3A%2F%2Ftest1.com']}>
            <Routes>
                <Route path="/post/:id" element={<BlogPostDetails blogs={mockBlogs} />} />
            </Routes>
        </MemoryRouter>
    );

    expect(screen.getByText('Test Post 1')).toBeInTheDocument();
    expect(screen.getByText('Test Description 1')).toBeInTheDocument();
    expect(screen.getByText('To read the full article, please visit the link below:')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Visit Full Article/i })).toHaveAttribute('href', 'http://test1.com');
});
