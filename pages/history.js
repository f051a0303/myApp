import { useAtom } from "jotai";
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import { searchHistoryAtom } from "../store";
import {useRouter} from 'next/router'
import { Card, Button } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import styles from '../styles/History.module.css';
// a6
import { removeFromHistory } from "../lib/userData";

export default function History(){

    const router = useRouter();

    const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);

    if(!searchHistory){
        return null;
    }

    let parsedHistory = [];

    searchHistory.forEach(history => {
        let params = new URLSearchParams(history);
        let entries = params.entries();
        parsedHistory.push(Object.fromEntries(entries));
    });

    function historyClicked(e, index){
        router.push(`/artwork?${searchHistory[index]}`);
    }

    async function removeHistoryClicked(e, index){
        e.stopPropagation(); // stop the event from trigging other events
        setSearchHistory(await removeFromHistory(searchHistory[index]));
    }

    var i = 0;

    if(parsedHistory.length <= 0){
        return (
            <>
                <Card>
                    <Card.Body>
                        <Card.Text>
                            <strong>Nothing Here</strong>
                            <br/>
                            Try searching for some artwork
                        </Card.Text>
                    </Card.Body>
                </Card>
            
            </>
        )
    }
    else{

        return (
            <>
                <ListGroup>
                    {parsedHistory.map((eachHistory, index) => (
                        <ListGroup.Item key={index} onClick={e => historyClicked(e, index)} className={styles.historyListItem} >
                            {Object.keys(eachHistory, index).map(key => (
                                <span key={i++}>
                                    {key}:<strong>{eachHistory[key]}</strong>
                                    &nbsp;
                                </span>
                            ))}
                            <Button className="float-end" variant="danger" size="sm" onClick={e => removeHistoryClicked(e, index)}>&times;</Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </>

        )

    }

    
}