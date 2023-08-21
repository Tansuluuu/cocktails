import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from './components/Header'
import SingleCocktail from "./pages/SingleCocktail";

const App = ()=>  {
  return (
      <div className={'App'}>
          <Header/>
         <Routes>
             <Route path='/' element={HomePage}/>
             <Route path='/cocktail/:id' element={SingleCocktail }/>
         </Routes>
          <HomePage/>
      </div>
  )
}

export default App;
