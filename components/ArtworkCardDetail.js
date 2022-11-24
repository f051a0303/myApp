import useSWR from 'swr';
import Error from "next/error"
import Card from "react-bootstrap/Card";
// a5 update
import {useAtom} from 'jotai';
import { favouritesAtom } from '../store';
import {useState, useEffect} from 'react';
// a6 update
import { addToFavourites, removeFromFavourites } from '../lib/userData';


export default function ArtworkCardDetail(props){

    // a5 update
    const [favouritesList, setFavouritesList] = useAtom(favouritesAtom);
    //####
    // const [showAdded, setShowAdded] = useState(() => { return favouritesList.includes(props.objectID)})
    //####

    // a6
    const [showAdded, setShowAdded] = useState(false);

    useEffect(()=>{
        setShowAdded(favouritesList?.includes(props.objectID));
    }, [favouritesList]);



    async function favouritesClicked(e){
        if(showAdded){  // if "showAdded" is true
            setFavouritesList(await removeFromFavourites(props.objectID)); // remove objectID from favourite
            setShowAdded(false);
        }else{          // "showAdded" is false
            setFavouritesList(await addToFavourites(props.objectID)) // add objectID from favourite
            setShowAdded(true);
        }
    }

    const {data, error} = useSWR(props.objectID ? `https://collectionapi.metmuseum.org/public/collection/v1/objects/${props.objectID}` : null);

    if(!data){
        return (
            <>
                <Error statusCode={404}></Error>
            </>
        );

    }
    if(data){
        return (
            <>
                <Card>
                    {data.primaryImage ? 
                    <Card.Img variant="top" src={data.primaryImage} />
                    :
                    <p>No Photo display</p>
                    }
                    <Card.Body>
                        <Card.Title> {data?.title}</Card.Title>
                        <Card.Text>
                            
                            <strong> Date: </strong> {data.objectDate ? data.objectDate : "N/A"}
                            <br/>
                            <strong> Classification: </strong> {data.classification ? data.classification : "N/A"}
                            <br/>
                            <strong> Medium: </strong> {data.medium ? data.medium : "N/A"}
                            <br/>
                            <br/>
                            <strong> Artist: </strong>{data.artistDisplayName ? data.artistDisplayName + " "  : "N/A"}
                            {data.artistWikidata_URL ? 
                            (<a href={data.artistWikidata_URL} target="_blank" rel="noreferrer">wiki</a>)
                            : 
                            <></>
                            }
                            <br/>
                            <strong> Credit Line: </strong>{data.creditLine ? data.creditLine : "N/A"}
                            <br/>
                            <strong> Dimensions: </strong>{data.dimensions ? data.dimensions : "N/A"}
                            <br/><br/>
                            <button type="button" variant={showAdded ? "primary" : "outline-primary"} onClick={e => favouritesClicked(e)}>{showAdded ? " + Favourite (added) " : " + Favourite "}</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        );
    }
    else{
        return null;
    }
   

}