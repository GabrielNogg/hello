import './App.css';
import Employee from './components/Employee';

function App() {
  console.log("We are about o list the employees");
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ?
          <>
          <Employee/>
          <Employee/>
          <Employee/>
          <Employee/>
          <Employee/>
          <Employee/>
          </>    
      : 
        <p>You cannot see the employees</p>
          }  
    </div>
  );
}

export default App;
