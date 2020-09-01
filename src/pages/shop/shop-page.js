import React from 'react';
import './shop-page.scss';
import Shop_data from './shop-data';

import Collection from '../../components/collection/collection-component';

class ShopPage extends React.Component {
     constructor(props){
         super();
         this.state = {
             collections: Shop_data
         }
     }

     render(){
         const collections = this.state.collections;
         return(
            <div className="shop-page">
               {
                   collections.map(({id, ...collectionProps})=>(
                       <Collection key={id} {...collectionProps}/>
                   ))
               } 
            </div>);
     }
}

export default ShopPage;