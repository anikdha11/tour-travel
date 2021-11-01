
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Booked from './components/booking/Booked';
import ContactUs from './components/contactus/ContactUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LogIn from './components/login/login/LogIn';
import PrivateRoute from './components/login/privateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Booking from './components/Packages/booking/Booking';
import AuthProvider from './context/AuthProvider';

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
      <Route exact path="/home">
      <Home></Home>
      </Route>
      <Route path="/contactus">
      <ContactUs></ContactUs>
      </Route>
      <Route exact path="/login">
      <LogIn></LogIn>
      </Route>
      <PrivateRoute exact path="/packages/:bookingId">
        <Booking></Booking>
      </PrivateRoute>
      <PrivateRoute exact path="/booked">
        <Booked></Booked>
      </PrivateRoute>
      <Route exact path="*">
      <NotFound></NotFound>
      </Route>
    </Switch>
    <Footer></Footer>
    </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
