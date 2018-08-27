import axios from "axios";

export default {
    login: function(userInfo){
        return axios.post("/", userInfo);
    },
    signUp: function(newUser){
        return axios.post("/", newUser);
    }
}