import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

class CarsIndex extends React.Component {
  renderCars() {
    const { cars } = this.props;
    return cars.map((car) => {
      return (<h1>{car.model}</h1>);
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
    cars: state.cars
  };
}

export default connect(mapStateToProps)(CarsIndex);
