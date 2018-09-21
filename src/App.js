import React, { Component } from 'react';
import List from './List'
import TodoForm from './TodoForm'
import Footer from './Footer'
import Clock from './Clock'
import Market from './Market'


class App extends Component {
  //display a list of todos

  state ={
    todos: [], filter: 'All', showClock:false, showMarket: false
  //     {id:1,name:"a",complete:true},
  //     {id:2,name:"b",complete:true},
  //     {id:3,name:"c",complete:false},
  //     {id:4,name:"d",complete:true},
  //     {id:5,name:"e",complete:false}
  //   ]
}
toggleShowMarket = () => {
  this.setState( state => {
    return { showMarket: !state.showMarket }
  });
}

toggleShowClock = () => {
  this.setState( state => {
    return { showClock: !state.showClock }
  })
}

setFilter =(filter) => {
    this.setState({filter})
  }

getUniquId =() => {
    return Math.floor((1+Math.random() * 0x10000))
    .toString(16)
    .substring(1);
  }
  
addItem= (name) =>{
    const {todos} =this.state;
    const todo ={name, id: this.getUniquId(), complete:false}
    this.setState({todos: [todo, ...todos] });
  }

 handleClick = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map( todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        }
        
        return todo
      })
    })
  }


  visibleItems = () => {
    const { todos, filter } = this.state;
    switch(filter) {
      case 'Active':
        return todos.filter( t => !t.complete )
      case 'Complete':
        return todos.filter( t=> t.complete )
      default:
        return todos;
    }
  }


  
  render() {
    const {todos, filter, showClock, showMarket} = this.state;

    return (
      <div>
          { showClock && <Clock /> }
       <button onClick={this.toggleShowClock}>Toggle Clock</button>
       { showMarket && <Market /> }
       <button onClick={this.toggleShowMarket}>Toggle Market</button>
      <TodoForm addItem={this.addItem} />
      <List name='Todo List' items={todos} todoCLcik ={this.handleClick}/>
      <Footer filter={filter} setFilter={this.setFilter} />
      </div>
    );
  }
}

export default App;


//key is a special attribute needed by ract 