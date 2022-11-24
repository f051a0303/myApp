import {useAtom} from 'jotai';
import { favouritesAtom } from '../store';
import { Row, Col, Card } from 'react-bootstrap';
import ArtworkCard from '../components/ArtworkCard';

export default function Favourite(){

    const [favouritesList, setFavouritesList] = useAtom(favouritesAtom);

    if(!favouritesList){
        return null;
    }


    return (
        <>
            <Row className="gy-4">
                {favouritesList.length > 0
                ?
                favouritesList.map((favourites)=>(
                    <Col key={favourites} lg={3}>
                        <ArtworkCard objectID={favourites}/>
                    </Col>
                )) 
                :
                <Card>
                    <Card.Body>
                        <Card.Text>
                            <strong>Nothing Here</strong>
                            <br/>
                            No favourites added
                        </Card.Text>
                    </Card.Body>
                </Card>
                }
            </Row>
        </>
        
    );
}