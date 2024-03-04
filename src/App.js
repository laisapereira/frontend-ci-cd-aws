
import './App.css';

function App() {
  return (
    <div className="App">
      <form action="/user" method="post">
        
          <label for="firstName">Nome:</label>
          <input type="text" id="firstName" name="firstName"/>
          <label for="lastName">Sobrenome:</label>
          <input type="text" id="lastName" name="lastName"/>
          <input type="submit" value="Submit"/>
      </form>
     
        
    </div>
  );
}

export default App;
