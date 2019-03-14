import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const defaultImg = require('./assets/not-found.png');

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchProd: ""
    }
  }
  handleChange = (e) => {
    this.setState({
      searchProd: e.target.value
    })
  }
  render() {
    var prod = this.props.items,
        searchProd = this.state.searchProd.trim().toLowerCase();
    if(searchProd.length > 0) {
      prod = prod.filter(function(i) {
        return i.name.toLowerCase().match(searchProd);
      });
    }
    return (
      <div className="container">
        <div className="container__head">
          <span className="title">JunkYard</span>
          <input type="text" className="search" value={this.state.searchProd} onChange={this.handleChange} placeholder="Search" />
        </div>

        <div className="container__list">
          <div className="content">
            {prod.map(function(i) {
                return (
                  <div className="item">
                    <img src={defaultImg} alt="not-found" className="item__img"/>
                     <span className="item__name">{i.name}</span>
                     <span className="item__price">{i.price}</span>
                  </div>
                )
            })}
          </div>
        </div>
      </div>
    );
  }
}

// Product
const prod = [{
  "id": 1,
  "name" : "Casti",
  "price": "80 RON"
}, {
"id": 2,
"name" : "Laptop",
"price": "4500 RON"
}, {
  "id": 3,
  "name" : "Tablou",
  "price": "100 RON"
}, {
  "id": 4,
  "name" : "Roti",
  "price": "500 RON"
}, {
  "id": 5,
  "name" : "Frigider",
  "price": "400 RON"
}, {
  "id": 6,
  "name" : "Ventilator",
  "price": "50 RON"
}, {
  "id": 7,
  "name" : "Ciocan",
  "price": "5 RON"
}, {
  "id": 8,
  "name" : "Cuier",
  "price": "120 RON"
}
];


// ========================================

ReactDOM.render(
  <Shop items={prod} />,
  document.getElementById('root')
);
