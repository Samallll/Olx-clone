import React,{useContext,useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import SignupPage from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './store/Context';

function App() {

  const {user,setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })

  return (
    <div>
      <Router>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/signup'>
          <SignupPage/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
      </Router>

    </div>
  );
}

export default App;
