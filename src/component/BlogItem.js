import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ item }) => {
  return (
    <li class='list-group-item text-center'>
      <Link className='link-item' to={`/blog/${item.id}`}>
        {item.title}
      </Link>
    </li>
  );
};

export default BlogItem;