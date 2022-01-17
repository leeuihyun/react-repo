import React from 'react';

class UpdateContents extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title : this.props.data.title,
            desc : this.props.data.desc
        }
    }
    inputFormHandler(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        console.log(this.props.data);
        return(
            <footer>
                <h1>Update</h1>
                <form action = "/update_process" method = "post" onSubmit = {function(e){
                    e.preventDefault();
                    const et = e.target;
                    this.props.onAddContents(et.title.value, et.desc.value);  
                }.bind(this)}>
                    <p><input 
                        type="text" 
                        placeholder = "title" 
                        name = "title"
                        value = {this.state.title}
                        onChange = {
                            this.inputFormHandler.bind(this)
                        }
                    /></p>
                    <p><textarea placeholder = "description" 
                        name = "desc" value = {this.state.desc}
                        onChange = {
                            this.inputFormHandler.bind(this)
                        }
                    /></p>
                    <p><input type="submit" /></p>
                </form>
            </footer>
            
        )
    }
}

export default UpdateContents;