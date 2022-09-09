import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/
// import ShowInfo from './components/ShowInfo';
import Shows from './components/Shows';
import './css/App.css';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Shows />} />
        <Route path="/shows/:id" element={<ShowInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
