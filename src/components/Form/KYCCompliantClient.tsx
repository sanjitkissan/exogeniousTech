import { TextField } from "@mui/material";
import React from "react";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";


type formikType = {
  email: string;
  OTP: string;
  pancard: string;
  pancardimage: string;
  dob: string;
  parentName: string;
  accountHolderName: string;
  IFSCCode: string;
  accountNumber: string;
  confirmAccountNumber: string;
  uploadYourBankPassbook: string;
  enterYourMonthlyIncome: string;
  enterYourExperiences: string;
};

export default function KYCCompliantClient() {
  let initialValues: formikType = {
    email: "",
    OTP: "",
    pancard: "",
    pancardimage: "",
    dob: "",
    parentName: "",
    accountHolderName: "",
    IFSCCode: "",
    accountNumber: "",
    confirmAccountNumber: "",
    uploadYourBankPassbook: "",
    enterYourMonthlyIncome: "",
    enterYourExperiences: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("* Enter a valid E-mail")
        .required("*E-mail is required"),
      OTP: Yup.string().min(3).required("*OTP is required"),
      pancard: Yup.string().required("*PanCard number is required"),
      pancardimage: Yup.string().required("*PanCard Image is required"),
      dob: Yup.string().required("*dob is required"),
      parentName: Yup.string().required("*Parent Name is required"),
      accountHolderName: Yup.string().required(
        "*Account Holder Name is required"
      ),
      IFSCCode: Yup.string().required("*IFSC Code is required"),
      accountNumber: Yup.string().required("*Account Number is required"),
      confirmAccountNumber: Yup.string().required(
        "*Confirm Account Number is required"
      ),
      uploadYourBankPassbook: Yup.string().required(
        "*Passbook Image is required"
      ),
      enterYourMonthlyIncome: Yup.string().required(
        "*Monthly Income is required"
      ),
      enterYourExperiences: Yup.string().required(
        "*Investment Experience is required"
      ),
    }),
    onSubmit: (values: formikType, prop: FormikHelpers<formikType>) => {
      prop.resetForm();
      console.log(values);
    },
  });

  return (
    <form className="w-full flex flex-col items-center justify-center gap-4 p-6"
    onSubmit={()=>formik.handleSubmit()}
    >
      {/* <div className="w-full p-4 border border-gray-300 rounded flex flex-col items-center justify-center gap-2">
        <TextField
          name="email"
          type={"email"}
          className="w-full"
          placeholder="Enter Your Email"
          label="Enter Your Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.email && formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <span className="w-full flex justify-end">
          <button
            className="bg-blue-500 text-white rounded-md p-2"
            type="submit"
          >
            Get OTP
          </button>
        </span>
        <TextField
          name="OTP"
          type={"text"}
          className="w-full"
          placeholder="Enter Your OTP Number"
          label="Enter Your OTP Number"
          value={formik.values.OTP}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.OTP && formik.errors.OTP)}
          helperText={formik.touched.OTP && formik.errors.OTP}
        />
      </div> */}
      <div className="w-full p-4 border border-gray-300 rounded flex flex-col items-center justify-center gap-4">
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
      </div>
      <div className="w-full p-4 border border-gray-300 rounded flex flex-col items-center justify-center gap-4">
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
      </div>
      <div className="w-full p-4 border border-gray-300 rounded flex flex-col items-center justify-center gap-4">
        <TextField
          name="accountHolderName"
          type={"text"}
          className="w-full"
          placeholder="Account Holder Name"
          label="Account Holder Name"
          value={formik.values.accountHolderName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(
            formik.touched.accountHolderName && formik.errors.accountHolderName
          )}
          helperText={
            formik.touched.accountHolderName && formik.errors.accountHolderName
          }
        />
        <TextField
          name="IFSCCode"
          type={"text"}
          className="w-full"
          placeholder="Bank IFSC Code"
          label="Bank IFSC Code"
          value={formik.values.IFSCCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.IFSCCode && formik.errors.IFSCCode)}
          helperText={formik.touched.IFSCCode && formik.errors.IFSCCode}
        />
        <TextField
          name="accountNumber"
          type={"text"}
          className="w-full"
          placeholder="Enter your Account Number"
          label="Account Number"
          value={formik.values.accountNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(
            formik.touched.accountNumber && formik.errors.accountNumber
          )}
          helperText={
            formik.touched.accountNumber && formik.errors.accountNumber
          }
        />
        <TextField
          name="confirmAccountNumber"
          type={"number"}
          className="w-full"
          placeholder="Confirm your Account Number"
          label="Confirm Account Number"
          value={formik.values.confirmAccountNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(
            formik.touched.confirmAccountNumber &&
              formik.errors.confirmAccountNumber
          )}
          helperText={
            formik.touched.confirmAccountNumber &&
            formik.errors.confirmAccountNumber
          }
        />
        <TextField
          name="uploadYourBankPassbook"
          type={"file"}
          className="w-full"
          placeholder="Upload your Bank Passbook photo"
          label="Upload Your Bank Passbook"
          value={formik.values.uploadYourBankPassbook}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(
            formik.touched.uploadYourBankPassbook &&
              formik.errors.uploadYourBankPassbook
          )}
          helperText={
            formik.touched.uploadYourBankPassbook &&
            formik.errors.uploadYourBankPassbook
          }
        />
      </div>
      <div className="w-full p-4 border border-gray-300 rounded flex flex-col items-center justify-center gap-4">
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
      <div className="w-full center">
        <button className="px-8 py-3 rounded-md text-white bg-blue-500">
          Submit
        </button>
      </div>
    </form>
  );
}
