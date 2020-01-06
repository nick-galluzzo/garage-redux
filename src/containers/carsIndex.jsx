import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCars } from '../actions/index';

class CarsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCars(this.props.garage);
  }

  renderCars() {
    const { cars } = this.props;
    return cars.map((car) => {
      return (
        <div key={car.id}>
          <h1>{car.brand} {car.model}</h1>
          <p>Owner: {car.owner}</p>
          <p>Plate: {car.plate}</p>
        </div>
      );
    }
    );
  }

  render() {
    return (
      <div>
        { this.renderCars() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
