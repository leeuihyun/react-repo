import React from 'react';

class UpdateContents extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id : this.props.data.id,
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
            <article>
                <h1>Update</h1>
                <form action = "/update_process" method = "post" onSubmit = {function(e){
                    e.preventDefault();
                    this.props.onSubmit(
                        this.state.id,
                        this.state.title,
                        this.state.desc
                    )
                }.bind(this)}>
                    <input type="hidden" name = "id" value = {this.state.id}/>
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

            </article>
            

        )
    }
}

export default UpdateContents;