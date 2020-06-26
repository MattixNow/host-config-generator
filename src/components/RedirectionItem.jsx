import React from "react"
import { useStore } from "laco-react"
import { RedirectionsStore, editRedirection, deleteRedirection, addRedirection } from "../stores/redirections"

const Redirectionitem = ({ redirection, reference, i }) => {
  const { redirections } = useStore(RedirectionsStore)
  // console.log(reference)

  const handleSubmit = (e) => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      addRedirection(e.target.previousSibling.value, e.target.value)
      redirection.from = ""
      redirection.to = ""
    }
  }
  // console.log(props)
  return (
    <div>
      <input
        className="border border-orange-800"
        type="text"
        // placeholder={this.props.placeholder}
        // autoFocus="true"
        value={redirection.from}
        // onKeyDown={handleSubmit}
        onChange={(e) => editRedirection({ id: redirection.id, from: e.target.value })}
      />
      <input
        className="border border-green-600"
        type="text"
        // placeholder={this.props.placeholder}
        // autoFocus="true"
        value={redirection.to}
        onKeyDown={handleSubmit}
        onChange={(e) => editRedirection({ id: redirection.id, to: e.target.value })}
      />
    </div>
  )
}

export default Redirectionitem
