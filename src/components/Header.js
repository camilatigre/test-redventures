import React, { Component } from 'react';
import texts from '../data/texts.json';

class Header extends Component {

	constructor(props) {

			super(props);

			this.state = {
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
								<li><a href="#">{texts.menuHome}</a></li>
								<li><a href="#">{texts.menuProducts}</a></li>
								<li><a href="#">{texts.menuContact}</a></li>
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
							<h2>{texts.titleHeader}</h2>
							<p>{texts.descriptionHeader}</p>
							<a href="#" className="btn-purple">{texts.buyNow}</a>
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
