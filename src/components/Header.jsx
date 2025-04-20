import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="w-full bg-white text-black p-2 flex justify-between items-center shadow-md">
            <Link to="/" className="text-3xl font-bold text-red-600 uppercase tracking-wider hover:text-red-700 transition-colors duration-200" style={{ fontFamily: 'Cursive' }}>Pizza TO GO</Link>
            <nav>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="hover:text-blue-400" style={{ fontFamily: 'Cursive' }}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about-us" className="hover:text-blue-400" style={{ fontFamily: 'Cursive' }}>About Us</Link>
                    </li>
                    <li>
                        <Link to="/menu" className="hover:text-blue-400" style={{ fontFamily: 'Cursive' }}>Menu</Link>
                    </li>
                    <li>
                        <Link to="/orderonline" className="hover:text-blue-400" style={{ fontFamily: 'Cursive' }}>Order Online</Link>
                    </li>
                    <li>
                        <Link to="/reservation" className="hover:text-blue-400" style={{ fontFamily: 'Cursive'}}>Reservation</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;