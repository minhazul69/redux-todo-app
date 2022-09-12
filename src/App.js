import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Shared/Navbar";
import AddBook from "./Features/Book/AddBook";
import EditBook from "./Features/Book/EditBook";
import ErrorPage from "./Pages/ErrorPage";
import BookView from "./Features/Book/BookView";
import Footer from "./Shared/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-book" element={<BookView />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/edit-book" element={<EditBook />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
