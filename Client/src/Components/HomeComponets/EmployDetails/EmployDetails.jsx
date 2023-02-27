/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllEmployeById } from '../../../axios/Service/HomeService';

import './EmployDetails.css'
function EmployDetails() {
    const {Id}=useParams();
    const [details, SetDetails] = useState(false);

    async function fetchData() {

        const data = await getAllEmployeById(Id);
        SetDetails(data.response);
    }
    console.log(details);
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
       { details?(<section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-lg-7 mb-4 mb-lg-0">
          <div class="card mb-3" style={{borderRadius: ".5rem"}}>
            <div class="row g-0">
              <div class="col-md-4 gradient-custom text-center text-white"
                style={{borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem"}}>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                  alt="Avatar" class="img-fluid my-5" style={{width: "80px"}} />
                <h5>{details.name}</h5>
                <p>{details.jobtitle}</p>
                <i class="far fa-edit mb-5"></i>
              </div>
              <div class="col-md-8">
                <div class="card-body p-4">
                  <h6>Information</h6>
                  <hr class="mt-0 mb-4"/>
                  <div class="row pt-1">
                    <div class="col-6 mb-3">
                      <h6>Email</h6>
                      <p class="text-muted">{details.email}</p>
                    </div>
                    <div class="col-6 mb-3">
                      <h6>Phone</h6>
                      <p class="text-muted">+91 {details.phone}</p>
                    </div>
                  </div>
                  <h6>Education</h6>
                  <hr class="mt-0 mb-4"/>
                  <div class="row pt-1">
                    <div class="col-12 mb-3">
                      <p>{details.education}</p>
                      {/* <p class="text-muted">Lorem ipsum</p> */}
                    </div>
                   
                  </div>
                  <h6>Work Experience</h6>
                  <hr class="mt-0 mb-4"/>
                  <div class="row pt-1">
                    <div class="col-6 mb-3">
                      <h6>Recent</h6>
                      <p class="text-muted">{details.experience}</p>
                    </div>
                    {/* <div class="col-6 mb-3">
                      <h6>Most Viewed</h6>
                      <p class="text-muted">Dolor sit amet</p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>):''}</div>
  )
}

export default EmployDetails