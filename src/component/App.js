import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
class App extends React.Component {
	state = { images: [] };

	 onSearchSubmit = async (term) => {
		console.log(term);
		const clientId = '5df238ed6b8e75dc5a8733810c9404fd6ad7cafdd67890eefcc9fb1c94d5e43f';
		const response = await axios.get(`https://api.unsplash.com/search/photos/?query=${term}&&client_id=${clientId}`);
		
		this.setState({images: response.data.results });
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
			<SearchBar onSubmit = {this.onSearchSubmit} />
			<ImageList images={this.state.images} />
			</div>
			);		
		}
};


export default App;