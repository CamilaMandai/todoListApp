import React from 'react';
import InputText from './components/InputText';
import Button from './components/Button';
import TodoList from './components/TodoList';
import './App.css';
import icone from './icons/done.png';
import { requestCreateTask, requestRemoveTask, requestTasks } from './helpers/axios';



class App extends React.Component {
  state = {
    lista: [],
    newTodo: '',
  }

  async componentDidMount() {
    const storageList = JSON.parse(localStorage.getItem('TodoList')) || [];
    // const storageList = await requestTasks();
    // console.log(storageList)
    this.setState({lista: storageList.map((task) => task.task)});
  }

  handleClick = () => {
    const { newTodo, lista } = this.state;
    // const storageList = JSON.parse(localStorage.getItem('TodoList')) || [];
    const novaLista = [...lista, newTodo];
    localStorage.setItem('TodoList', JSON.stringify(novaLista));
    this.setState({ lista: novaLista, newTodo: '' })
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value
    })
  }

  removeTask = (item) => {
    const {lista} = this.state;
    const newList = lista.filter((element) => element!==item);
    localStorage.setItem('TodoList', JSON.stringify(newList))
    setTimeout(()=> this.setState({lista: newList}), 300)   
  }

  preventPost = event => {
    event.preventDefault();
  }

  render() {
    const { lista, newTodo } = this.state;
    return (
      <div className='body'>
        <div className='header'>
        <img src={icone} alt="icone"/>
        <h1>Lista de Tarefas</h1>
        </div>
        <form className='add-item-field' onSubmit={this.preventPost}>
        <InputText handleChange={this.handleChange} newTodo={newTodo}/>
        <Button handleClick={this.handleClick} />
        </form>
        <div className='todo-list'>
        <TodoList list={lista} removeTask={this.removeTask}/>
        </div>
      </div>
    );
  }
}

export default App;
