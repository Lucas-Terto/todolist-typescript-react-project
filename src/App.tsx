import React, {useState} from 'react';
import './App.css';
import * as C from './App.styles'
import {Item} from './types/item'
import ListItem from './components/ListItem/index';
import AddArea from './components/AddArea';


function App() {

  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar Wey Protain', done: false},
    {id: 2, name: 'Estudar', done: true},
  ])


  const handleAddTask = (taskName:string) => {

    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    })
    setList(newList)
  }

  return (
      <C.Container className="App">
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>

          <AddArea onEnter={handleAddTask} />

          {list.map((item, index) => (
            <ListItem item={item} key={index}/>
          ))}

        </C.Area>
      </C.Container>
  );
}

export default App;
