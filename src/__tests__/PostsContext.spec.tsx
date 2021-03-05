import React from 'react';
import { render, screen } from '@testing-library/react';
import { PostsProvider, PostsContext } from '../contexts/PostsContext';
import { PostList } from '../components/PostList';
import mockData from './mockData.json';
describe('PostsContextTest', () => {
    it('should render only 10 posts', () => {
        const { container } = render(<PostsProvider posts={mockData}>  <PostList /></PostsProvider>)
        expect(container.querySelectorAll('h3').length).toEqual(9);
        expect(container.querySelectorAll('h2').length).toEqual(1);
    });

    it('focus post should not be duplicate', () => {
        const { container, getAllByText } = render(<PostsProvider posts={mockData}>  <PostList /></PostsProvider>)
        const focusPost = container.querySelector('h2').innerHTML;
        expect(getAllByText(focusPost).length).toEqual(1);
    });
});