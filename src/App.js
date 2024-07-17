import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthUser from './AuthUser';
import Guest from './navbar/guest';
import Auth from './navbar/auth';
function App() {
  const { getToken } = AuthUser();
  if (!getToken()) {
    return <Guest />
  }
  return (
    <div >
      <Auth />
    </div>
  );
}

export default App;
