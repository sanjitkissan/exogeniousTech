import React from 'react'
import TextField from '@mui/material/TextField';
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

type formikType ={
  email:string;
  otp:string;
}
export default function SignUpForm({setIsSignUp}:any) {

  let initialValues:formikType = {
    email:'',
    otp:""
  }
  const formik = useFormik({
      initialValues,
      validationSchema:Yup.object({
      email: Yup.string()
        .email("* Enter a valid E-mail")
        .required("* E-Mail is required"),
        otp: Yup.string().min(4).max(4).required("* Enter your OTP"),
    }),
    onSubmit:(values: formikType, props: FormikHelpers<formikType>)=>{
      props.resetForm();
     
      console.log(values);
      setIsSignUp(true)
    }
  })

  return (
    <form className='w-full flex flex-col items-center justify-center gap-6 '
    onSubmit={()=>formik.handleSubmit()}
    >
      <TextField
      type={"email"}
      name={"email"}
      className="w-full"
      placeholder="Enter your Email"
      value={formik.values.email}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={Boolean(formik.touched.email && formik.errors.email)}
      helperText={formik.touched.email && formik.errors.email}
      fullWidth={true}
      label="Enter your email"
      id="fullWidth"
      />
      <TextField
      type={"number"}
      name={"otp"}
      className="w-full"
      placeholder='enter your OTP'
      value={formik.values.otp}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={Boolean(formik.touched.otp && formik.errors.otp)}
      helperText={formik.touched.otp && formik.errors.otp}
      fullWidth={true}
      label="Enter your OTP"
      id="fullWidth"
      />
      <button
      type="submit"
      className={`$ ${
          formik.isValid ? "bg-gradient-to-r from-blue-500 to-red-500" : "bg-gray-400"
        }  px-8 py-3 text-white text-xl font-extrabold rounded bg-gradient-to-r fr0m from-blue-600 to-red-600`}
      
      >proceed</button>
    </form>
  )
}
