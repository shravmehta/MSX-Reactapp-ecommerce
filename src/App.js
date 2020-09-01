import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop-page';
import Header from './components/header-component/header-component';
import LoginPage from './pages/login/login';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot =>{
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
        console.log(this.state);
      }else{
        this.setState({currentUser: userAuth });
      }
   
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div>
        <BrowserRouter>
        <Header currentUser = {this.state.currentUser}/>
         <Switch>
           <Route exact path='/' component={HomePage}/>
           <Route path='/shop' component={ShopPage}/>
           <Route path='/signIn' component={LoginPage}/>
         </Switch>
         </BrowserRouter>
      </div>
     );
  }
 
}

export default App;
