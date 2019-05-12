import React from 'react';
import { PlaceElement } from './PlacesListElementsStyles';

class PlacesListElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            isDetailsDisplayed: false,
            status: this.props.status
         };
        this.showDetails = this.showDetails.bind(this);
        this.hideDetails = this.showDetails.bind(this);
        this.takePlace = this.takePlace.bind(this);
    };
    
    showDetails() {
        if(!this.state.status){
            this.setState({ isDetailsDisplayed: true });
        }
    };

    /*łączenie z api i pobranie skillsów*/

    hideDetails(){
        console.log('closeklik');
        this.setState({isDetailsDisplayed: false})
    };

    takePlace(){
        console.log('takeklik');

        /*const url = `/`;
        axios.put(url, { status: true });*/

        this.setState({ 
            status: true, 
            isDetailsDisplayed: false
        })
    };

    render() {
        return (
            <PlaceElement status={true} onClick={this.showDetails}>

                {this.state.isDetailsDisplayed ? (
                    <div className="container">
                        <div className="closeBtn" onClick={this.hideDetails}><p>x</p></div>
                        <div className="name"><p>{this.props.name}</p></div>
                        <div className="skills">
                            <p>Skills:</p>
                            <ul>
                                {this.props.skills.map(item => {
                                    return (<ul key={item}>{item}</ul>);
                                })}
                            </ul>
                        </div>
                        <div className="takeBtn" onClick={this.takePlace}><p>Take it</p></div>
                    </div>
                ) : null}
            </PlaceElement>
        );
    };
}

export default PlacesListElement;