import './App.css';
import Thuc_hanh_1 from './Thuc_hanh_1';
import Thuc_hanh_2 from './Thuc_hanh_2';
import Thuc_hanh_3 from './Thuc_hanh_3';
import Thuc_hanh_4 from './Thuc_hanh_4';


function App() {
  return (
    <div className="App">
      <h2>Thực hành 1</h2>
        <Thuc_hanh_1></Thuc_hanh_1>
        <div>---------------------------------------------</div>
      <h2>Thực hành 2</h2>
        <Thuc_hanh_2 />
        <div>---------------------------------------------</div>
      <h2>Thực hành 3</h2>
        <Thuc_hanh_3 />
        <div>---------------------------------------------</div>
      <h2>Thực hành 4</h2>
        <Thuc_hanh_4 />
    </div>
  );
}

export default App;
