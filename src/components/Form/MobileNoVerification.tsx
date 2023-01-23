import React from 'react'
import TextField from '@mui/material/TextField';
import { FormikHelpers, useFormik } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";
type formikType ={
    mobileNumber:string;
    otp:string;
  }
export default function MobileNoVerification({setLogIn}:any) {
    let initialValues:formikType = {
        mobileNumber:'',
        otp:""
      }
      const formik = useFormik({
          initialValues,
          validationSchema:Yup.object({
            mobileNumber:Yup.string().min(4).max(12).required("* E-Mail is required"),
            otp: Yup.string().min(4).max(4).required("* Enter your OTP"),
        }),
        onSubmit:(values: formikType, props: FormikHelpers<formikType>)=>{
          props.resetForm();
          Swal.fire({
            title: "Submitted Successfully",
            icon: "success",
          });
          console.log(values);
          setLogIn(false)
        }
      })
  return (
    <section className='w-full flex flex-col items-center justify-center gap-4 '>
    <TextField
    type={"number"}
    name={"mobileNumber"}
    className="w-full"
    placeholder="Enter your Mobile number registered with pan and aadhar"
    value={formik.values.mobileNumber}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    error={Boolean(formik.touched.mobileNumber && formik.errors.mobileNumber)}
    helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
    fullWidth={true}
    label="Enter your mobileNumber"
    id="fullWidth"
    />
    <span className='w-full flex items-center justify-end'>
        <button className='text-white bg-blue-600 rounded-md p-1 uppercase'>get otp</button>
      </span>
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
    onClick={()=>formik.handleSubmit()}
    >proceed</button>
  </section>
  )
}
