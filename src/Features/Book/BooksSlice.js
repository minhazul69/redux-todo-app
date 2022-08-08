import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    { _id: 1, title: "Match Book", author: "Akib" },
    { _id: 2, title: "English Book", author: "Minhajul" },
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
  },
});
export const { showBooks, addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
