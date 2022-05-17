import firebase from 'firebase/compat/app';
import { db } from "../firebase/firebase.init";
import 'firebase/firestore';
import {Container, Row, Col, Button, Input, Form} from 'reactstrap';
import { useCollection } from "react-firebase-hooks/firestore";


export default function Search() {
  const [profs, profsloading, profserror] = useCollection(
    db.collection("teachers"),
    {}
  );

  return(
    <Col>
      <h1> Profesores </h1>
      <div>
      {profserror && <strong>Error: {JSON.stringify(profserror)}</strong>}
        {profsloading && <span>Collection: Loading...</span>}
      {profs && profs.docs.map((doc) => (
              <div>
                {JSON.stringify(doc.data())},{' '}
              </div>
            ))}
            </div>
    </Col>

  )

}
