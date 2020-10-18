import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './white-guy.jpg';



export default function UserCards () {
    let db = firebase.firestore();
    // Hardcoded example
    const  docRef = db.collection('user-tests').doc('WABWG');

    const [items, setItems] = useState([]);

    // items for card
    useEffect(() => {
        const getData = async () => {
            docRef.get().then((items) => {
                const docData =items.data();
                setItems(docData);
            })
        }
        getData();
    }, [])
    // Eventually we will want this to run after every time a button is pressed
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
        <Card.Title>{items.firstName} {items.lastName}</Card.Title>
        <Card.Text>{items.location}</Card.Text>
            <Card.Text>
            {items.bio}
            </Card.Text>
        </Card.Body>
        </Card>
    )
}