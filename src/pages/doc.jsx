import React, { useEffect, useState } from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Helmet from "react-helmet";
import * as actor from '../utils/request';
import { useParams } from 'react-router-dom';

export default () => {

  const [doc, setDoc] = useState({});
  let params = useParams();
  console.log(`params:`, params);
  if (!params.id) {
    return <div className="nofound">NotFound</div>
  }
  useEffect(() => {
    const fetchDoc = async () => {
      const { data } = await actor.doc(params.bookId, params.id);
      setDoc(data);
    };
    fetchDoc();
  }, [])


  return (
    <div className="c-content-box">
      <Helmet title={doc.title} />

      <div dangerouslySetInnerHTML={{ __html: doc.body_lake }}>
      </div>

    </div>
  );
}