import React from 'react';

class Contents extends React.Component{
    render(){
        return(
            <footer>
                <h1>{this.props.title}</h1>
                {this.props.sub}
            </footer>
            
        )
    }
}

export default Contents;