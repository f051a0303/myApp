import { Button, Container, Form, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import Link from "next/link";
import {useForm} from 'react-hook-form';
import {useRouter} from 'next/router';
import {useState} from 'react';
import { useAtom } from "jotai";
import { searchHistoryAtom } from "../store";
// a6
import { addToHistory } from "../lib/userData";
import { readToken, removeToken } from "../lib/authenticate";


export default function MainNav(){

  // a5
    const [isExpanded, setisExpanded] = useState(false);

    const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);

    const router = useRouter();

    // a6
    let token = readToken();
    

    const {register, handleSubmit} = useForm({
      defaultValues:{
        searchField: ''
      }
    })

    async function onSubmit(data){
      setisExpanded(false);
      setSearchHistory(await addToHistory(`title=true&q=${data.searchField}`));
      router.push(`/artwork?title=true&q=${data.searchField}`);
      
    }

    function logout(){
      setisExpanded(false);
      removeToken();
      router.push('/login');
    }



    return (
        <div>
        <Navbar bg="light" expand="lg" className="fixed-top  navbar-dark bg-dark" expanded={isExpanded}>
          <Container>
            <Navbar.Brand>Chi Ming Lai</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={e => setisExpanded(!isExpanded)}/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link href="/" passHref><Nav.Link active={router.pathname === "/"} onClick={(e) => setisExpanded(false)}>Home</Nav.Link></Link>
                { token && <Link href="/search" passHref><Nav.Link active={router.pathname === "/search"} onClick={(e) => setisExpanded(false)}>Advanced Search</Nav.Link></Link> }
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <Link href="/" passHref><NavDropdown.Item active={router.pathname === "/"} onClick={(e) => setisExpanded(false)}>Home</NavDropdown.Item></Link>
                  <NavDropdown.Divider />
                  { token && <Link href="/search" passHref>
                    <NavDropdown.Item active={router.pathname === "/search"} onClick={(e) => setisExpanded(false)}>
                        Advanced Search
                    </NavDropdown.Item>
                  </Link> }
                </NavDropdown>
              </Nav>
              &nbsp;
              {token && <Form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        {...register('searchField')}
                    />
                    <Button  type="submit">Search</Button>
              </Form>}
              &nbsp;

              { token && <Nav>

                <NavDropdown title={token.userName} id="basic-nav-dropdown">
                  <Link href="/favourites" passHref><NavDropdown.Item active={router.pathname === "/favourites"} onClick={(e) => setisExpanded(false)}>Favourites</NavDropdown.Item></Link>
                  <Link href="/history" passHref><NavDropdown.Item active={router.pathname === "/history"} onClick={(e) => setisExpanded(false)}>Search History</NavDropdown.Item></Link>
                  <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>}
              { !token && <Nav>
                  <Link href="/register" passHref legacyBehavior><Nav.Link active={router.pathname === "/register"} onClick={(e) => setisExpanded(false)}>Register</Nav.Link></Link>
                  <Link href="/login" passHref legacyBehavior><Nav.Link active={router.pathname === "/login"} onClick={(e) => setisExpanded(false)}>Login</Nav.Link></Link>
                
                </Nav>}
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br/><br/>
        </div>
      );


}