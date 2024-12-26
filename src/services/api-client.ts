import axios from "axios";

export default axios.create({
  baseURL:'https://api.rawg.io/api',
  params:{
    key: '7577b5c1f04a4e5981103162a757d833'
  }
})