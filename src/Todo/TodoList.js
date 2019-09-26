import React, { Component} from 'react';

//Creation du component Todolist
class TodoList extends Component {
  //Setting the state
  constructor(){
    super();
    this.state = {
      userInput: '',
      items: [],
    };
  }

  onChange(event){
    this.setState({
      userInput: event.target.value
    });
  }

  addTodo(event){
    event.preventDefault();
    this.setState({
      userInput: '',
      items: [...this.state.items, this.state.userInput]
    }, () => console.log(this.state));
  }

  deleteTodo(item){

    const array = this.state.items;
    const index = array.indexOf(item);
    array.splice(index, 1);

    this.setState({
      items: array
    },() => console.log(index))
  }

  renderTodos(){
    return this.state.items.map((item) => {
      return(
        <div key={item}>
          {item} | <button onClick={this.deleteTodo.bind(this, item)}>Delete</button>
        </div>
      );
    });
  }

  render() {
    return(
      <div>
        <h1>Ma To Do liste</h1>
        <form>
          <input
            value={this.state.userInput}
            type="text"
            placeholder="Ajouter une tâche"
            onChange={this.onChange.bind(this)}
          />
          <button onClick={this.addTodo.bind(this)}>Ajouter</button>
        </form>
        <div>
          {this.renderTodos()}
        </div>
      </div>
    )
  }
}

export default TodoList;
