import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCar, removeCar } from '../actions/index';

class CarsShow extends React.Component {
  componentWillMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  handeClick = () => {
    this.props.removeCar(this.props.car, () => { this.props.history.push('/'); });
  }

  renderCar() {
    if (this.props.car) {
      return (
        <li>
          <h1>{this.props.car.brand}</h1>
          <p>{this.props.car.owner}</p>
        </li>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderCar()};
        <button className="btn btn-danger" onClick={() => this.handeClick()}>REMOVE CAR</button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(c => c.id === idFromUrl);
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar, removeCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
