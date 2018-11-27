import React, { Component } from 'react';
import { SAYSTAY_TAX, PRICE_CHECKIN, PRICE_CHECKOUT, GENERAL_INFORMATION_ACCOMMODATION, HALF_BOARD, FULL_BOARD, MEALPRICE } from '../../containers/PriceListContainer/constants';

class PriceListAccommodation extends Component {
  state = {
    mealOption: '1',
  }
  static defaultProps = {
    subtitle: '',
    title: '',
    city: '',
    description: '',
    numberOfWeeks: '0',
    checkIn: '1',
    checkOut: '1',
    icon: null,
    price: 0,
    accommodationItems: [],
    color: '#203B44',
    mealOption: false,
  }
  getPricePerWeek = () => {
    const numberOfWeeks = parseInt(this.props.numberOfWeeks);
    const total = (numberOfWeeks * this.props.price) + SAYSTAY_TAX;
    return (total/numberOfWeeks).toFixed(2);
  }
  getTotal = () => {
    const { checkIn, checkOut } = this.props;
    const numberOfWeeks = parseInt(this.props.numberOfWeeks);
    let total = (numberOfWeeks * this.props.price) + SAYSTAY_TAX;
    switch(checkIn){
      case '2':
        total += PRICE_CHECKIN;
        break;
      case '3':
        total += PRICE_CHECKIN;
        break;
      default:
        break;
    }
    switch(checkOut){
      case '2':
        total += PRICE_CHECKOUT;
        break;
      default:
        break;
    }
    switch(this.state.mealOption){
      case '2':
        total += MEALPRICE[HALF_BOARD];
        break;
      case '3':
        total += MEALPRICE[FULL_BOARD];
        break;
      default:
        break;
    }
    return `$ ${total.toFixed(2)}`;
  }
  onValueChange = ({target:{value: mealOption}}) => {
    this.setState({
      mealOption
    })
  }
  renderSummary = () => {
    const { checkIn, checkOut, numberOfWeeks } = this.props;
    const price = this.getPricePerWeek();
    let summary = [
      <li> + ${price} x {numberOfWeeks}weeks</li>,
    ];
    switch(checkIn){
      case '2':
        summary = [
          <li> + ${PRICE_CHECKIN} <span className="text-gray">CheckIn Fee</span></li>,
          ...summary,
        ]
        break;
      case '3':
        summary = [
          <li> + s${PRICE_CHECKIN} <span className="text-gray">CheckIn Fee</span></li>,
          ...summary,
        ]
        break;
      default:
        break;
    }
    switch(checkOut){
      case '2':
        summary = [
          <li> + ${PRICE_CHECKOUT} <span className="text-gray">Checkout Fee</span></li>,
          ...summary,
        ]
        break;
      default:
        break;
    }
    switch(this.state.mealOption){
      case '2':
        summary = [
          <li> + ${HALF_BOARD} <span className="text-gray">MEAL OPTION</span></li>,
          ...summary,
        ]
        break;
      case '3':
        summary = [
          <li> + ${FULL_BOARD} <span className="text-gray">MEAL OPTION</span></li>,
          ...summary,
        ]
        break;
      default:
        break;
    }
    return summary;
  }
  renderMealOptions = () => {
    return this.props.mealOption && (
      <div className="form-group form-group-radio">
        <label className="form-group-label">MEALS OPTIONS</label>
        <div className="flex-row">
          <label>
            <input checked={this.state.mealOption === '1'} onChange={this.onValueChange} type="radio" value="1" />
            <span>NO MEALS</span>
          </label>
          <label>
            <input checked={this.state.mealOption === '2'} onChange={this.onValueChange} type="radio" value="2"/>
            <span>HALF BOARD</span>
          </label>
          <label>
            <input checked={this.state.mealOption === '3'} onChange={this.onValueChange} type="radio" value="3"/>
            <span>FULL BOARD</span>
          </label>
        </div>
      </div>
    );
  }
  renderDescription = () => {
    return (
      <ul className="accommodation-list">
        {this.props.accommodationItems.map((ai)=>(
          <li key={JSON.stringify(ai)} className="flex-row -no-wrap">
            <div className={`icon ${ai.icon}`}></div>
            <span>{ai.description}</span>
          </li>
        ))}
      </ul>
    );
  }
  renderGeneralDescription = () => {
    return (
      <div>
        <h5>GENERAL INFORMATION</h5>
        <ul className="accommodation-list">
          {GENERAL_INFORMATION_ACCOMMODATION.map((gia)=>(
            <li key={JSON.stringify(gia)} className="flex-row -no-wrap">
              <div className={`icon ${gia.icon}`}></div>
              <span>{gia.description}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  render() {
    const { title, subtitle, description, icon:IconComponent, color } = this.props;
    return (
      <div className="PriceListAccommodation card card-shadow" style={{ marginTop: '120px'}}>
        <header>
          {IconComponent && (
            <div style={{ marginTop: '-130px', paddingLeft: '40px', paddingRight: '40px'}}>
              <IconComponent />
            </div>
          )}
          <h5 className="text-center _no-margin">{title}</h5>
          { subtitle && <small className="text-center">{subtitle}</small> }
          <p>{ description }</p>
        </header>
        <ul className="summary">
          {this.renderSummary()}
        </ul>
        <h3 className="text-center" style={{color}}>{ this.getTotal() }</h3>
        { this.renderMealOptions() }
        <div className="description">
          { this.renderDescription() }
          { this.renderGeneralDescription() }
        </div>
      </div>
    );
  }
}

export default PriceListAccommodation;
