
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking/Booking/Booking';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';



function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
         </Route> 
        <PrivateRoute path="/booking/:serviceid">
        <Booking></Booking>
        </PrivateRoute>
        <Route path="*">
        <NotFound></NotFound>
        </Route>
      </Switch>
      </BrowserRouter>
     </AuthProvider>
      
    </div>
  );
}

export default App;
