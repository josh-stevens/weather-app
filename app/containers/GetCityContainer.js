import React, { PropTypes } from 'react';
import GetCity from '../components/GetCity';

export default class GetCityContainer extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      city: ''
    };
    this.handleSubmitCity = this.handleSubmitCity.bind(this);
    this.handleUpdateCity = this.handleUpdateCity.bind(this);
  }

  handleSubmitCity() {
    console.log(this.state.city)
  }

  handleUpdateCity(e) {
    this.setState({
      city: e.target.value
    });
  }

  render() {
    return (
      <GetCity
        direction={this.props.direction}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    );
  }
}

GetCityContainer.propTypes = {
  direction: PropTypes.string
};

GetCityContainer.defaultProps = {
  direction: 'column'
};
