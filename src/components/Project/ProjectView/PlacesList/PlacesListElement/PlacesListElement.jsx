import React from 'react';
import { PlaceElement } from './PlacesListElementsStyles';
import axios from 'axios';

class PlacesListElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            isDetailsDisplayed: false,
            status: this.props.status
         };
        this.showDetails = this.showDetails.bind(this);
        this.hideDetails = this.hideDetails.bind(this);
        this.takeOrLeavePlace = this.takeOrLeavePlace.bind(this);
    };
    
    showDetails() {
        if(!this.state.isDetailsDisplayed){
            this.setState({ isDetailsDisplayed: true });
        }
    };

    hideDetails(){
        this.setState({ isDetailsDisplayed: false })
    };

    takeOrLeavePlace(){
        if(!this.status){

            const UserId = '5cd85938fff6c12f409c3886';  //potem zmienić na właściwy z propsów

            let url = `http://localhost:3001/api/places/attach/${UserId}`;
            axios.patch(url, { UserId: `${UserId}` })
            .catch(error => console.log(error));
            
            this.setState({ 
                status: true, 
                isDetailsDisplayed: false
            })
        } else {
            
            const UserId = '5cd85938fff6c12f409c3886';  //potem zmienić na właściwy z propsów
            let url = `http://localhost:3001/api/places/detach/${UserId}`;
            axios.patch(url, { UserId: `${UserId}` })
            .catch(error => console.log(error));
        
            this.setState({ 
                status: false, 
                isDetailsDisplayed: false
            })
        }
    };

    render() {
        return (
            <PlaceElement status={this.state.status} onClick={this.showDetails}>

                {this.state.isDetailsDisplayed ? (
                    <div className="container">
                        <div className="closeBtn" onClick={this.hideDetails}><p>x</p></div>
                        <div className="name"><p>{this.props.name}</p></div>
                        <div className="skills">
                            <p>Required skills:</p>
                            <ul>
                                {this.props.skills.map(item => {
                                    return (<ul key={item}>{item}</ul>);
                                })}
                            </ul>
                        </div>
                        <div className="takeBtn" onClick={this.takeOrLeavePlace}>{this.state.status ? <p>Taken</p> : <p>Take it</p>}</div>
                    </div>
                ) : null}
            </PlaceElement>
        );
    };
}

export default PlacesListElement;