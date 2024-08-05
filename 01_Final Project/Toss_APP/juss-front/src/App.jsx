import { BrowserRouter } from 'react-router-dom';
import  Routes from './routes';
import './App.css';

function App() {
  return (
    // router를 사용할 수 있게 하는 컴포넌트
    <BrowserRouter>
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
