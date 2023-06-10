import { Route, Routes } from 'react-router';
import './App.css';
import Mockman from 'mockman-js'
import { Home } from './Features/Home/Home';
import { Profile } from './Features/Profile/Profile';
import { HomeContent } from './Features/HomeContent/HomeContent';
import { Explore } from './Features/Explore/Explore';
import { Bookmark } from './Features/Bookmark/Bookmark';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home><HomeContent /></Home>} />
        <Route path='/explore' element={<Home><Explore /></Home>} />
        <Route path='/bookmark' element={<Home><Bookmark /></Home>} />
        <Route path='/profile' element={<Home><Profile /></Home>} />
        <Route path='/mockman' element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
