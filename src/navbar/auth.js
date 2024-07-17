import { Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../pages/home';
import Create from '../pages/create';
import Edit from '../pages/edit'
import View from '../pages/view';
import Dashboard from '../pages/dashboard';
import AuthUser from '../AuthUser';
import User from '../pages/user';
function Auth() {
    const { token, logout } = AuthUser();
    const logoutUser = () => {
        if (token != undefined) {
            logout();
        }
    }
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/"} className="navbar-brand" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/user"} className="navbar-brand" >Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/create"} className="navbar-brand" >Create</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/dashboard"} className="navbar-brand" >Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <span role='button' className="navbar-brand" onClick={logoutUser}>Logout</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user" element={<User />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/edit/:id' element={<Edit />} />
                    <Route path='/view/:id' element={<View />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                </Routes>
            </div>
        </div>
    );
}

export default Auth;
