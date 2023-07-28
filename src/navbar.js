import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>FRiendZone</h1>
            <div className="links">
                <Link to="/">Dashboard</Link>
                <Link to="/SignUp">Sign up</Link>
                <Link to="/signin">Sign in</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;