import React, { Component } from 'react';

class Header extends Component {

	constructor(props) {

			super(props);

			this.state = {
				text: {
					title: 'Collection 2016',
	      	description: 'some cool text here about the new collection of design furniture 2016',
					btnBuy: 'Buy now'
				},
				showMenuItens: false
			};

			this.showMenuItens = this.showMenuItens.bind(this);
	}

	showMenuItens(evt) {
		evt.preventDefault();
		if (!this.state.showMenuItens) {
			this.setState({ showMenuItens: true });
		} else {
			this.setState({ showMenuItens: false });
		}

	}

  render() {
    return (
      <header>
        <div className="app-header">
          <div className="content-header container">
						<div className="app-logo"></div>
						<nav className="nav-bar">
							<ul className={this.state.showMenuItens ? "nav-items-mobile" : "nav-items-mobile-off"}>
								<li><a href="#">{'Home'}</a></li>
								<li><a href="#">{'Products'}</a></li>
								<li><a href="#">{'Contact'}</a></li>
							</ul>
							<div className="cart">
								{this.props.items > 0 ? <span>{this.props.items}</span> : null}
							</div>
							<div
								className="nav-mobile-trigger visible-xs"
								onClick={this.showMenuItens}
							>
								<span className={this.state.showMenuItens ? "glyphicon glyphicon-remove" : "glyphicon glyphicon-menu-hamburger"} aria-hidden="true"></span>
							</div>

						</nav>
						<div className="banner-description">
							<h2>{this.state.text.title}</h2>
							<p>{this.state.text.description}</p>
							<a href="#" className="btn-purple">{this.state.text.btnBuy}</a>
						</div>
					</div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
	items: React.PropTypes.number,
}

export default Header;
