import React from 'react';

class CreateContents extends React.Component{
    render(){
        return(
            <footer>
                <h1>Create</h1>
                <form action = "/create_process" method = "post" onSubmit = {function(e){
                    e.preventDefault();
                    console.log('create');
                    const et = e.target;
                    this.props.onAddContents(et.title.value, et.desc.value);  
                }.bind(this)}>
                    <p><input type="text" placeholder = "title" name = "title"/></p>
                    <p><input type="textarea" placeholder = "description" name = "desc"/></p>
                    <p><input type="submit" /></p>
                </form>
            </footer>
            
        )
    }
}

export default CreateContents;