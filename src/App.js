import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop-page';
import CheckoutPage from './pages/checkout/checkout-page';
import Header from './components/header-component/header-component';
import LoginPage from './pages/login/login';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user-actions';
import {selectCurrentUser} from './redux/user/user-selector';
import {createStructuredSelector} from 'reselect';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot =>{
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          })
        })
        console.log(this.state);
      }else{
        setCurrentUser(userAuth);
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
        <Header/>
         <Switch>
           <Route exact path='/' component={HomePage}/>
           <Route path='/shop' component={ShopPage}/>
           <Route exact path='/signIn' 
           render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<LoginPage/>) }/>
           <Route exact path='/checkout' component={CheckoutPage}/>
         </Switch>
         </BrowserRouter>
      </div>
     );
  }
 
}

const mapStateTOProps = createStructuredSelector ({
    currentUser :selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser : user => dispatch(setCurrentUser(user)) 
});

export default connect(mapStateTOProps, mapDispatchToProps)(App);
