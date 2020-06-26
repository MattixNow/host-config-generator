import { Store } from "laco"

export const RedirectionsStore = new Store(
  {
    redirections: [
      {
        from: "",
        to: "",
        id: 0,
      },
    ],
    visibilityFilter: "All",
  },
  "RedirectionsStore"
)

export const addRedirection = (from, to= "lo") =>
  RedirectionsStore.set(
    ({ redirections }) => ({
      redirections: [
        ...redirections,
        {
          id: redirections.reduce((maxId, redirection) => Math.max(redirection.id, maxId), -1) + 1,
          from,
          to,
        },
      ],
    }),
    "Add redirection"
  )

export const deleteRedirection = (id) =>
  RedirectionsStore.set(
    ({ redirections }) => ({
      redirections: redirections.filter((item) => item.id !== id),
    }),
    "Delete redirection"
  )

export const editRedirection = ({id, from, to}) =>{
console.log("yo");

  RedirectionsStore.set(
    ({ redirections }) => ({
      redirections: redirections.map((rd) => (rd.id === id ? { ...rd, from, to } : rd)),
    }),
    "Edit redirection"
  )}

export const deleteAllRedirections = () =>
  RedirectionsStore.set(
    ({ redirections }) => ({
      redirections: []
    }),
    "Remove all redirections"
  )

// export const getRedirectionsCount = () => RedirectionsStore.get().redirections.length
