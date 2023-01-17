import React from 'react'
import { TextField } from "@mui/material";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
type formikType = {
  name: string;
  pancard: string;
  pancardimage: string;
  dob: string;
  parentName: string;
  enterYourMonthlyIncome: string;
  enterYourExperiences: string;
  nomineeName:string;
  nomineePhoneNumber:string;
};

export default function NONKYCCompliantClientpersonalDetailsForm() {

    let initialValues: formikType = {
        name:"",
        pancard: "",
        pancardimage: "",
        dob: "",
        parentName: "",
        enterYourMonthlyIncome: "",
        enterYourExperiences: "",
        nomineeName:"",
        nomineePhoneNumber:""
      };
    
      const formik = useFormik({
        initialValues,
        validationSchema: Yup.object({
          name: Yup.string().required("*Name is required"),
          pancard: Yup.string().required("*PanCard number is required"),
          pancardimage: Yup.string().required("*PanCard Image is required"),
          dob: Yup.string().required("*dob is required"),
          parentName: Yup.string().required("*Parent Name is required"),
          enterYourMonthlyIncome: Yup.string().required(
            "*Monthly Income is required"
          ),
          enterYourExperiences: Yup.string().required(
            "*Investment Experience is required"
          ),
          nomineeName: Yup.string().required("*Nominee Name is required"),
          nomineePhoneNumber: Yup.string().required("*Nominee Phone Number  is required")
        }),
        onSubmit: (values: formikType, prop: FormikHelpers<formikType>) => {
          prop.resetForm();
          console.log(values);
        },
      });

  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 p-6" >
    <div className="w-full p-4 border border-gray-300 rounded flex flex-col items-center justify-center gap-2">
       <TextField
        name="name"
        type={"text"}
        className="w-full"
        placeholder="Enter Your name according to your PAN Card"
        label="Enter Your name according to your PAN Card"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(formik.touched.name && formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
         <TextField
        name="pancard"
        type={"text"}
        className="w-full"
        placeholder="Enter Your Pan Card Number"
        label="Enter Your Pan Card Number"
        value={formik.values.pancard}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(formik.touched.pancard && formik.errors.pancard)}
        helperText={formik.touched.pancard && formik.errors.pancard}
      />
      <TextField
        name="pancardimage"
        type={"file"}
        className="w-full"
        placeholder="Add your pancard Image"
        label="Enter Your Pan Card Image"
        value={formik.values.pancardimage}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(
          formik.touched.pancardimage && formik.errors.pancardimage
        )}
        helperText={formik.touched.pancardimage && formik.errors.pancardimage}
      />
       <TextField
        name="dob"
        type={"date"}
        className="w-full"
        placeholder="Enter Your DOB"
        label="Enter Your DOB"
        value={formik.values.dob}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(formik.touched.dob && formik.errors.dob)}
        helperText={formik.touched.dob && formik.errors.dob}
      />

      <TextField
        name="parentName"
        type={"text"}
        className="w-full"
        placeholder="Enter Your Parent Name"
        label="Enter Your Parent Name"
        value={formik.values.parentName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(formik.touched.parentName && formik.errors.parentName)}
        helperText={formik.touched.parentName && formik.errors.parentName}
      />
       <TextField
        name="enterYourMonthlyIncome"
        type={"text"}
        className="w-full"
        placeholder="Enter Your Monthly Income"
        label="Enter Your Monthly Income"
        value={formik.values.enterYourMonthlyIncome}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(
          formik.touched.enterYourMonthlyIncome &&
            formik.errors.enterYourMonthlyIncome
        )}
        helperText={
          formik.touched.enterYourMonthlyIncome &&
          formik.errors.enterYourMonthlyIncome
        }
      />
      <TextField
        name="enterYourExperiences"
        type={"text"}
        className="w-full"
        placeholder="Enter Your Investment Experience"
        label="Enter Your Investment Experience"
        value={formik.values.enterYourExperiences}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(
          formik.touched.enterYourExperiences &&
            formik.errors.enterYourExperiences
        )}
        helperText={
          formik.touched.enterYourExperiences &&
          formik.errors.enterYourExperiences
        }
      />
    </div>
        <div  className="w-full p-4 border border-gray-300 rounded flex flex-col items-center justify-center gap-2">
        <TextField
        name="nomineeName"
        type={"text"}
        className="w-full"
        placeholder="Enter Your Nominee name according to your PAN Card"
        label="Enter Your Nominee name according to your PAN Card"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(formik.touched.nomineeName && formik.errors.nomineeName)}
        helperText={formik.touched.nomineeName && formik.errors.nomineeName}
      />
        <TextField
        name="nomineePhoneNumber"
        type={"text"}
        className="w-full"
        placeholder="Enter Your Nominee Phone Number according to your PAN Card"
        label="Enter Your Nominee Phone Number according to your PAN Card"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(formik.touched.nomineePhoneNumber && formik.errors.nomineePhoneNumber)}
        helperText={formik.touched.nomineePhoneNumber && formik.errors.nomineePhoneNumber}
      />
        </div>
    <div className="w-full center">
      <button className="px-8 py-3 rounded-md text-white bg-blue-500" onClick={()=>formik.handleSubmit()}>
        Submit
      </button>
    </div>
  </section>
  )
}
