import React, { useEffect, useState } from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Helmet from "react-helmet";
import * as actor from '../utils/request';
import { useParams, Link } from 'react-router-dom';

const BookList = ({ title, books, showDocuments }) => <div className="book-list-container">
  <HeadlineWithFocus>{title}</HeadlineWithFocus>
  <div className="book-list">
    <ul>
      {books.map(book => <Book {...book} />)}
    </ul>
  </div>
</div>

const Book = (props) => <li key={props.id}>
  <Link to={`/book/${props.slug}`}>
    标题: {props.name}-{props.slug}
    <p>{props.description}</p>
  </Link>
</li>



export default () => {

  const [books, setBooks] = useState([]);
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const { data } = await actor.books();
      setBooks(data);
    };
    fetchBooks();
  }, [])

  let params = useParams();
  console.log(`params:`, params);
  return (
    <div className="c-content-box">
      <Helmet title="知识介绍" />
      <BookList title="知识库分类" books={books} />


    </div>
  );
}