import { Component } from "react";
import Child from "../Child/Child";


class Parent extends Component {
  state = {
    products: [
      {id: 1, count: 29, code: "Samsung", category: "Mobile", price: 2000, onSale: true},
      {id: 2, count: 29, code: "Iphone", category: "Mobile", price: 3000, onSale: false},
      {id: 3, count: 29, code: "Apple", category: "TV", price: 2000, onSale: true},
      {id: 4, count: 29, code: "Huawei", category: "Mobile", price: 1000, onSale: false},
      {id: 5, count: 29, code: "Nokia", category: "Mobile", price: 4000, onSale: true},
      {id: 6, count: 29, code: "HP", category: "Laptop", price: 6000, onSale: false},
    ]

  }

  deleteProdut = (productId) => {
    console.log('delete......', productId)

    // Deep Copy
    let myProducts = [...this.state.products];
    // Update Deep Copy
    myProducts = myProducts.filter((produt) => produt.id !== productId);
    // setstate()
    this.setState({products:myProducts})
  }

  updateProduct = (productIndex, step) => {
    // Deep Copy
    let products = [...this.state.products]
    // Update
    products[productIndex].count += step;
    // setstate()
    this.setState({products})
  }
  render() { 
    return  <>
      <h1>Parent</h1>

      <div className="container">
        <div className="row gy-4">
          {this.state.products.map((x, index) => <Child key={x.id} productIndex={index} productDetails = {x} delete = {this.deleteProdut} update = {this.updateProduct}/>)}
        </div>
      </div>
    </>;
  }
}
 
export default Parent;