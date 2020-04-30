import React, { useEffect, useState } from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Helmet from "react-helmet";
import * as actor from '../utils/request';
import { useParams, Link } from 'react-router-dom';

export default () => {

  const [docs, setDocs] = useState([]);
  let params = useParams();
  console.log(`params:`, params);
  if (!params.id) {
    return <div className="nofound">NotFound</div>
  }

const DocList = ({ title, docs, onBack }) => <div className="doc-list-container">
  <HeadlineWithFocus>{title}
    <input type="button" value="Back" onClick={onBack} className="doc-back" />
  </HeadlineWithFocus>
  <div className="doc-list">
    <ul>
      {docs.map((doc) => <Doc key={doc.id} {...doc} />)}
    </ul>
  </div>
</div>
const Doc = (doc) => <li>
  <Link to={`/doc/${params.id}/${doc.slug}`} key={doc.id} >
    文章: {doc.title}-{doc.slug} [{doc.created_at}]
  <p>{doc.description}</p>
  </Link>
</li>


  useEffect(() => {
    const fetchDoc = async () => {
      const { data } = await actor.docs(params.id);
      setDocs(data);
    };
    fetchDoc();
  }, [])


  return (
    <div className="c-content-box">
      <Helmet title={params.id} />


      <DocList title={params.id} docs={docs} onBack={() => { }} />

    </div>
  );
}