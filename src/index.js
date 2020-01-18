import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    // Not required generally. Initialises state. Overrides component

    state = { lat: null, errorMessage: '' };

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
                //occurs later, not until position is actually fetched       
            err => this.setState({ errorMessage: err.message})
        );  
    }
 

    // React says we have to define render
    render() {  
        // Conditional Rendering   
            if (this.state.errorMessage && !this.state.lat){
                return <div>Error: {this.state.errorMessage}</div>
            }
            if (!this.state.errorMessage && this.state.lat){
                return <SeasonDisplay lat={this.state.lat} />
            }
            return <Spinner />;
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);