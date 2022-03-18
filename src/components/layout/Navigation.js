// code for navigation bar

import { Link } from 'react-router-dom';

import './Navigation.css';

function Navigation() {

    return (
        <header className="header">
            <h1 className="logo"><Link to='/'>ZILLA</Link></h1>
            <ul class="main-nav">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/all-projects'>All</Link></li>
                <li><Link to='/new'>New</Link></li>
                <li><Link to='/fav'>Favourites</Link></li>
            </ul>
        </header>

    );
}

export default Navigation;