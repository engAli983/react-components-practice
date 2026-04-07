import { Component } from "react";

class Child extends Component {
  
  state = {

  }
  render() {

    let {code , count, category, price, onSale, id} = this.props.productDetails;
    return <>
      <div className="col-md-3">
        <div className="bg-dark text-white p-3 position-relative">
          <h3>Code: {code}</h3>
          <h3>Count: {count}</h3>
          <h3>Category: {category}</h3>
          <h3>Price: {price}</h3>
          {onSale ? <div className="bg-danger p-1 text-white top-0 end-0 position-absolute">Sale</div>: ""}
          <button className="btn btn-outline-danger btn-sm w-100" onClick={()=>{this.props.delete(id)}} type="button">Delete</button>
          <button className="btn btn-outline-warning my-2 btn-sm w-100" onClick={()=>{this.props.update(this.props.productIndex, +1)}} type="button">+</button>
          <button className="btn btn-outline-warning my-2 btn-sm w-100" onClick={()=>{this.props.update(this.props.productIndex, -1)}} type="button">-</button>
        </div>
      </div>
  
    </>;
  }


}
export default Child;