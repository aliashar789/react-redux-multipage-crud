import React from 'react';
import './App.css';
import Home from './components/Home';
import Registration from './components/Registration';
import EditUser from './components/EditUser';
import Nav from './widgets/Nav'
import store from './redux/store'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/home' element={<Home />} exact />
            <Route path='/edit-user/:id' element={<EditUser />} exact />
            <Route path='/registration' element={<Registration />} exact />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;