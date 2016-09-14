import React, {Component} from 'react';


class LinkCreate extends Component{

    handleSubmit(event){
        event.preventDefault();

        //refs is used from form with ref: hrere it is in <input ref="input" className ="form-control"/>
        //console.log(this.refs.link.value);
        Meteor.call('links.insert', this.refs.link.value);
    }

    render(){
        return(
            <form onSubmit = {this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label>
                        Link to Shorten:
                    </label>
                    <input ref="link" className ="form-control"/>
                </div>
                <button className="btn btn-primary"> Shorten!!</button>
            </form>
        )
    }
}



export default LinkCreate;
