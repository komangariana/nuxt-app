import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          if (context.store.state.loadedPosts.length > 0) {
            return
          }
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              { 
                id: '1',
                title: 'First Title',
                thumbnail: 'https://s27389.pcdn.co/wp-content/uploads/2019/10/retail-innovation-changing-tech-consumer-employee-demands-1024x440.jpeg',
                previewText: 'Preview Text 1'
              },
              { 
                id: '2',
                title: 'Second Title',
                thumbnail: 'https://s27389.pcdn.co/wp-content/uploads/2019/10/retail-innovation-changing-tech-consumer-employee-demands-1024x440.jpeg',
                previewText: 'Preview Text 2'
              },
            ])
            resolve()
          }, 1500)
        })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore