import logo from './logo.svg';
import './App.css';
import Books from './components/Books';
import BookSearch from './components/BookSearch';
import ShoppingUI from './components/ShoppingUI';

import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      
      <Route path="/" element={<Books />} />
      <Route path="/search" element={<BookSearch/>} />
      <Route path="/shop" element={<ShoppingUI/> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

