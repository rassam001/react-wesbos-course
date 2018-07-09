import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  render() {
    const order = this.props.order;
    const fishes = this.props.fishes;
    const total = Object.keys(order).reduce((prevTotal, key) => {
      if (fishes[key] && fishes[key].status === "available") {
        return prevTotal + fishes[key].price * order[key];
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">
          {Object.keys(order).map(key => {
            if (!fishes[key]) return null;
            if (fishes[key] && fishes[key].status !== "available") {
              return (
                <li key={key}>
                  {`Sorry!! ${
                    fishes[key].name ? fishes[key].name : "Fish"
                  } is no longer available`}
                  <button
                    onClick={() => {
                      return this.props.removeFromOrder(key);
                    }}
                  >
                    &times;
                  </button>
                </li>
              );
            }
            return (
              <li key={key}>
                {`${order[key]} lbs ${fishes[key].name} 
                ${formatPrice(order[key] * fishes[key].price)} `}
                <button
                  onClick={() => {
                    return this.props.removeFromOrder(key);
                  }}
                >
                  &times;
                </button>
              </li>
            );
          })}
        </ul>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
