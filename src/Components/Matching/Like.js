import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Like () {
    return (
        <div>
            <style type="text/css">
                {`
                .btn-like {
                background-color: #8df57d;
                color: white;
                }

                .btn-xxl {
                padding: 1rem 1.5rem;
                font-size: 1.5rem;
                }
                `}
            </style>
            <Button variant="like">Like</Button>
        </div>
    )
}