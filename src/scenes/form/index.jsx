import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRegex =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegex, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

function Form() {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box m='20px'>
      <Header title='CREATE USER' subtitle='Create a New User Profile' />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display='grid'
              gap='30px'
              gridTemplateColumns='repeat(4, minmax(0, 1fr))'
              sx={{
                "& > div": {
                  gridColumn: !isNonMobile && "span 4",
                },
              }}
            >
              <TextField
                fullWidth
                variant='filled'
                type='text'
                name='firstName'
                label='First Name'
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{gridColumn: "span 2"}}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                name='lastName'
                label='Last Name'
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{gridColumn: "span 2"}}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                name='email'
                label='Email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{gridColumn: "span 4"}}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                name='contact'
                label='Contact'
                value={values.contact}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{gridColumn: "span 4"}}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                name='address1'
                label='Address 1'
                value={values.address1}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{gridColumn: "span 4"}}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                name='address2'
                label='Address 2'
                value={values.address2}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{gridColumn: "span 4"}}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">Create New User</Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default Form;
