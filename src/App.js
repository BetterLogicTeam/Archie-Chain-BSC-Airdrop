
import './App.css';
// import Get_Data from './Components/Get_Data/Get_Data';
import Header from './Components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Uploadfile from './Components/UploadFile/Uploadfile';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Get_Data_Multisend from './Components/Get_Data2/Get_Data_Multisend'; //using this for warc
import Get_Data from './Components/Get_Data3/Get_Data_Multisend3'; //using for Archie token

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      {/* <Uploadfile/> */}

      {/* <Get_Data/> */}
      <div className='container'>
        <Tabs
          defaultActiveKey="Approve"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
            <Tab eventKey="Approve" title="WrappedARC Token Airdrop">
            <Get_Data_Multisend />

        </Tab>

         <Tab eventKey="Direct" title="Archie Token Airdrop">
            <Get_Data />

        </Tab>
        </Tabs>

      </div>


    </div>
  );
}

export default App;
