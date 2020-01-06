import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchCars } from '../actions/index';

class CarsIndex extends React.Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  renderCars() {
    const { cars } = this.props;
    return cars.map((car) => {
      return (
        <li key={car.id}>
          <Link to={`/cars/${car.id}`}>
            <h1>{car.brand} {car.model}</h1>
            <p>Owner: {car.owner}</p>
          </Link>
        </li>
      );
    }
    );
  }

  render() {
    return (
      <div className="container">
        <div>
          { this.renderCars() }
        </div>
        <div>
          <Link to={'/cars/new'}>Add a New Car</Link>
        </div>
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
