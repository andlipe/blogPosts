import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PostsProvider } from '../contexts/PostsContext';
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

    it('should render 10 more posts on click button', () => {
        const { container, getByRole } = render(<PostsProvider posts={mockData}>  <PostList /></PostsProvider>)
        const button = getByRole('button');
        fireEvent.click(button);
        expect(container.querySelectorAll('h3').length).toEqual(19);
    });
    
});