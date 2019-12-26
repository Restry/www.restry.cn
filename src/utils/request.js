import axios from 'axios';


const baseURL = '/api';
const user = 'restry';


export const base = axios.create({ baseURL });

export const books = () => base.get(`books`);

export const docs = (bookId) => base.get(`docs/${bookId}`)

export const doc = (bookId, docId) => base.get(`docs/${bookId}/${docId}`)
