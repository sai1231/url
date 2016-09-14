//Any code here will run automatically

//Import react library
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import LinkCreate from './components/link_create';
import {Links} from '../imports/collections/links';


//Create a component
class App extends Component{

    constructor(props){
        super(props);

    }

    componentWillMount(){

    }

    render(){
        return(
            <div>
                <Header/>
                <LinkCreate/>
            </div>
        );
    }
};


//Render this component to the screen
Meteor.startup(()=>{
    ReactDOM.render(<App/>, document.querySelector('.container'));

});
