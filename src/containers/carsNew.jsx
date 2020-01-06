import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { addCar } from '../actions/index';
import Aside from '../components/aside';


class CarsNew extends React.Component {
  onSubmit = (values) => {
    this.props.addCar(this.props.garage, values, () => {
      this.props.history.push('/');
    });
  }


  render() {
    return (
      <div>
        <Aside garage={this.props.garage}>
          <Link to="/"> Back to list</Link>
        </Aside>
        <div className="form-container">
          <div className="overlay">
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <div className="form-group">
                <label htmlFor="InputBrand">Brand</label>
                <Field
                  name="brand"
                  label="Brand"
                  type="text"
                  placeholder="Mercedes"
                  component="input"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="InputModel">Model</label>
                <Field
                  name="model"
                  label="Model"
                  type="text"
                  placeholder="C-Class"
                  component="input"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="InputOwner">Owner</label>
                <Field
                  name="owner"
                  label="Owner"
                  type="text"
                  placeholder="Billy-Bob"
                  component="input"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="InputPlate">Plate Number</label>
                <Field
                  name="plate"
                  label="Plate"
                  type="text"
                  placeholder="XXXXXXX"
                  component="input"
                  className="form-control"
                />
              </div>
              <button
                type="submit"
                className="btn btn-dark"
                disabled={this.props.pristine || this.props.submitting}
              >
                Add car
              </button>
            </form>
          </div>
        </div>
        <div>
          <h1>Add a New Car to {this.props.garage}</h1>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    garage: state.garage
  };
};

export default reduxForm({ form: 'newCarForm' })(
  connect(mapStateToProps, { addCar })(CarsNew)
);

