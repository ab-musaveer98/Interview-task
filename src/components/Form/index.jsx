import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { setCourseData } from "../../redux/features/course/courseSlice";
import { useNavigate } from "react-router-dom";
const FormTemplate = () => {
  const [coursesData, setCoursesData] = useState();
  const [formattedData, setFormattedData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoursesData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setFormattedData({
      studentName: {
        firstName: coursesData?.firstName,
        midName: coursesData?.midName,
        lastName: coursesData?.lastName,
      },
      birthDate: {
        month: coursesData?.month,
        day: coursesData?.day,
        year: coursesData?.year,
      },
      gender: coursesData?.gender,
      address: {
        street_address_01: coursesData?.street_address_01,
        street_address_02: coursesData?.street_address_02,
        city: coursesData?.city,
        state: coursesData?.state,
        zipCode: coursesData?.zipCode,
      },
      studentEmail: coursesData?.studentEmail,
      mobileNumber: coursesData?.mobileNumber,
      phoneNumber: coursesData?.phoneNumber,
      workNumber: coursesData?.workNumber,
      company: coursesData?.company,
      courses: coursesData?.courses,
      additionalComments: coursesData?.additionalComments,
    });
  }, [coursesData]);
  return (
    <div
      className="form_container"
      style={{
        maxWidth: "75%",
        boxShadow: "0 0 2px 0 black",
        margin: "50px auto 0",
        padding: "20px",
      }}
    >
      <div style={{ borderBottom: "2px solid black" }}>
        <h3>Registration Form</h3>
        Fill out the form carefully for registration
      </div>
      <form>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Student Name</Form.Label>
            <Form.Control
              name="firstName"
              value={coursesData?.firstName}
              onChange={handleChange}
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Label className="mt-2">First Name</Form.Label>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>&nbsp;</Form.Label>
            <Form.Control
              name="midName"
              value={coursesData?.midName}
              onChange={handleChange}
              type="text"
              placeholder="Middle name"
              defaultValue="Mark"
            />
            <Form.Label className="mt-2">Middle Name</Form.Label>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>&nbsp;</Form.Label>
            <Form.Control
              name="lastName"
              value={coursesData?.lastName}
              onChange={handleChange}
              type="text"
              placeholder="Last name"
              defaultValue="Mark"
            />
            <Form.Label className="mt-2">Last name</Form.Label>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Col>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Birth Date</Form.Label>
                <Form.Select
                  name="month"
                  value={coursesData?.month}
                  onChange={handleChange}
                  aria-label="Default select example"
                >
                  <option>Month</option>
                  {new Array(12).fill("*")?.map((month, index) => {
                    return <option value={index + 1}>{index}</option>;
                  })}

                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Label className="mt-2">Month</Form.Label>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>&nbsp;</Form.Label>
                <Form.Select
                  name="day"
                  value={coursesData?.day}
                  onChange={handleChange}
                  aria-label="Default select example"
                >
                  <option>Day</option>
                  {new Array(31).fill("*")?.map((month, index) => {
                    return <option value={index + 1}>{index}</option>;
                  })}
                </Form.Select>
                <Form.Label className="mt-2">Day</Form.Label>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>&nbsp;</Form.Label>
                <Form.Select
                  name="year"
                  value={coursesData?.year}
                  onChange={handleChange}
                  aria-label="Default select example"
                >
                  <option>Open this select menu</option>
                  {new Array(31).fill("*")?.map((month, index) => {
                    return <option value={index + 1}>{index + 1}</option>;
                  })}
                </Form.Select>
                <Form.Label className="mt-2">Year</Form.Label>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
          </Col>
          <Col>
            <Form.Group controlId="validationCustom01">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                name="gender"
                value={coursesData?.gender}
                onChange={handleChange}
                aria-label="Default select example"
              >
                <option>Please Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Select>
              <Form.Label className="mt-2">&nbsp;</Form.Label>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Address</Form.Label>
            <Form.Control
              name="street_address_01"
              value={coursesData?.street_address_01}
              onChange={handleChange}
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Label className="mt-2">Street Address</Form.Label>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>&nbsp;</Form.Label>
            <Form.Control
              name="street_address_02"
              value={coursesData?.street_address_02}
              onChange={handleChange}
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Label className="mt-2">Street Address Line 2</Form.Label>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>&nbsp;</Form.Label>
            <Form.Control
              name="city"
              value={coursesData?.city}
              onChange={handleChange}
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Label className="mt-2">City</Form.Label>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>&nbsp;</Form.Label>
            <Form.Control
              name="state"
              value={coursesData?.state}
              onChange={handleChange}
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Label className="mt-2">State / Province</Form.Label>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>&nbsp;</Form.Label>
            <Form.Control
              name="zipCode"
              value={coursesData?.zipCode}
              onChange={handleChange}
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Label className="mt-2">Postal / Zip Code</Form.Label>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3" g={10}>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Student E-mail</Form.Label>
            <Form.Control
              name="studentEmail"
              value={coursesData?.studentEmail}
              onChange={handleChange}
              type="email"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              name="mobileNumber"
              value={coursesData?.mobileNumber}
              onChange={handleChange}
              type="phone"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              name="phoneNumber"
              value={coursesData?.phoneNumber}
              onChange={handleChange}
              type="phone"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Work Number</Form.Label>
            <Form.Control
              name="workNumber"
              value={coursesData?.workNumber}
              onChange={handleChange}
              type="phone"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Company</Form.Label>
            <Form.Control
              name="company"
              value={coursesData?.company}
              onChange={handleChange}
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Courses</Form.Label>
            <Form.Select
              name="courses"
              value={coursesData?.courses}
              onChange={handleChange}
              aria-label="Default select example"
            >
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>

            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Additional Comments</Form.Label>
            <Form.Control
              name="additionalComments"
              value={coursesData?.additionalComments}
              onChange={handleChange}
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <div className="d-flex mt-2 justify-content-center align-items-center">
          <Button
            variant="primary"
            onClick={() => {
              dispatch(setCourseData(formattedData));
              navigate("/record");
            }}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormTemplate;
