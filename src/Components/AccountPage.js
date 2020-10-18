import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import firebase from '../firebase';

let db = firebase.firestore();

export default function AccountPage () {
    // fetches ID from pathname
    const identifier = window.location.pathname.slice(9);
    const docRef = db.collection('user-tests').doc(identifier);

    // material UI
    const useStyles = makeStyles({
        root: {
            margin: "auto",
            width: 300,
        },
      });

    // Items we are changing
    const [items, setItems] = useState([]);

    // Gets firebase data once after every render
    useEffect(() => {
        const getData = async () => {
            docRef.get().then((items) => {
                const docData = items.data();
                setItems(docData);
            })
        }
        getData();
    }, []);

    // handlers
    function handleBioChange (e) {
        docRef.update({
            bio: e.target.value
        })
    }

    // material-UI
    const classes = useStyles();
    function valuetext(value) {
        return `${value}`;
      }

    return (
        <div className="App">
            <form>
                <p>Your bio! Tell others about you!</p>
                <textarea id="bio" name="bio" rows="4" cols="50" onBlur={handleBioChange} />
                <p>Do you smoke?</p>
                <input type='radio' id='yes' name='smoke' value='1' onChange={(e) => {docRef.update({smoking:e.target.value})}}/>
                <label for='yes'>Yes</label>
                <input type='radio' id='no' name='smoke' value='-1' onChange={(e) => {docRef.update({smoking:e.target.value})}}/>
                <label for='no'>No</label>
                <br/>

                <p>Do you drink?</p>
                <input type='radio' id='yes' name='drink' value='1' onChange={(e) => {docRef.update({drinking:e.target.value})}}/>
                <label for='yes'>Yes</label>
                <input type='radio' id='no' name='drink' value='-1' onChange={(e) => {docRef.update({drinking:e.target.value})}}/>
                <label for='no'>No</label>
                <br/>

                <div className={classes.root}>
                    <Typography id="discrete-slider" gutterBottom>
                        How noisy are you?
                    </Typography>
                    <Slider
                        defaultValue={5}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={1}
                        max={10}
                        // onChange={(e) => {docRef.update({noise: e.value})}}
                    />
                    <br/>
                    <Typography id="cleanliness" gutterBottom>
                        How clean are you?
                    </Typography>
                    <Slider
                        defaultValue={5}
                        getAriaValueText={valuetext}
                        aria-labelledby="cleanliness"
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={1}
                        max={10}
                        // onChange={(e) => {docRef.update({cleanliness: e.target.value})}}
                    />
                    <br/>
                </div>
            </form>
        </div>
    )
}