import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    { id: 1, title: "Match Book", author: "Akib" },
    { id: 2, title: "English Book", author: "Minhajul" },
  ],
};
const bookSlice = createSlice({
  name: "Books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
    editBook: (state, action) => {
      const { id, editTitle, editAuthor } = action.payload;
      console.log(action.payload);
      const existingBook = state.books.filter((book) => book.id === id);
      if (existingBook) {
        existingBook[0].title = editTitle;
        existingBook[0].author = editAuthor;
      }
    },
  },
});
export const { showBooks, addBook, deleteBook, editBook } = bookSlice.actions;
export default bookSlice.reducer;
