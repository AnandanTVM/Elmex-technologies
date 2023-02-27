import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';
import DataTable from 'react-data-table-component';
import { getAllEmploye } from '../../../axios/Service/HomeService';
function EmployTable() {

    const navigate = useNavigate();
    const [details, SetDetails] = useState();

    async function fetchData() {

        const data = await getAllEmploye();
        SetDetails(data.response);
    }
    const columns = [
        {
            name: 'Name',
            selector: (row) => {
                return (
                    <div>

                        <label

                            onClick={() => {
                                navigate(`/employeDetails/${row._id}`)
                            }}
                        >
                            {row.name}
                        </label>
                    </div>
                );
            }
        },
        {
            name: 'Job Title',
            selector: (row) => row.jobtitle,
        },
        {
            name: 'Email',
            selector: (row) => row.email,
        },


    ];
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <MDBContainer fluid>

                <MDBRow className="  fide d-flex justify-content-center align-items-center">
                    <MDBCol lg="10" className="my-5">
                        <h1 className="text-white mb-4">Add Employee Details</h1>
                        <DataTable
                            columns={columns}
                            data={details}
                            fixedHeader
                            fixedHeaderScrollHeight="500px"
                            selectableRows
                            selectableRowsHighlight
                            highlightOnHover
                            pagination
                        />

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default EmployTable