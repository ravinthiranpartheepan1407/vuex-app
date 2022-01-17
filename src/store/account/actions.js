import router from '../../router'
import Axios from 'axios'

export function login({commit}){
  let url = "https://randomuser.me/api";

  Axios.get(url).then(function(res){
    let userData = {
      displayName: res.data.results[0].name.first,
      email: res.data.results[0].email,
      photoURL: res.data.results[0].picture.thumbnail,
      uid: res.data.results[0].login.uuid
    }
    commit("setUserData", userData)
    router.push('/')
  })
  catch(function(error){
    console.log(error)
  });
}
