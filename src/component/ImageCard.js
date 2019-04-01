import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);

		this.State = { spans: 0 };

		//ref is defined into constructor which is then passed into the required dom tag to acces the dom like document.querySelector('#')
		this.imageRef = React.createRef();
	};
	
	componentDidMount() {

		this.imageRef.current.addEventListener('load', this.setSpans);
	}

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height/150 +2);

		this.setState({ spans });
		
	}


	render() {

		const {urls, description} = this.props.images;
		return (

			<div style={{ gridRowEnd: `span ${this.State.spans}` }}>
				<img ref={this.imageRef} src={urls.regular} alt={description} />
			</div>
		);
	}
}

export default ImageCard;