import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const AddBlog = () => {
  const navigate = useNavigate();

  
  const onClick = async (e) => {
    const request = await fetch('http://localhost:8080/api/v1/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body }),
    });

    const data = await request.json();

    if (request.status === 201) {
      navigate('/');
    }
  };
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  return (
    <div>
      <h1 className='text-center my-3 mt-10'>Add blog </h1>
      <input
        type='text'
        placeholder='Enter blog title '
        className='form-control'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea className='form-control mt-3' 
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder='Enter body of your blog   '
      />

      <button
        onClick={onClick}
        type='button'
        className='btn btn-outline-secondary mt-2 w-100'
      >
        Add Blog
      </button>
    </div>
  );
};

export default AddBlog;
