import React from 'react';

class UpdateContents extends React.Component{
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
                    <p><input type="text" placeholder = "title" name = "title"/></p>
                    <p><input type="textarea" placeholder = "description" name = "desc"/></p>
                    <p><input type="submit" /></p>
                </form>
            </footer>
            
        )
    }
}

export default UpdateContents;