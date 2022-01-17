import React from 'react';

class ReadContents extends React.Component{
    render(){
        return(
            <footer>
                <h1>{this.props.title}</h1>
                {this.props.sub}
            </footer>
            
        )
    }
}

export default ReadContents;