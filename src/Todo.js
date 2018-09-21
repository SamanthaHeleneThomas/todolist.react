import React from 'react';

const styles = {
  todo: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' }
}

const Todo = ({ id, name, complete, todoClick }) => (
  <li
    style={ complete ? { ...styles.todo, ...styles.complete } : styles.todo }
    onClick={ () => todoClick(id)}
  >
   {name}
  </li>
)

export default Todo;