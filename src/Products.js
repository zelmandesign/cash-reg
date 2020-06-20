import React from 'react'

let ProdPrice = 87

class Products extends React.Component {
  render() {
    return (
      <div className="products">
        Product Price is ${ProdPrice}
      </div>
    );
  }
}

export default Products;