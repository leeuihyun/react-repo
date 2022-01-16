import React,{Component} from 'react';
import Subject from "./compos/Subject"
import Middle from "./compos/Middle"
import Content from "./compos/Contents"

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode : "welcome", 
      selected_id : 0,
      subject : {title : "WEB", sub : "World Wide Web !"},
      welcome:{title:"Welcome", desc:"Hello, React!!"},
      contents : [
        {id : 1, title : "Html", desc : "HTML is for HyperText ..."},
        {id : 2, title : "Css", desc : "Css is for HyperText ..."},
        {id : 3, title : "Js", desc : "Js is for HyperText ..."}
      ]
    }
  }
  render(){ 
    console.log('render');
    var _title,_desc = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      
    }else{
      this.state.contents.forEach((item)=>{
        if(item.id === this.state.selected_id){
          _title = item.title;
          _desc = item.desc;
        }
      })
    }
    return(
      <div className="App">
        <Subject title ={this.state.subject.title}  
                sub ={this.state.subject.sub}
                onChangePage = {function(){
                  this.setState({
                    mode : 'welcome',
                    selected_id:0
                  })
                }.bind(this)}>
        </Subject>
        <Middle onChangePage ={function(id){
          this.setState({
            mode : 'read',
            selected_id : Number(id)
          })
        }.bind(this)}
        data = {this.state.contents}> 
        </Middle>
        <Content title = {_title} sub = {_desc}></Content>
      </div>
    )
  }
  
}
export default App;