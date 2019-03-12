import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const defaultImg = require('./assets/not-found.png');


class Search extends React.Component {
  render() {
    return (
      <input className="search" placeholder="Search" value={this.props.value} />
    );
  }
}

function ProductImg() {
  return <img src={defaultImg} alt="not-found" className="item__img"/>;
}

class Product extends React.Component {
  render() {
    return (
      <div className="item">
        <ProductImg />
        <span className="item__name">
          {this.props.value}
        </span>
      </div>
    );
  }
}

class ProductsList extends React.Component {
  renderProduct(i) {
    return <Product value={i}/>
  }

  render() {
    return (
      <div className="content">
        {this.renderProduct("Casti")}
        {this.renderProduct("Laptop")}
        {this.renderProduct("Tablou")}
        {this.renderProduct("Roti")}
        {this.renderProduct("Frigider")}
        {this.renderProduct("Ventilator")}
        {this.renderProduct("Ciocan")}
        {this.renderProduct("Cuier")}
      </div>
    );
  }
}

class Shop extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="container__head">
          <span className="title">JunkYard</span>
          <Search />
        </div>

        <div className="container__list">
          <ProductsList />
        </div>
      </div>
    );
  }
}




// ========================================

ReactDOM.render(
  <Shop />,
  document.getElementById('root')
);
