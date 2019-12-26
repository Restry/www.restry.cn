import React, { useEffect, useState } from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Helmet from "react-helmet";
import * as actor from '../utils/request';
import { useParams } from 'react-router-dom';

const DocList = ({ title, docs, onBack }) => <div className="doc-list-container">
  <HeadlineWithFocus>{title}
  <input type="button" value="Back" onClick={onBack} className="doc-back"/>
</HeadlineWithFocus>
  <div className="doc-list">
    <ul>
      {docs.map((doc) => <li>
        文章: {doc.title}-{doc.slug} [{doc.created_at}]
        <p>{doc.description}</p>
      </li>)}
    </ul>
  </div>
</div>

const BookList = ({ title, books, showDocuments }) => <div className="book-list-container">
  <HeadlineWithFocus>{title}</HeadlineWithFocus>
  <div className="book-list">
    <ul>
      {books.map(book => <li key={book.id} onClick={() => showDocuments(book.slug)}>
        {book.name}
        <p>{book.description}</p>
      </li>)}
    </ul>
  </div>
</div>

const Book = (props) => <li onClick={() => props.showChilds(props.slug)} key={props.id}>
  标题: {props.name}-{props.slug}
  <p>{props.description}</p>
</li>
const Doc = (props) => <li>
  文章: {props.name}-{props.slug}
  <p>{props.description}</p>
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

  const showDocuments = async (id) => {
    const { data } = await actor.docs(id);
    setDocs(data);
  }

  let params = useParams();
  console.log(`params:`, params);
  return (
    <div className="c-content-box">
      <Helmet title="Let's play" />

      {
        docs.length ? <DocList title="文章列表" docs={docs} onBack={()=> setDocs([])}/>
          : <BookList title="知识库分类" books={books} showDocuments={showDocuments} />
      }

    </div>
  );
}