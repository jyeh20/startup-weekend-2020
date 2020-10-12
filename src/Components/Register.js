import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

export default function Register() {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    return (
        <Button variant="contained" color="primary">
            Submit
        </Button>
    )
}