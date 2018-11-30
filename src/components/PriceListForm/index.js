import React, { Component } from 'react';
import BrisbaneIcon from '../Icons/BrisbaneIcon';
import GoldcoastIcon from '../Icons/GoldcoastIcon';
import SydneyIcon from '../Icons/SydneyIcon';
import MelbourneIcon from '../Icons/MelbourneIcon';
import { BRISBANE, GOLDCOAST, MELBOURNE, SYDNEY } from '../../containers/PriceListContainer/constants';

const CITIES = [
  {
    label: 'Brisbane',
    value: BRISBANE,
    icon: BrisbaneIcon,
  },
  {
    label: 'Gold Coast',
    value: GOLDCOAST,
    icon: GoldcoastIcon,
  },
  {
    label: 'Melbourne',
    value: MELBOURNE,
    icon: MelbourneIcon,
  },
  {
    label: 'Sydney',
    value: SYDNEY,
    icon: SydneyIcon,
  }
];

const CHECK_IN_OPTIONS = [
  {
    label: 'No, I will collect the keys at SayStay\'s office on business hours (Monday to Friday, from 9am to 5pm) - applies to share house only',
    value: '1',
  },
  {
    label: 'Yes, I want someone waiting for me at my accommodation',
    value: '2',
  },
  {
    label: 'Yes, I want someone to pick me up at the airport and assist me with my check-in at my accommodation',
    value: '3',
  },
];

const CHECK_OUT_OPTIONS = [
  {
    label: 'No, I will leave the keys at SayStay\'s office on business hours (Monday to Friday, from 9am to 5pm) - applies to share house only',
    value: '1',
  },
  {
    label: 'Yes, I want someone to pick me up and take me to the airport or to another accommodation',
    value: '2',
  },
];

class PriceListForm extends Component {
  static defaultProps = {
    onChange: ()=>{},
    city: null,
    checkIn: null,
    checkOut: null,
    underAge: null,
    numberOfWeeks: null,
  };
  onValueChange = ({ target: { value, name } }) => {
    this.props.onChange({value, name});
  }
  renderCheckInCheckOutOptions = () => {
    return this.props.underAge === '0' && (
      <div>
        <div className="form-group form-group-radio">
          <label className="form-group-label">Do you need assistence to check-in?</label>
          <ul>
            { this.renderCheckInOptions() }
          </ul>
        </div>
        <div className="form-group form-group-radio">
          <label className="form-group-label">Do you need assistence to check-out?</label>
          <ul>
            { this.renderCheckOutOptions() }
          </ul>
        </div>
      </div>
    );
  }
  renderCities = () =>{
    return CITIES.map((city)=>{
      const IconComponent = city.icon;
      const className = `card no-padding flex-row flex city-radio ${this.props.city === city.value && 'active'}`;
      return (
        <li className={className} key={JSON.stringify(city)}>
          <label className="flex-column flex">
            <div className="flex">
              <IconComponent active={this.props.city === city.value} width="120px" />
            </div>
            <input className="flex" checked={this.props.city === city.value} onChange={this.onValueChange} type="radio" name="city" value={city.value}/>
            <small className="flex">{city.label}</small>
          </label>  
        </li>
      );
    });
  }
  renderCheckInOptions = () =>{
    return CHECK_IN_OPTIONS.map((cio)=>(
      <li key={JSON.stringify(cio)}>
        <label className="flex-row -no-wrap -align-center">
          <input checked={this.props.checkIn === cio.value} onChange={this.onValueChange} type="radio" name="checkIn" value={cio.value}/>
          <span>{cio.label}</span>
        </label>
      </li>
    ));
  }
  renderCheckOutOptions = () =>{
    return CHECK_OUT_OPTIONS.map((coo)=>(
      <li key={JSON.stringify(coo)}>
        <label className="flex-row -no-wrap -align-center">
          <input checked={this.props.checkOut === coo.value} onChange={this.onValueChange} type="radio" name="checkOut" value={coo.value}/>
          <span>{coo.label}</span>
        </label>
      </li>
    ));
  }
  render() {
    return (
      <form className="PriceListForm">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <div className="form-group">
              <label className="form-group-label">Which city are you going to?</label>
              <ul className="flex-row">
                {this.renderCities()}
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="form-group">
              <label className="form-group-label">How long are you staying?</label>
              <div className="flex-row -no-wrap -align-center">
                <input min="1" max="30" onChange={this.onValueChange} type="number" name="numberOfWeeks" style={{ marginRight: '10px', maxWidth: '120px'}}/> <span>Week(s)</span>
              </div>
            </div>
            <div className="form-group form-group-radio">
              <label className="form-group-label">Are you under 18 years old?</label>
              <div className="flex-row">
                <label>
                  <input checked={this.props.underAge === '1'} onChange={this.onValueChange} type="radio" name="underAge" value="1" />
                  <span>YES</span>
                </label>
                <label>
                  <input checked={this.props.underAge === '0'} onChange={this.onValueChange} type="radio" name="underAge" value="0"/>
                  <span>NO</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        { this.renderCheckInCheckOutOptions() }
      </form>
    );
  }
}

export default PriceListForm;
