import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import "./Styles/App.css"



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting={"Hola Mundo"}></ItemListContainer>
    </div>
  );
}

export default App;
