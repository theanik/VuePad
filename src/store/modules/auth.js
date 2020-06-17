import axios from 'axios'
import Vue from "vue";

const state = {
    user : {},
    token : localStorage.getItem('auth-token') || '',
    isLogin : false
}

const getters = {
    isLogin : state => state.isLogin,
    authUser : (state) => {
        return state.user
    }
}

const actions = {

    LOGIN_REQUEST : ({commit,dispatch},user)=>{
        axios.post('http://localhost:8000/api/v1/login',user)
        .then((res) => {
            console.log(res)
            localStorage.setItem('auth-token', res.data.access_token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`
            commit("authSuccess", res)
            dispatch("getUser")
        })
        .catch(e=>{
            console.log(e)
            commit("loginFail",e)
        })
    },

    getUser : ({commit,dispatch})=>{
        console.log("come here")
        axios.get('http://localhost:8000/api/v1/user')
        .then((res) => {
            console.log(res)
            commit("setUser", res)
        })
        .catch(e=>{
            console.log(e)
            dispatch("LOGOUT_REQUEST")
        })
    },

    LOGOUT_REQUEST : ({commit})=>{
        console.log('logout')
        commit("loginFail","")
        delete axios.defaults.headers.common['Authorization']
        localStorage.removeItem("auth-token");
    }

}

const mutations = {
    authSuccess : (state, res)=>{
        state.isLogin = true,
        state.token = res.data.access_token
    },
    setUser : (state, res)=>{
        state.isLogin = true,
        state.token = localStorage.getItem('auth-token')
        Vue.set(state, "user", res.data);
    },
    loginFail : (state,e="")=>{
        state.token = ""
        state.isLogin = false
    }
}


export default{
    state,
    getters,
    mutations,
    actions
}