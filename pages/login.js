import { Card, Form, Alert, Button } from "react-bootstrap";
import {useState} from 'react';
import { authenticateUser } from "../lib/authenticate";
import {useRouter} from "next/router";
// a6
import {useAtom} from 'jotai';
import { favouritesAtom } from '../store';
import { searchHistoryAtom } from "../store";
import { getFavourites, getHistory } from "../lib/userData";

export default function Login(props){


    const [favouritesList, setFavouritesList] = useAtom(favouritesAtom);
    const [historyList, setHistoryList] = useAtom(searchHistoryAtom);
    

    const router = useRouter();

    const [user,setUser] = useState('');
    const [password, setPassword] = useState('');

    const [warning, setWarning] = useState('');


    async function updateAtoms(){
        setFavouritesList(await getFavourites());
        setHistoryList(await getHistory());
    }


    async function handleSubmit(e){
        e.preventDefault();
        try{
            await authenticateUser(user, password);
            await updateAtoms();
            router.push('/favourites');
        }catch(err){
            setWarning(err.message);
        }

    }



  return (
    <>
      <Card bg="light">
        <Card.Body><h2>Login</h2>Enter your login information below:</Card.Body>
      </Card>
      <br />
      {warning && (<><br/><Alert variant="danger">{warning}</Alert></> )}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>User:</Form.Label><Form.Control type="text" id="userName" name="userName" value={user} onChange={e => setUser(e.target.value)} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Password:</Form.Label><Form.Control type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <br />
        <Button variant="primary" className="pull-right" type="submit">Login</Button>
      </Form>
    </>
  );
}