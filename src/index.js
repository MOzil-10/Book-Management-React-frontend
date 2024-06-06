import React from 'react';
import { createRoot } from 'react-dom/client';
import { Navbar, Footer } from './Components/layout';
import { Home } from './Components/home';
import { Books } from './Components/books';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ApolloProviderWrapper from '../src/ApolloProvider';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProviderWrapper>
      <App />
    </ApolloProviderWrapper>
  </React.StrictMode>
);
