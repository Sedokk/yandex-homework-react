import { create } from "zustand"
import { cinemas } from "../simple_api/api/mock"

const useData = create((set, get) => ({
  cinemas: [],
  films: [],
  getCinemas: async () => {
    const data = await fetch("http://localhost:3001/api/cinemas").then((res) =>
      res.json()
    )
    set({ cinemas: data })
  },
  getFilms: async () => {
    if (get().films.length) return
    const data = await fetch("http://localhost:3001/api/movies").then((res) =>
      res.json()
    )
    set({ films: data })
  },
}))

const useCart = create((set, get) => ({
  cart: [],
  totalTickets: 0,
  calcTotalTickets: () => {
    set({
      totalTickets: get().cart.reduce((total, el) => total + el.amount, 0),
    })
  },
  increaseTickets: (id) => {
    const film = get().cart.find((e) => e.id === id)
    if (film) film.amount += 1
    else get().addTicket(id)
    get().calcTotalTickets()
  },
  decreaseTickets: (id) => {
    const film = get().cart.find((e) => e.id === id)
    if (film) film.amount -= 1
    get().calcTotalTickets()
  },
  addTicket: (id) => {
    get().cart.push({ id, amount: 1 })
  },
  removeTicket: () => {
    const { id, func } = get().removeData
    func && func((prev) => --prev)
    set({
      cart: get().cart.filter((e) => e.id !== id),
      isDialogOpen: false,
    })
    get().calcTotalTickets()
  },
  isDialogOpen: false,
  removeData: {},
  setIsDialogOpen: (state, id, func) => {
    set({ isDialogOpen: state, removeData: { id, func } })
  },
}))

const useFilters = create((set, get) => ({
  cinemas: [],
  cinemaFilter: null,
  genreFilter: "default",
  nameFilter: "",
  async getCinemas() {
    if (cinemas.lenght) return
    const data = await fetch("http://localhost:3001/api/cinemas").then((res) =>
      res.json()
    )
    set({ cinemas: [{ name: "Не выбрано", value: null }, ...data] })
  },
  setFilter(key, value) {
    set({ [key]: value })
    console.log(value)
  },
  getFilmsOfCinema: async () => {
    const id = get().cinemaFilter
    if (id === null) return []
    const films = await fetch(
      "http://localhost:3001/api/movies?cinemaId=" + id
    ).then((res) => res.json())
    return films
  },
}))

export { useData, useCart, useFilters }
