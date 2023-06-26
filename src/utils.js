const genres = new Map([
  ["fantasy", "Фэнтези"],
  ["horror", "Ужасы"],
  ["action", "Боевик"],
  ["comedy", "Комедия"],
])

export const getGenre = (key) => {
  return genres.get(key)
}
