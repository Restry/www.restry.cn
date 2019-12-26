import axios from 'axios';


let baseURL = '/api';
const user = 'restry';

if(process.env.NODE_ENV === 'production'){
  baseURL = '/.netlify/functions/server/api'
}


export const base = axios.create({ baseURL });

export const books = () => base.get(`books`);

export const docs = (bookId) => base.get(`docs/${bookId}`)

export const doc = (bookId, docId) => base.get(`docs/${bookId}/${docId}`)
