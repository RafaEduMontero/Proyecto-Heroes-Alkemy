import Axios from 'axios';

const TOKEN = '4393807120656369';

const heroeDB = Axios.create({
    baseURL: `https://superheroapi.com/api/${TOKEN}/search`
})

export default heroeDB;