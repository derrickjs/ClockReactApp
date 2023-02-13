
import './App.css';
import TimeOfDay from './clockComponent';




const Header = (props) => {

  let greeting = props.greeting;
   

  return (
    <header> <h1> {greeting} </h1></header>
    
    
  );
};

function App() {
  return (
    <div className="App">

      <Header greeting = "Current Time!" />
      <TimeOfDay />
        
    
    </div>
  );
}

export default App;
