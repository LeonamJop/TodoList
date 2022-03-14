import { useState } from 'react';
import * as C from './App.styles'
import { Item } from './types/item';
import { ListItem } from './Components/ListItem';
import { AddArea } from './Components/AddArea';

const App = () => {

  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar pão na padaria', done: false},
    {id: 2, name: 'Comprar um bolo na padaria', done: true}
  ]);

  const handleAddTask = (taskName: string) =>{
    const newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  return(
    <div>
      <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>

          <AddArea onEnter={handleAddTask} />

          {list.map((item, index) => (
            <ListItem key={index} item={item}/>
          ))}


        </C.Area>
      </C.Container>
    </div>
  );
}

export default App
