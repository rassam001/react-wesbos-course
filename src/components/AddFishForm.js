import React from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();
  createFish = event => {
    event.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    this.props.addFish(fish);
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input
          type="text"
          ref={this.nameRef}
          name="name"
          required
          placeholder="Fish Name"
        />
        <input
          type="number"
          ref={this.priceRef}
          name="price"
          required
          placeholder="Fish Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea
          name="desc"
          ref={this.descRef}
          placeholder="Fish Description..."
        />
        <input
          type="url"
          ref={this.imageRef}
          name="image"
          required
          placeholder="Image"
        />
        <button type="submit">+ Add Item</button>
      </form>
    );
  }
}

export default AddFishForm;
