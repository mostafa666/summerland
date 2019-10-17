import React, { Component } from "react";
import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination";
// import { connect } from "react-redux";

// import { fetchData } from "../actions/productDataAction";
// import { loadingData } from "../actions/productDataAction";

import Card from "./Card";

const paginationStyle = {
  direction: "ltr",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1.3rem",
  fontSize: "1.4rem"
};

export default class ProductList extends Component {
  state = {
    products: [],
    currentPage: 1
  };

  onChange = page => {
    this.setState({
      currentPage: page
    });

    // TODO add action for getting the new page data from server and send the new data to productList
  };

  componentDidMount() {
    // TODO getting the total number of items and the number to show in each page

    this.setState({ products: this.props.products });
  }

  render() {
    console.log("renderd again");
    return (
      <React.Fragment>
        <div className="products_page__products__container">
          <div className="product_list">
            {this.state.products.map((product, key) => {
              return <Card props={{ product, key }} key={product.id} />;
            })}
          </div>
        </div>
        <div>
          <Pagination
            total={180}
            style={paginationStyle}
            onChange={this.onChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

// --------------------------------------------------- code below uses redux to fetch data ------------------------------------------------------

// export class ProductList extends Component {
//   state = {
//     limit: 20
//   };

//   componentDidMount() {
//     this.fetchProductList();
//   }

//   fetchProductList() {
//     this.props.loadingData();
//     this.props.fetchData(this.state.limit);
//   }

//   loadMoreHandler = () => {
//     this.setState(prevState => {
//       const newLimit = prevState.limit + 20;
//       return { limit: newLimit };
//     });
//   };

//   render() {
//     const { loading, data } = this.props.productList;
//     return (
//       <React.Fragment>
//         {loading ? (
//           <h1
//             style={{
//               width: "100vw",
//               height: "100vh",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center"
//             }}
//           >
//             LOADING...
//           </h1>
//         ) : (
//           <div>
//             <div>{console.log(data, this.state.limit)}</div>
//             <div>
//               <div onClick={this.loadMoreHandler}>CLICK ME</div>
//             </div>
//           </div>
//         )}
//       </React.Fragment>
//     );
//   }
// }

// const mapStateToProps = state => ({ productList: state.productList });

// export default connect(
//   mapStateToProps,
//   { fetchData, loadingData }
// )(ProductList);
