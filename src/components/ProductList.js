import { connect } from 'react-redux';
import * as React from "react";
import Grid from '@mui/material/Grid';

import ProductItem from './ProductItem';

function ProductList({products}) {
  return (
    <div className="main-content">
      <h2 className="page-heading">List</h2>
      <div className="product-grid">
        {
            products.map((product, index)=> {
                return (
                  <ProductItem product={product} key={index} />
                )
            })
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state)=>{
    return {
        products : state.products
    }
};

export default connect(mapStateToProps)(ProductList);