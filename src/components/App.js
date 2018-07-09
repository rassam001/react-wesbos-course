import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes: fishes });
  };

  loadSamplesFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };

  removeFromOrder = key => {
    console.log("fish removed from Order");
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
  };
  deleteFish = key => {
    const fishes = { ...this.state.fishes };
    const order = { ...this.state.order };
    delete order[key];
    delete fishes[key];
    this.setState({ fishes, order });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul>
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                index={key}
                key={key}
                datas={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          fishes={this.state.fishes}
          loadSamplesFishes={this.loadSamplesFishes}
          addFish={this.addFish}
          deleteFish={this.deleteFish}
        />
      </div>
    );
  }
}

export default App;
