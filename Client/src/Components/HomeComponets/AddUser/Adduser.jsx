import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
} from 'mdb-react-ui-kit';
import { useFormik } from 'formik';
import './Adduser.css';
import { userSchema } from '../../../validation/validation';
import { addEmployee } from '../../../axios/Service/HomeService';
import swal from 'sweetalert';
function Adduser() {
  const [error, setError] = useState(false);
  const onSubmit = async (values, actions) => {
    const status = await addEmployee(values);
    console.log(status);
    if (status) {
      swal({
        title: 'Employee Added Successfully!',
        text: 'You clicked the button!',
        icon: 'success',
        button: 'Aww yiss!',
      });
      actions.resetForm();
    } else {
      setError(status.Message);
    }
  };
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: '',
      jobtitle: '',
      email: '',
      phone: '',
      education: '',
      experience: '',
    },
    validationSchema: userSchema,
    onSubmit,
  });
  return (
    <div>
      <MDBContainer fluid>
        <MDBRow className="fide d-flex justify-content-center align-items-center">
          <MDBCol lg="9" className="my-5">
            <h1 className="text-white mb-4">Add Employee Details</h1>
            <form onSubmit={handleSubmit}>
              <MDBCard>
                <p>{error ? error : ''}</p>
                <MDBCardBody className="px-4">
                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="3" className="ps-5">
                      <h6 className="mb-0">Full Name</h6>
                    </MDBCol>

                    <MDBCol md="9" className="pe-5">
                      <MDBInput
                        label={
                          errors.name &&
                          touched.name && (
                            <p className="red-error">{errors.name}</p>
                          )
                        }
                        size="lg"
                        id="name"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.name && touched.name ? 'input-error' : ''
                        }
                      />
                    </MDBCol>
                  </MDBRow>

                  <hr className="mx-n3" />

                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="3" className="ps-5">
                      <h6 className="mb-0"> Job Title</h6>
                    </MDBCol>

                    <MDBCol md="9" className="pe-5">
                      <MDBInput
                        label={
                          errors.jobtitle &&
                          touched.jobtitle && (
                            <p className="red-error">{errors.jobtitle}</p>
                          )
                        }
                        size="lg"
                        id="jobtitle"
                        type=""
                        value={values.jobtitle}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </MDBCol>
                  </MDBRow>

                  <hr className="mx-n3" />
                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="3" className="ps-5">
                      <h6 className="mb-0">Email Address</h6>
                    </MDBCol>

                    <MDBCol md="9" className="pe-5">
                      <MDBInput
                        label="example@example.com"
                        size="lg"
                        id="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email && (
                        <p className="red-error">{errors.email}</p>
                      )}
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
                        id="phone"
                        type="text"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.phone && touched.phone && (
                        <p className="red-error">{errors.phone}</p>
                      )}
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
                        id="education"
                        type="text"
                        value={values.education}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.education && touched.education && (
                        <p className="red-error">{errors.education}</p>
                      )}
                    </MDBCol>
                  </MDBRow>

                  <hr className="mx-n3" />
                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="3" className="ps-5">
                      <h6 className="mb-0">Work Experience</h6>
                    </MDBCol>

                    <MDBCol md="9" className="pe-5">
                      <MDBTextArea
                        label="Company name (2021-2022)"
                        id="experience"
                        rows={3}
                        value={values.experience}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.experience && touched.experience && (
                        <p className="red-error">{errors.experience}</p>
                      )}
                    </MDBCol>
                  </MDBRow>

                  <hr className="mx-n3" />
                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="9"></MDBCol>
                    <MDBCol md="3">
                      <MDBBtn className="my-4" size="lg">
                        Upload
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Adduser;
