import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BreedsProvider from './context/Breeds';
import Home from './screens/Home';
import NotFound from './screens/404';
import Cat from './screens/Cat';

function App() {
  return (
    <BreedsProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat/:id" element={<Cat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BreedsProvider>
  );
}

function WithRouter() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default WithRouter;
