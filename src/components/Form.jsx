import React from "react"
import RedirectionsList from "../components/RedirectionsList"
import { useStore } from "laco-react"
import { RedirectionsStore, deleteAllRedirections, getRedirectionsCount } from "../stores/redirections"

const Form = () => {
  const { redirections } = useStore(RedirectionsStore)
  return (
    <section>
      <RedirectionsList />
      <pre>{JSON.stringify(redirections, null, 2)}</pre>
    </section>
  )
}
export default Form
