import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const AddBlog = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    const getBlog = async () => {
      const request = await fetch('http://localhost:8080/api/v1/todo/' + id);
      const data = await request.json();

      if (request.status === 400) {
        return navigate('404');
      }
      if (request.status === 200) {
        setTitle(data.title);
        setBody(data.body);
      }
    };
    getBlog();
  }, []);
  return (
    <div>
      <h1 className='text-center my-3'>{title}</h1>

      <textarea
        className='form-control mt-10'
        rows='8'
        readOnly
        value={body}
      />

      <button
        onClick={onClick}
        type='button'
        className='btn btn-outline-secondary mt-3 w-100'
      >
        Back Button
      </button>
    </div>
  );
};

export default AddBlog;
