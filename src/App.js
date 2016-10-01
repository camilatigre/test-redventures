import React, { Component } from 'react';
import './styles/app.css';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Products from './components/Products';

class App extends Component {

	constructor(props) {

			super(props);

			this.state = {
				items: 0
			};

			this.addItems = this.addItems.bind(this);

	}

	addItems(){
		this.setState({items: this.state.items + 1});
	}

  render() {
    return (
      <div className="app">
        <Header
					items={this.state.items}
				/>
				<Products
					addItems={this.addItems}
					items={this.state.items}
				/>
				<About />
				<Footer />
      </div>
    );
  }
}

export default App;
