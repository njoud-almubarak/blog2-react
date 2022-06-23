import React from 'react';
import BlogItem from './BlogItem';

const BlogList = ({ blogList }) => {
  return (
    <ul className='list-group'>
      {blogList.map((item, index) => (
        <BlogItem item={item} key={index} />
      ))}
    </ul>
  );
};

export default BlogList;