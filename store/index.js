import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
        state.loadedPosts[postIndex] = editedPost
      },
      setToken(state, token) {
        state.token = token
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .$get('/posts.json')
          .then((data) => {
            const postsArray = []
            for (const key in data) {
              postsArray.push({ ...data[key], id: key })
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch((e) => {console.error(e)})
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        }
        this.$axios.$post('/posts.json?auth=' + vuexContext.state.token, createdPost)
          .then((data) => {
            vuexContext.commit('addPost', { ...createdPost, id: data.name })
            this.$router.push('/admin')
          })
          .catch((e) => console.log(e))
      },
      editPost(vuexContext, editedPost) {
        this.$axios.$put('/posts/' + editedPost.id + '.json?auth=' + vuexContext.state.token, editedPost)
        .then((result) => {
          vuexContext.commit('editPost', editedPost)
        })
        .catch((e) => console.log(e))
      },
      authenticateUser(vuexContext, authData) {
        const { email, password, isLogin } = authData
        let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
        if (isLogin) {
          authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
        }
        authUrl += process.env.firebaseAPIKey
        return this.$axios.$post(authUrl, {
          email,
          password,
          returnSecureToken: true,
        }).then(result => {
          vuexContext.commit('setToken', result.idToken)
        }).catch(e => console.log(e))
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.token != null
      }
    }
  })
}

export default createStore