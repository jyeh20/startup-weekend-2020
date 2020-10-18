import React from 'react';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as Yup from 'yup';
import firebase from '../firebase';

let db = firebase.firestore();

export default function FirstUser () {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            location: '',
            ID: newID(),
            smoking: null,
            drinking: null,
            noise: null,
            car: null,
            cleanliness: null,
            cook: null,
            drugs: null,
            people_over: null,
            clothes: null,
            utilities: null
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
            db.collection("user-tests").doc(formik.values.ID).set(
                values
            )
          }
        });

    // new ID for searching to make editing easier
    function newID() {
        const db = firebase.database();
        let ref = db.ref("events");
        let newPostRef = ref.push();
        let newID = newPostRef.key.slice(9, 14);
        return newID;
        }

    // handlers
    function handleFirstnameChange () {
        db.collection('users-tests').doc()
    }

    return (
        <div className="App">
            <h1>Registration</h1>

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