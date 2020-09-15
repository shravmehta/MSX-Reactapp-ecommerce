import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop-page';
import Header from './components/header-component/header-component';
import LoginPage from './pages/login/login';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user-actions';

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
           <Route path='/signIn' component={LoginPage}/>
         </Switch>
         </BrowserRouter>
      </div>
     );
  }
 
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser : user => dispatch(setCurrentUser(user)) 
});

export default connect(null, mapDispatchToProps)(App);
