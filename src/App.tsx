import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from './context/userContext';
import Layout from './layout/Layout';
import Home from './pages/home';

function App() {
  return (
    <UserContext.Provider value={null}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/home' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
