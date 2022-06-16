import './App.scss';
import Footer from './components/Footer';
import AppRouting from './AppRouting';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <AppRouting />
        <Footer /> 
    </BrowserRouter>
  );
}

export default App;
