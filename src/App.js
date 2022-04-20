
import AddTodo from "./components/addTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";
import EditModal from "./components/EditModal/EditModal";

function App() {
  const [todos, setTodos] = useState([])
  let [modal, setModal] = useState(false)
  let [editTodo, setEditTodo] = useState({})


  function handleTask(newObj){
    let newTodos = [...todos]
    newTodos.push(newObj)
    setTodos(newTodos)
    console.log(newTodos)

  }

  // ! function to make line through

  function changeStatus(id) {
    const newTodos = todos.map((item) => {
      if(item.id === id) {
        item.status= !item.status
      }
      return item
    })
    setTodos(newTodos)
  }

function handleDelete(id){
  let newTodos = todos.filter(item => {
    return item.id !== id
  })
  setTodos(newTodos)
}

function handleEdit (index){
  setModal(true)
 setEditTodo(todos[index])
}

function handleSaveTask(newTask){
  let newTodos = todos.map((item) => {
    if(item.id === newTask.id) {
    return newTask
    }
    return item
  })
  setTodos(newTodos)
  handleCloseModal()
}

function handleCloseModal() {
  setModal(false)
}



  return (
    <>
    <AddTodo handleTask={handleTask} />
    <TodoList todos={todos} 
    changeStatus={changeStatus}
    handleDelete={handleDelete} 
    handleEdit={handleEdit} />

    {modal ?
    <EditModal 
    editTodo={editTodo}
    handleSaveTask={handleSaveTask}
    handleCloseModal={handleCloseModal}
    />
    : null}
    
 
    </>
  ); 
}



export default App;
