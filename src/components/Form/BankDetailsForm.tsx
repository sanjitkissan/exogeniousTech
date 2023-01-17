import React from 'react'
import { TextField } from "@mui/material";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
type formikType = {
   
    accountHolderName: string;
    IFSCCode: string;
    accountNumber: string;
    confirmAccountNumber: string;
    uploadYourBankPassbook: string;
   
  };

export default function BankDetailsForm() {

    let initialValues: formikType = {
       
        accountHolderName: "",
        IFSCCode: "",
        accountNumber: "",
        confirmAccountNumber: "",
        uploadYourBankPassbook: "",
      };

      const formik = useFormik({
        initialValues,
        validationSchema: Yup.object({
          
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
      
        }),
        onSubmit: (values: formikType, prop: FormikHelpers<formikType>) => {
          prop.resetForm();
          console.log(values);
        },
      });

  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 p-6">
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
    </section>
  )
}
