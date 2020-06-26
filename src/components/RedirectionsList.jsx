import React, { useRef } from "react"
import RedirectionItem from "./RedirectionItem"
// import { useStore } from "laco-react"
import { RedirectionsStore } from "../stores/redirections"

const TodoList = () => {
  // const { visibilityFilter } = useStore(TodoStore)
  const parentRef = useRef()
  return (
    <form ref={parentRef} className="todo-list">
      {RedirectionsStore.get().redirections.map((redirection, index) => (
        <div className="border border-blue-600">
        {index}
        <RedirectionItem key={redirection.id} redirection={redirection} i={index} reference={parentRef} />
        </div>
      ))}
    </form>
  )
}

export default TodoList
