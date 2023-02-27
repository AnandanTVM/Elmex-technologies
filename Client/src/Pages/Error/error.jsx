import React from 'react'
import {
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';
function error() {
    return (
        <div>
            <MDBRow className="  fide d-flex justify-content-center align-items-center">
                <MDBCol lg="10" className="my-5">
                    <h1 className="text-white mb-4">404 Not Found..</h1>
                </MDBCol>
            </MDBRow>
        </div>
    )
}

export default error