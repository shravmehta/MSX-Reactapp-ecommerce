import React from 'react';
import './collection-overview.scss';

import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

import Collection from '../collection/collection-component';
import {selectCollectionsForPreview} from '../../redux/shop/shop-selector';

const CollectionOverview = ({collections}) => (
    <div className='collection-overview'>
         {
     collections.map(({id, ...collectionProps})=>(
    <Collection key={id} {...collectionProps}/>
    ))
    } 
    </div>
);

const mapStateToProps = state => createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);