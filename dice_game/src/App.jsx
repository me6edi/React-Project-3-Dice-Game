import "./App.css";
import StartGame from './components/StartGame';

function App() {

  const [isGameStarted,setIsGameStarted] = useState(false)

  const toggleGamePlay = () => {

    setIsGameStarted((prev) => !prev);
  };
  return (
    <div>
      <StartGame />
    </div>
  );
}

export default App;



