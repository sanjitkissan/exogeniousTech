import { TextField } from "@mui/material";
import React from "react";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { boolean } from "yup/lib/locale";

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
  addNominee: string;
  address:string;
  voterId:string;
  selfieVideo:string;
  Signature:string;
};
export default function NONKYCCompliantClients() {
  let initialValues:formikType={
  email:"",
  OTP:"",
  pancard:"",
  pancardimage:"",
  dob:"",
  parentName:"",
  accountHolderName:"",
  IFSCCode:"",
  accountNumber:"",
  confirmAccountNumber:"",
  uploadYourBankPassbook:"",
  enterYourMonthlyIncome:"",
  enterYourExperiences:"",
  addNominee:"",
  address:"",
  voterId:"",
  selfieVideo:"",
  Signature:"",
  };
  const formik=useFormik({
  initialValues,
    validationSchema: Yup.object({
      email: Yup.string().email("* Enter a valid E-mail").required("*E-mail is required"),
      OTP: Yup.string().min(3).required("*OTP is required"),
      pancard: Yup.string().required("*PanCard number is required"),
      pancardimage: Yup.string().required("*PanCard Image is required"),
      dob: Yup.string().required("*dob is required"),
      parentName: Yup.string().required("*Parent Name is required"),
      accountHolderName: Yup.string().required("*Account Holder Name is required"),
      IFSCCode: Yup.string().required("*IFSC Code is required"),
      accountNumber: Yup.string().required("*Account Number is required"),
      confirmAccountNumber: Yup.string().required("*Confirm Account Number is required"),
      uploadYourBankPassbook: Yup.string().required("*Passbook Image is required"),
      enterYourMonthlyIncome: Yup.string().required("*Monthly Income is required"),
      enterYourExperiences: Yup.string().required("*Investment Experience is required"),
      addnominee: Yup.string().required("*Enter Your Nominee Name is required"),
      address: Yup.string().required("*Address is required"),
      voterId:Yup.string().required("*Voter Id is required"),
      Signature:Yup.string().required("*Signature is required"),


    }),
    onSubmit: (values:formikType, prop: FormikHelpers<formikType>) => {
      prop.resetForm();
      console.log(values);
    }
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
          label="Email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.email && formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <span className="w-full flex justify-end">
          <button className="bg-blue-500 text-white rounded-md p-2">
            Get OTP
          </button>
        </span>
        <TextField
          name="OTP"
          type={"Number"}
          className="w-full"
          placeholder="Enter Your OTP Number"
          label="OTP"
          value={formik.values.OTP}
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
          label="Pan Card Number"
          value={formik.values.pancard}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.pancard && formik.errors.pancard)}
          helperText={formik.touched.pancard && formik.errors.pancard}
        />
        <TextField
          name="pancard Image"
          type={"file"}
          className="w-full"
          placeholder="Add your pancard Image"
          label="Pan Card Image"
          value={formik.values.pancardimage}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.pancardimage && formik.errors.pancardimage)}
          helperText={formik.touched.pancardimage && formik.errors.pancardimage}

            />
      </div>
      <div className="w-full p-4 border border-gray-300 rounded flex flex-col items-center justify-center gap-4">
        <TextField
          name="dob"
          type={"date"}
          className="w-full"
          placeholder="Enter Your DOB"
          label="DOB Date"
          value={formik.values.dob}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.dob && formik.errors.dob)}
          helperText={formik.touched.dob && formik.errors.dob}
        />

        <TextField
          name="parentName"
          type={"text"}
          className="w-full"
          placeholder="Enter Your Parent Name"
          label="Parent Name"
          value={formik.values.parentName}
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
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.accountHolderName && formik.errors.accountHolderName)}
          helperText={formik.touched.accountHolderName && formik.errors.accountHolderName}
        />
        <TextField
          name="IFSCCode"
          type={"text"}
          className="w-full"
          placeholder="Bank IFSC Code"
          label="Bank IFSC Code"
          value={formik.values.IFSCCode}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.IFSCCode && formik.errors.IFSCCode)}
          helperText={formik.touched.IFSCCode && formik.errors.IFSCCode}
            
        />
        <TextField
          name="accountNumber"
          type={"number"}
          className="w-full"
          placeholder="Enter your Account Number"
          label="Account Number"
          value={formik.values.accountNumber}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.accountNumber && formik.errors.accountNumber)}
          helperText={formik.touched.accountNumber && formik.errors.accountNumber}
        />
        <TextField
          name="confirmAccountNumber"
          type={"number"}
          className="w-full"
          placeholder="Confirm your Account Number"
          label="Confirm Account Number"
          value={formik.values.confirmAccountNumber}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.confirmAccountNumber && formik.errors.confirmAccountNumber)}
          helperText={formik.touched.confirmAccountNumber && formik.errors.confirmAccountNumber}
        />
        <TextField
          name="uploadYourBankPassbook"
          type={"file"}
          className="w-full"
          placeholder="Upload your Bank Passbook photo"
          label="Upload Your Bank Passbook"
          value={formik.values.uploadYourBankPassbook}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.uploadYourBankPassbook && formik.errors.uploadYourBankPassbook)}
          helperText={formik.touched.uploadYourBankPassbook && formik.errors.uploadYourBankPassbook}
        />
      </div>
      <div className="w-full p-4 border border-gray-300 rounded flex flex-col items-center justify-center gap-4">
        <TextField
          name="enterYourMonthlyIncome"
          type={"number"}
          className="w-full"
          placeholder="Enter Your Monthly Income"
          label="Enter Your Monthly Income"
          value={formik.values.enterYourMonthlyIncome}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.enterYourMonthlyIncome && formik.errors.enterYourMonthlyIncome)}
          helperText={formik.touched.enterYourMonthlyIncome && formik.errors.enterYourMonthlyIncome}
        />
        <TextField
          name="enterYourExperiences"
          type={"number"}
          className="w-full"
          placeholder="Enter Your Investment Experience"
          label="Enter Your Investment Experience"
          value={formik.values.enterYourExperiences}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.enterYourExperiences && formik.errors.enterYourExperiences)}
          helperText={formik.touched.enterYourExperiences && formik.errors.enterYourExperiences}

        />
      </div>
      <div className="w-full p-4 border border-gray-300 rounded flex flex-col items-center justify-center gap-4">
        <TextField
          name="addNominee"
          type={"text"}
          className="w-full"
          placeholder="Enter Your Nominee Name "
          label="Enter Your Nominee Name"
          value={formik.values.addNominee}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.addNominee && formik.errors.addNominee)}
          helperText={formik.touched.addNominee && formik.errors.addNominee}
        />
      </div>
      <div className="w-full p-4 border border-gray-300 rounded flex flex-col items-center justify-center gap-4">
        <TextField
          multiline={true}
          rows="3"
          name="address"
          type={"text"}
          className="w-full"
          placeholder="Enter Your Address According to Aadhar"
          label="Enter Your Address"
          value={formik.values.address}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.address && formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />
        <TextField
          type={"file"}
          name="voterId"
          className="w-full"
          placeholder="Upload your voterId Photo"
          label="Upload your voterId Photo"
          value={formik.values.voterId}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.voterId && formik.errors.voterId)}
          helperText={formik.touched.voterId && formik.errors.voterId}
        />
      </div>
      <div className="w-full p-4 border border-gray-300 rounded flex flex-col items-center justify-center gap-4">
        <TextField
          type={"selfieVideo"}
          name="selfieVideo"
          className="w-full"
          placeholder="Upload your Selfie Video"
          label="Upload your Selfie Video"
          value={formik.values.selfieVideo}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.selfieVideo && formik.errors.selfieVideo)}
          helperText={formik.touched.selfieVideo && formik.errors.selfieVideo}
        />
      </div>
      <div className="w-full p-4 border border-gray-300 rounded flex flex-col items-center justify-center gap-4">
        <TextField
          type={"file"}
          name="Signature"
          className="w-full"
          placeholder="Upload your Signature Photo"
          label="Upload your Signature Photo"
          value={formik.values.Signature}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.Signature && formik.errors.Signature)}
          helperText={formik.touched.Signature && formik.errors.Signature}
        />
      </div>
      <div className="w-full p-4 border border-gray-300 rounded flex flex-col items-center justify-center gap-4"></div>
      <div className="w-full p-4 border border-gray-300 rounded flex flex-col items-center justify-center gap-4"></div>
      <div className="w-full center">
        <button className="px-8 py-3 rounded-md text-white bg-blue-500">
          Submit
        </button>
      </div>
    </form>
  );
}
