import React, { Component } from 'react';
import texts from '../data/texts.json';

class About extends Component {

  render() {
    return (
      <section>
        <div className="app-about">
          <div className="content-about container">
						<h3>{texts.aboutTitle}</h3>
						<p>{texts.aboutDescription}</p>
					</div>
        </div>
      </section>
    );
  }
}

export default About;
