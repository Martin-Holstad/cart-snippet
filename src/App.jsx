import "./App.css";
import { AppContextProvider } from "./context/AppContext";
import Navigation from "./components/common/Navigation/Navigation";
import Shop from "./components/Shop/Shop";
import Cart from "./components/common/Cart/Cart";
function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Navigation />
        <Shop />
        <Cart />
      </div>
    </AppContextProvider>
  );
}

export default App;
