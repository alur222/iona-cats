import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BreedsProvider } from './context/Breeds';
import { CatsProvider } from './context/Cats';
import Layout from './components/Layout';
import Home from './screens/Home';
import NotFound from './screens/404';
import Cat from './screens/Cat';

function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat/:catId" element={<Cat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

function App() {
  return (
    <BreedsProvider>
      <CatsProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </CatsProvider>
    </BreedsProvider>
  );
}

export default App;
