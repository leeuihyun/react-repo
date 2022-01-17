import React from 'react';

class Control extends React.Component{
    render(){
        return(
            <ul>
                <li><a href="/create" onClick={function(e){
                    e.preventDefault();
                    this.props.modeChange('create');
                }.bind(this)}>Create</a></li>
                <li><a href="/update" onClick = {function(e){
                    e.preventDefault();
                    this.props.modeChange('update');
                }.bind(this)}>Update</a></li>
                <li><input onClick={function(e){
                    e.preventDefault();
                    this.props.modeChange('delete');
                }.bind(this)}type="button" value = "Delete"/></li>
            </ul>
        )
    }
}

export default Control;