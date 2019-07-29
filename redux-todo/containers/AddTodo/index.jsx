import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'

const AddTodo = ({ dispatch }) => {
  let input;

  const handleSubmit = e => {
    e.preventDefault()
    console.log("handleSubmit");
    
    if (!input.value.trim()) {
      return
    }
    dispatch(addTodo(input.value))
    input.value = ''
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo);
