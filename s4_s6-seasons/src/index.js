import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
    // constructor(props) {
    //     super(props);

    //     // this is the only time we do direct assignment to this.state
    //     this.state = { lat: null, errorMessage: '' };
    // }

    // setting this is equivalent to setting up the above with a constructor
    // babel will still create the constructor and such...
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // we call setState to update the component's state
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: { this.state.errorMessage }</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={ this.state.lat } />
        }

        return <Spinner message="Please accept location request"/>;
    }

    render() {
        return (
            <div className="border">    
                { this.renderContent() }
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));