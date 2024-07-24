import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { fetchPosts } from './Api';

jest.mock('./Api');

const mockPosts = {
  articles: [
    { title: 'Test Post 1', description: 'Test Description 1', url: 'http://test1.com', publishedAt: '2023-01-01' },
    { title: 'Test Post 2', description: 'Test Description 2', url: 'http://test2.com', publishedAt: '2023-01-02' }
  ],
  totalResults: 2
};

test('renders blog post list', async () => {
  fetchPosts.mockResolvedValue(mockPosts);

  render(
    <App />
  );

  await screen.findByText('Test Post 1');
  expect(screen.getByText('Test Post 2')).toBeInTheDocument();
});
