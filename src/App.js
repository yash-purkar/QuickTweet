import { Route, Routes } from 'react-router';
import './App.css';
import Mockman from 'mockman-js'
import { Home } from './Features/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
import { ContentBox } from './Components/ContentBox/ContentBox';
import { Profile } from './Features/Profile/Profile';
import { HomeContent } from './Features/HomeContent/HomeContent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ContentBox><HomeContent /></ContentBox>} />
        <Route path='/profile' element={<ContentBox><Profile /></ContentBox>} />
        <Route path='/mockman' element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
