import React, { Component } from 'react';
import PriceListContainer from '../../PriceListContainer';

class PriceListScreen extends Component {
  render() {
    return (
      <section className="PriceListScreen">
        <div className="container">
          <header>
            <h1 className="text-center">The <span className="text-blue">right price</span> for you, whoever you are</h1>
            <p className="text-center text-gray">Get a FREE quote with us!</p>
          </header>
          <PriceListContainer />
        </div>
      </section>
    );
  }
}

export default PriceListScreen;
