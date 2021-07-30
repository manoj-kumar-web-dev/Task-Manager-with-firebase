import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'
import {firestore} from './Firebase'


const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext(TaskListContext)
  const [title, setTitle] = useState('')
  // const Tasks = ()=>{
  //  db.collection('tasks');
  // }

  const handleSubmit = async(e) => {
   try {
    e.preventDefault()
    if (!editItem) {

      const info = await firestore.collection("tasks").add({
        title: title
      })

      addTask(info.id,title)
      setTitle('')
    } else {
      firestore.collection("tasks").doc(editItem.id).set({
        title: title
      })

      editTask(title, editItem.id)
    }
   } catch (err) {
     console.log(err);
   }
  }

  const handleChange = e => {
    setTitle(e.target.value)
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      console.log(editItem)
    } else {
      setTitle('')
    }
  }, [editItem])

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Enter Your Task here..."
        value={title}
        onChange={handleChange}
        required
        className="task-input"
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn" >
          {editItem ? 'Edit Task' : 'Add Task'}
        </button>
        <button className="btn clear-btn" onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  )
}

export default TaskForm
