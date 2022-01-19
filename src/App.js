import React,{Component} from 'react';
import Subject from "./compos/Subject"
import Middle from "./compos/Middle"
import ReadContents from "./compos/ReadContents"
import CreateContents from "./compos/CreateContents"
import Control from "./compos/Control"
import UpdateContents from "./compos/UpdateContents"

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
  getContent(){
    var _title,_desc,_article = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContents title = {_title} sub = {_desc}></ReadContents>
      
    }else if(this.state.mode === "read"){
      this.state.contents.forEach((item)=>{
        if(item.id === this.state.selected_id){
          _title = item.title;
          _desc = item.desc;
          _article = <ReadContents title = {_title} sub = {_desc}></ReadContents>
        }
      })
    }else if(this.state.mode === "create"){
      _article = <CreateContents onAddContents = {function(_title,_desc){
        let max_id;
        this.state.contents.forEach((item)=>{
          max_id = item.id;
        })
        max_id+=1;
        //var _contents = this.state.contents.concat(
        //  {id : max_id, title : _title, desc : _desc}
        //) 이것도 맞지만 Array.from()을 이용해서 한번해보자.
        var _contents = Array.from(this.state.contents);
        _contents.push(
          {id:max_id, title : _title, desc : _desc}
        )
        this.setState({
          contents : _contents,
          mode : 'read',
          selected_id : max_id
        })
      }.bind(this)}></CreateContents>
    }else if(this.state.mode === "update"){
      var _data;
      this.state.contents.forEach((item)=>{
        if(item.id === this.state.selected_id){
          _data = item;
        }
      })
      _article = <UpdateContents data = {_data} onSubmit = {function(_id,_title,_desc){
          var _contents = Array.from(this.state.contents);
          _contents.forEach((item)=>{
            if(item.id === _id){
              item.title = _title;
              item.desc = _desc;
            }
          });
          this.setState({
            mode : 'read',
            contents : _contents
          })
      }.bind(this)}></UpdateContents>
    }
    return _article;
  }
  render(){ 
    console.log('render');
    
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
        <Control modeChange={function(_mode){
          if(_mode==='delete'){
            if(window.confirm('Really Delete?')){
              var _contents = this.state.contents.filter(function(data){
                return data.id!==this.state.selected_id;
              }.bind(this));
              this.setState({
                mode : 'welcome',
                contents : _contents
              });
              alert('Deleted');
            }

          }
          else{
            this.setState({
              mode : _mode
            });
          }
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    )
  }
  
}
export default App;