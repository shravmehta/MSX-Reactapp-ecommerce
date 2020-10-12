import React from 'react';

import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview-component';
import {selectCollectionsForPreview} from '../../redux/shop/shop-selector';

import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionOverview = ({collections}) => (
    <CollectionsOverviewContainer>
         {
     collections.map(({id, ...collectionProps})=>(
    <CollectionPreview key={id} {...collectionProps}/>
    ))
    } 
    </CollectionsOverviewContainer>
);

const mapStateToProps = state => createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);