import axios from "axios";

export default {
    login: function(userInfo){
        return axios.post("/", userInfo);
    },
    signUp: function(newUser){
        console.log("SIGNUP: ", newUser)
        return axios.post("/api/users", newUser);
    }
}