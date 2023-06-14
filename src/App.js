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
import { RequiresAuth } from './Auth/RequiresAuth';
import { PostDetail } from './Features/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<RequiresAuth><Home><HomeContent /></Home></RequiresAuth>} />
        <Route path='/explore' element={<RequiresAuth><Home><Explore /></Home></RequiresAuth>} />
        <Route path='/bookmark' element={<RequiresAuth><Home><Bookmark /></Home></RequiresAuth>} />
        <Route path='/profile/:userhandler' element={<RequiresAuth><Home><Profile /></Home></RequiresAuth>} />
        <Route path='/post/:postId' element={<Home><PostDetail /></Home>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/mockman' element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
