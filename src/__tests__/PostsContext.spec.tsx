import React from 'react';
import { render, screen } from '@testing-library/react';
import { PostsProvider, PostsContext } from '../contexts/PostsContext';
import { PostList } from '../components/PostList';
import mockData from './mockData.json';
describe('PostsContextTest', () => {
    it('should render the focus post', () => {
        const { container, getAllByText } = render(<PostsProvider posts={mockData}>  <PostList /></PostsProvider>)
        expect(getAllByText(/consequatur/).length).toBeGreaterThan(1);
    });
});