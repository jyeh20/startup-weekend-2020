import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Dislike () {
    return (
        <div>
            <style type="text/css">
                {`
                .btn-dislike {
                background-color: #fc7777;
                color: white;
                }

                .btn-xxl {
                padding: 1rem 1.5rem;
                font-size: 1.5rem;
                }
                `}
            </style>
            <Button variant="dislike">Dislike</Button>
        </div>
    )
}