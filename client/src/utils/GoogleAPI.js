import axios from "axios";

export default {

    findBooks: function(search){
       return axios.get("https://www.googleapis.com/books/v1/volumes?q="+search);
    }
}