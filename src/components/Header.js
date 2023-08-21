import {Link} from "react-router-dom";
const Header = () => {
    return(
       <header>
           <h2>Drinks-Pinks</h2>
           <nav>
               <Link to={'./'}>Home</Link>
               <Link to={'./about'}>About</Link>
           </nav>
       </header>
    )
}
export default Header