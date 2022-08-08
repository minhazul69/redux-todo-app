import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "./BooksSlice";

const BookView = () => {
  const allBooks = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <div className="center">
      <table className="tb">
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
        {allBooks &&
          allBooks.map((book, index) => {
            const { id, title, author } = book;
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{title}</td>
                <td>{author}</td>
                <td>
                  <button style={{ marginRight: "7px" }}>Edit</button>
                  <button onClick={() => handleDelete(id)}>Delete</button>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default BookView;
