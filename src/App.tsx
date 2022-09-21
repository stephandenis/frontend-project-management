import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from './context/userContext';
import Layout from './layout/Layout';
import Home from './pages/home';
import Users from './pages/users/users';

const httpLink = createHttpLink({
  uri: 'http://backend-project-management.herokuapp.com/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={null}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/home' element={<Home />} />
              <Route path='/users' element={<Users />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ApolloProvider>
  );
}

export default App;
