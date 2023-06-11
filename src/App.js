import { Route, Routes } from 'react-router';
import './App.css';
import Mockman from 'mockman-js'
import { Home } from './Features/Home/Home';
import { Profile } from './Features/Profile/Profile';
import { HomeContent } from './Features/HomeContent/HomeContent';
import { Explore } from './Features/Explore/Explore';
import { Bookmark } from './Features/Bookmark/Bookmark';
import { Login } from './Features/Login/Login';
import { SignUp } from './Features/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home><HomeContent /></Home>} />
        <Route path='/explore' element={<Home><Explore /></Home>} />
        <Route path='/bookmark' element={<Home><Bookmark /></Home>} />
        <Route path='/profile' element={<Home><Profile /></Home>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/mockman' element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
