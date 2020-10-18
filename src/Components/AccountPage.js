import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as Yup from 'yup';
import firebase from '../firebase';

let db = firebase.firestore();

export default function AccountPage () {

    // Reference to unique Accounts
    const identifier = window.location.pathname.slice(1);
    let docRef = db.collection('user-tests').doc("WABWG");

    // temporary variables
    let tempFirstName = null;
    let tempLastName = null;
    let tempSmoking = null;
    let tempDrinking = null;
    let tempNoise = null;
    let tempParkingSpot = null;
    let tempCleanliness = null;
    let tempCook = null;
    let tempDrugs = null;
    let tempPeopleOver = null;
    let tempClothes = null;
    let tempUtilities = null;

    useEffect(() => (
        docRef.get().then(function(doc) {
            if (doc.exists) {
                tempFirstName = doc.data().firstName;
                console.log(tempFirstName)
                tempLastName = doc.data().lastName;
                tempSmoking = doc.data().smoking;
                tempDrinking = doc.data().drinking;
                tempNoise =  doc.data().noise;
                tempParkingSpot = doc.data().parkingSpot;
                tempCleanliness = doc.data().cleanliness;
                tempCook = doc.data().cook;
                tempDrugs = doc.data().drugs;
                tempPeopleOver = doc.data().people_over;
                tempClothes = doc.data().clothes;
                tempUtilities = doc.data().utilities;
            }
            else {
                console.log("No such doc");
            }
    }).catch(function(error) {
        console.log("Error", error);
    })),
    [])

    const formik = useFormik({
        initialValues:
        {
            firstName: docRef.get().then(function(doc) {
                if(doc.exists) {
                    return doc.data().firstName
                } else {
                    console.log("error")
                }
            }).catch(function(error) {
                console.log("error", error);
            }),
            lastName: tempLastName,
            smoking: tempSmoking,
            drinking: tempDrinking,
            noise: tempNoise,
            parkingSpot: tempParkingSpot,
            cleanliness: tempCleanliness,
            cook: tempCook,
            drugs: tempDrugs,
            people_over: tempPeopleOver,
            clothes: tempClothes,
            utilities: tempUtilities,
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
              .min(2, "Mininum 2 characters")
              .max(20, "Maximum 15 characters")
              .required("Required!"),
            lastName: Yup.string()
              .min(2, "Mininum 2 characters")
              .max(20, "Maximum 15 characters")
              .required("Required!"),
            email: Yup.string()
              .email("Invalid email format")
              .required("Required!"),
            location: Yup.string()
              .min(2, "Minimum 2 characters")
              .required("Required!"),
          }),
        onSubmit: values => {
            console.log(values)
            db.collection("user-tests").doc(identifier).update(
                values
            )
          }
        });


    // get User ID from firebase


    // handlers
    function handleFirstnameChange () {
        db.collection('users-tests').doc(identifier)
    }

    console.log(formik.values)
    return (
        <div className="App">
            <h1>shit</h1>

            <form onSubmit={formik.handleSubmit}>
                <div>
                    <TextField
                        label='First Name'
                        variant='outlined'
                        type="text"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={handleFirstnameChange}
                    />
                    {formik.errors.firstName && formik.touched.firstName && (
                        <p>{formik.errors.firstName}</p>
                    )}
                </div>
                <br/>

                <div>
                    <TextField
                        label='Last Name'
                        variant='outlined'
                        type="text"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.lastName && formik.touched.lastName && (
                        <p>{formik.errors.lastName}</p>
                    )}
                </div>
                <br/>

                <div>
                    <TextField
                        label="Email"
                        variant='outlined'
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email && (
                        <p>{formik.errors.email}</p>
                    )}
                </div>
                <br/>

                <div>
                    <TextField
                        label='Location'
                        variant='outlined'
                        type="text"
                        name="location"
                        value={formik.values.location}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.location && formik.touched.location && (
                        <p>{formik.errors.location}</p>
                    )}
                </div>
                <br/>

                <div>
                    <Button type="submit" variant='contained' color='primary'>Submit</Button>
                </div>
            </form>
        </div>
      );
}