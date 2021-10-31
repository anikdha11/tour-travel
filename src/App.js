
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import ContactUs from './components/contactus/ContactUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LogIn from './components/login/login/LogIn';
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
    </Switch>
    <Footer></Footer>
    </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
