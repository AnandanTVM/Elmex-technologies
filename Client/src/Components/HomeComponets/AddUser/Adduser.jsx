import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
  MDBFile,
} from 'mdb-react-ui-kit';
import './Adduser.css';
function Adduser() {
  return (
    <div>
      <MDBContainer fluid>
        <MDBRow className="fide d-flex justify-content-center align-items-center">
          <MDBCol lg="9" className="my-5">
            <h1 class="text-white mb-4">Apply for a job</h1>

            <MDBCard>
              <MDBCardBody className="px-4">
                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Full name</h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBInput label="" size="lg" id="form1" type="text" />
                  </MDBCol>
                </MDBRow>

                <hr className="mx-n3" />

                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0"> job title</h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="
                    "
                      size="lg"
                      id="form2"
                      type=""
                    />
                  </MDBCol>
                </MDBRow>

                <hr className="mx-n3" />
                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Email address</h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="example@example.com"
                      size="lg"
                      id="form2"
                      type="email"
                    />
                  </MDBCol>
                </MDBRow>

                <hr className="mx-n3" />
                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Contact Number</h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="ecample +91 9*****8410"
                      size="lg"
                      id="form2"
                      type=""
                    />
                  </MDBCol>
                </MDBRow>

                <hr className="mx-n3" />
                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Education</h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      label="example Bsc computer"
                      size="lg"
                      id="form2"
                      type="email"
                    />
                  </MDBCol>
                </MDBRow>

                <hr className="mx-n3" />
                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Work experience</h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBTextArea
                      label="Company name (2021-2022)"
                      id="textAreaExample"
                      rows={3}
                    />
                  </MDBCol>
                </MDBRow>

                <hr className="mx-n3" />

                <MDBBtn className="my-4" size="lg">
                  Upload
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Adduser;
