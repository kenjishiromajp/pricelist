import React, { Component } from 'react';
import './index.css';
import PriceListForm from '../../components/PriceListForm';
import PriceListAccommodation from '../../components/PriceListAccommodation';
import { HOMESTAY_PROPS, MELBOURNE, SYDNEY, SHARE_HOUSE_STANDARD_PROPS, SHARE_HOUSE_PREMIUM_PROPS, HOMESTAY_PRICES, SHAREHOUSE_PREMIUM_PRICES, SHAREHOUSE_STANDARD_PRICES, UNDERAGE_TAX, GOLDCOAST } from './constants';

class PriceListContainer extends Component {
  state = {
    priceListForm: {
      city: null,
      checkIn: null,
      checkOut: null,
      underAge: null,
      numberOfWeeks: null,
    },
  }
  onChange = ({ name, value}) => {
    this.setState({
      priceListForm: {
        ...this.state.priceListForm,
        [name] : value,
      }
    });
  }
  isUnderAge = () => this.state.priceListForm.underAge === '1';
  getIsReadyToShowPriceList = () =>{
    const { priceListForm } = this.state;
    if(!this.isUnderAge){
      return Object.keys(priceListForm).every((k) => priceListForm[k]);
    }
    return (priceListForm.city && priceListForm.underAge && priceListForm.numberOfWeeks);
  };
  getAccommodationOptions = () => {
    const { priceListForm } = this.state;
    if(this.isUnderAge()){
      return [{ ...HOMESTAY_PROPS, price: HOMESTAY_PRICES[priceListForm.city] + UNDERAGE_TAX, ...priceListForm, checkIn: '3', checkOut: '2' }];
    }
    if(this.state.priceListForm.city === MELBOURNE || this.state.priceListForm.city === SYDNEY){
      if(this.isUnderAge()){
        return [{ ...HOMESTAY_PROPS, price: HOMESTAY_PRICES[priceListForm.city] + UNDERAGE_TAX, ...priceListForm }];
      }
      return [{ ...HOMESTAY_PROPS, price: HOMESTAY_PRICES[priceListForm.city], ...priceListForm }];
    }
    if(this.state.priceListForm.city === GOLDCOAST){
      return [
        { ...HOMESTAY_PROPS, price: HOMESTAY_PRICES[priceListForm.city], ...priceListForm },
        { ...SHARE_HOUSE_PREMIUM_PROPS, price: SHAREHOUSE_PREMIUM_PRICES[priceListForm.city], ...priceListForm },
      ]
    }
    return [
      { ...HOMESTAY_PROPS, price: HOMESTAY_PRICES[priceListForm.city], ...priceListForm },
      { ...SHARE_HOUSE_STANDARD_PROPS, price: SHAREHOUSE_STANDARD_PRICES[priceListForm.city], ...priceListForm },
      { ...SHARE_HOUSE_PREMIUM_PROPS, price: SHAREHOUSE_PREMIUM_PRICES[priceListForm.city], ...priceListForm },
    ];
  };
  renderPriceListColumns() {
    const gutter = 15;
    const styleColumn = {
      paddingLeft: gutter,
      paddingRight: gutter,
      flex: 1,
      maxWidth: '380px',
    };
    const isReady = this.getIsReadyToShowPriceList();
    const accommodationOptions = this.getAccommodationOptions(); 
    return isReady && (
      <div className="flex-row -justify-center">
        { accommodationOptions.map( (accommodationProps) => (
          <div style={styleColumn} key={`${accommodationProps.title}${accommodationProps.subtitle}`}>
            <PriceListAccommodation {...accommodationProps} />
          </div>
        ))}
      </div>
    )
  }
  render() {

    return (
      <div className="PriceListContainer">
        <div style={{ maxWidth: '750px', marginLeft:'auto', marginRight: 'auto'}}>
          <PriceListForm onChange={this.onChange} {...this.state.priceListForm} />
        </div>
        { this.renderPriceListColumns() }
      </div>
    );
  }
}

export default PriceListContainer;
