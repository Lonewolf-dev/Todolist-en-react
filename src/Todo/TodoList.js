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
        <div className="alert alert-success d-flex p-2 justify-content-between" role="alert" key={item}>
          {item}  <button
          className="btn btn-danger"
          onClick={this.deleteTodo.bind(this, item)}>
          Delete
          </button>
        </div>
      );
    });
  }

  render() {
    return(
      <div>
        <h1 align="center">Ma To Do liste</h1>
        <form className="form-row align-items-center">
          <input
            className="form-control mb-2"
            value={this.state.userInput}
            type="text"
            placeholder="Ajouter une tâche"
            onChange={this.onChange.bind(this)}
          />
          <button
          className="btn btn-primary"
          onClick={this.addTodo.bind(this)}>Ajouter</button>
        </form>
        <div className="list-group card mt-1">
          {this.renderTodos()}
        </div>
      </div>
    )
  }
}

export default TodoList;
