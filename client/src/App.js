import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { useParams } from 'react-router-dom';



const Home = (props) => {
  
  return (
    <div>
      <h1>Welcome!</h1>
    </div>
    )
  }

const Input = (props) => {
  const {input} = useParams()

  if(isNaN(+input)) {
    return (
      <div>
        <h1>Your word is: {input}</h1>
      </div>
      )
    } else {
      return (
        <div>
          <h1>Your number is: {input}</h1>
        </div>
      )
    }
  }

const ColorWord = (props) => {
  const {word, textColor, backgroundColor} = useParams()

  return (
    <div>
      <h1 style={{background: textColor, color: backgroundColor}}>{word}</h1>
    </div>
    )
  }



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:input" element={<Input />} />
          <Route path="/:word/:textColor/:backgroundColor" element={<ColorWord />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
