
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Get_Data from './Components/Get_Data/Get_Data';
import Header from './Components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home';
import AirDropList from './Components/AirDropList/AirDropList';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AirDropList' element={<AirDropList />} />


      </Routes>


    </div>
  );
}

export default App;
