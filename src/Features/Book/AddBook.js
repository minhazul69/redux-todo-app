import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addBook } from "./BooksSlice";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddBook = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(book));
    navigate("/all-book");
  };
  return (
    <div className="center ">
      <div className="input-container">
        <h4>Add Book</h4>
        <form onSubmit={handleAddBook}>
          <div>
            <label htmlFor="title">Book Title</label>
            <br />
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Book Title"
              id="title"
              required
            />
          </div>
          <div>
            <label htmlFor="author">Author Name</label>
            <br />
            <input
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              placeholder="Author Name"
              id="author"
              required
            />
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
