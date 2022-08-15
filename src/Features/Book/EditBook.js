import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editBook } from "./BooksSlice";

const EditBook = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState(location.state.id);
  const [editTitle, setEditTitle] = useState(location.state.title);
  const [editAuthor, setEditAuthor] = useState(location.state.author);
  const handleEditBook = (e) => {
    e.preventDefault();
    dispatch(editBook({ id, editTitle, editAuthor }));
    navigate("/all-book");
  };
  return (
    <div className="center ">
      <div className="input-container">
        <h4>Edit Book</h4>
        <form onSubmit={handleEditBook}>
          <div>
            <label htmlFor="title">Book Title</label>
            <br />
            <input
              data-testid="text-input"
              onChange={(e) => setEditTitle(e.target.value)}
              type="text"
              id="title"
              value={editTitle}
              required
            />
          </div>
          <div>
            <label htmlFor="author">Author Name</label>
            <br />
            <input
              onChange={(e) => setEditAuthor(e.target.value)}
              type="text"
              value={editAuthor}
              id="author"
              required
            />
          </div>
          <button data-testid="counter" type="submit">
            Edit Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
