import React, { Component } from 'react';
import products from '../data/data.json';
import _ from 'underscore';
import { Modal } from 'react-bootstrap';
import texts from '../data/texts.json';

class Products extends Component {

	constructor(props) {

			super(props);

			this.state = {
				filters: {
					type :{
						armchair: true,
						chair: true
					},
					material: {
						wood: true,
						foam: true
					}
				},
				activeFilters: {
					type: ['armchair', 'chair'],
					material: ['wood', 'foam']
				},
				items: 0,
				showModal: false
			};

			this.putOnCart = this.putOnCart.bind(this);
			this.toggleFilter = this.toggleFilter.bind(this);
			this.updateActiveFiltersList = this.updateActiveFiltersList.bind(this);
			this.isActive = this.isActive.bind(this);
			this.generateCheckboxes = this.generateCheckboxes.bind(this);
			this.checkAll = this.checkAll.bind(this);
			this.close = this.close.bind(this);
	}

	putOnCart(){
		this.props.addItems();
		this.setState({ showModal: true });
	}

	close() {
    this.setState({ showModal: false });
  }

	toggleFilter(filterType, name){
		console.log(filterType, name);
		let filters = this.state.filters;
		filters[filterType][name] = !filters[filterType][name];
		this.setState({filters}, () => this.updateActiveFiltersList(filterType));
	}

	updateActiveFiltersList(filterType) {
		let activeFilters = this.state.activeFilters;
		let filters = _.keys(this.state.filters[filterType]).filter((key) => this.state.filters[filterType][key]);

		activeFilters[filterType] = filters;
		this.setState({activeFilters});
	}

	isActive(product) {
		const intersectionType = _.intersection(product.category, this.state.activeFilters.type);
		const intersectionMaterial = _.intersection(product.category, this.state.activeFilters.material);
		return intersectionType.length > 0 && intersectionMaterial.length > 0;
	}

	generateCheckboxes(filterType) {
		return _.keys(this.state.filters[filterType]).map((name) => {
			return (
				<div
					className={`checkbox checkbox-${name}`}
					key={`div-${name}`}
				>
				<label key={`label-${name}`}>
					<input
						checked={this.state.filters[filterType][name]}
						type="checkbox"
						value={name}
						key={`input-${name}`}
						onChange={() => this.toggleFilter(filterType, name)}
					/>
				{name}
				</label>
			  </div>
			);
		})
	}

	checkAll() {
		this.setState({
			filters: {
				type :{
					armchair: true,
					chair: true
				},
				material: {
					wood: true,
					foam: true
				}
			},
			activeFilters: {
				type: ['armchair', 'chair'],
				material: ['wood', 'foam']
			},
		});
	}

	render() {
	    return (
			<section>
				<div className="app-products">
					<div className="content-products container">
						<form role="form">
							<div className="filters">
								<span>{texts.type}</span>
								{this.generateCheckboxes('type')}
								<span className="material">{'Material:'}</span>
								{this.generateCheckboxes('material')}

								<div
									className="see-all btn-blue-light"
									onClick={this.checkAll}
								>
									{texts.seeAll}
								</div>
							</div>
						</form>

						<h3>{texts.newTitle}</h3>
						<ul>

							{products.new.filter(this.isActive).map((product,index) => {
								return (
									<li
										className="product"
										key={`key-${index}`}
										onClick={this.putOnCart}
									>
										<span className="">{`${product.category[0]} / ${product.category[1]}`}</span>
										<img src={product.src} role="presentation" alt={product.name}/>
										<h4>{product.name}</h4>
										<h5>{`$ ${product.price}`}</h5>
										<div className="btn-blue-light buy-now">{texts.buyNow}</div>
								 	</li>
								);
							})}
						</ul>

						<h3>{texts.bestTitle}</h3>
						<ul>
							{products.best.filter(this.isActive).map((product,index) => {
								return (
									<li
										className="product"
										key={`key-${index}`}
										onClick={this.putOnCart}
									>
										<span className="">{`${product.category[0]} / ${product.category[1]}`}</span>
										<img src={product.src} role="presentation" alt={product.name}/>
										<h4>{product.name}</h4>
										<h5>{`$ ${product.price}`}</h5>
										<div className="btn-blue-light buy-now">{'Buy Now'}</div>
								 	</li>
								);
							})}
						</ul>
					</div>
				</div>
				<Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{texts.addItemSucessfully}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
						{`You now have ${this.props.items} item${this.props.items > 1 ? 's' : ''} on your cart.`}
          </Modal.Body>
        </Modal>
			</section>
	    );
	}
}

Products.propTypes = {
	addItems: React.PropTypes.func,
	items: React.PropTypes.number
}

export default Products;
