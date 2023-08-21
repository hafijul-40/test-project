import logo from './logo.svg';
import './App.css';
import Book from './component/book';


import { Component } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>book list</h1>
      
//       </header>
     
//     </div>
//   );
// }

// }
class App extends Component{
  state={}
  constructor(props){
    super(props);
    this.state= {
      book :[
        {bookName: "paradoxical sajid", writer: "Arif ajad"},
        {bookName: "bidrohi", writer: "kazi nazrul islam"},
        {bookName: "gita", writer: "rabindro nath thakur"}
      ],
      
    };
    
  }
  changeBookState = () =>{
      this.setState({
        
        book :[
          {bookName: "paradoxical sajid", writer: "Arif ajad"},
          {bookName: "bisher bashi", writer: "kazi nazrul islam"},
          {bookName: "sonar tory", writer: "rabindro nath thakur"}
        ],
        
      })
            }
  render(){
    return(
      <div className='App'>
        <header className="App-header">
        <h1>book list</h1>
        <button onClick={this.changeBookState}>change state</button>
        <Book 
        bookName= {this.state.book[0].bookName}
         writer={this.state.book[0].writer} />

        <Book 
        bookName= {this.state.book[1].bookName} 
        writer={this.state.book[1].writer} />

        <Book 
        bookName= {this.state.book[2].bookName} 
        writer={this.state.book[2].writer} />
       
       

        </header>
        
        

      </div>
    )
  }
    
}


export default App;
