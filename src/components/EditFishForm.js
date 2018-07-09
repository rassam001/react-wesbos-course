import React from "react";

class EditFishForm extends React.Component {
  render() {
    return (
      <div className="fish-edit">
        <input type="text" name="name" required value={this.props.fish.name} />
        <input
          type="number"
          name="price"
          required
          value={this.props.fish.price}
        />
        <select name="status">
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea name="desc" value={this.props.fish.desc} />
        <input type="url" name="image" required value={this.props.fish.image} />
        <button
          type="submit"
          onClick={() => this.props.deleteFish(this.props.index)}
        >
          Remove Item
        </button>
      </div>
    );
  }
}

export default EditFishForm;
