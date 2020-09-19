import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import './header-component.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user-selector';
import {selectCartHidden} from '../../redux/cart/cart-selector';

const Header =({currentUser, hidden}) =>(
    <div className='header'>
        <Link className="logo-container" to='/'>
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/login'>CONTACT</Link>
            {
                currentUser ? (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>)
                : (<Link className="option" to="/signIn">SIGN IN</Link>)
            }
            <CartIcon/>
        </div>
        {hidden ? null : <CartDropdown/>}
    </div>
);
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);