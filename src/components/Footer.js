import React, { Component } from 'react';

class Footer extends Component {

	constructor(props) {

			super(props);

			this.state = {
				text: {
					copyright: 'Copyright 2016 - all rights reserved'
				}
			};

	}

  render() {
    return (
      <footer>
				<div className="app-footer">
					<div className="content-footer container">
						<div className="app-logo"></div>
						<p>{this.state.text.copyright}</p>
					</div>

				</div>
      </footer>
    );
  }
}

export default Footer;
