export const state = () => ({
  articles: [],
  loaded: '0',
})

export const mutations = {
  setArticles(state: any, entries: any) {
    state.articles = entries
  },

  setLoaded(state: any, loaded: string) {
    state.loaded = loaded
  },
}
