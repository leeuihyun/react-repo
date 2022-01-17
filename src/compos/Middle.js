import React from 'react';


class Middle extends React.Component{
    render(){
        var lists = [];
        var data = this.props.data;
        for(var i =0;i<data.length;i++){
            lists.push(<li key = {data[i].id}>
                <a
                    data-id = {data[i].id}
                    onClick = {function(event){
                    event.preventDefault();
                    this.props.onChangePage(event.target.dataset.id);
                }.bind(this)} 
                href={"/contents"+data[i].id}>{data[i].title}
                </a>
                </li>)
        }
        return(
            <nav>
                {lists}
            </nav>
        )
    }
}
export default Middle;
