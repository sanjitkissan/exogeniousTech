import React,{useState} from 'react'
import { Dialog } from "@mui/material";
import SignUpForm from 'components/Form/SignUpForm';
import CloseIcon from '@mui/icons-material/Close';
import MobileNoVerification from 'components/Form/MobileNoVerification';
type a ={
    prop:any
}
export default function LoginPage() {
    const [logIn, setLogIn]=useState<boolean>(true)
    const [isSignUp, setIsSignUp] = useState<any>(false)
  return (
    <section className='w-full'>
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={logIn}
        scroll="body"
        onClose={() => {
          setLogIn(false);
        }}
        className="w-full"
      >
        {
            !isSignUp ? (<>    
        <div className='w-full flex flex-col items-center justify-center gap-6 p-4 rounded-md pt-10 relative'>
            <CloseIcon className='absolute top-1 right-1 cursor-pointer !font-extrabold' onClick={()=>setLogIn(false)}/>
            <h1 className='capitalize w-full text-center text-3xl font-extrabold'>welcome to bullSmart</h1>
            <SignUpForm/>
            <span className='center w-full p-3 gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md'>
                <img src="https://blog.hubspot.com/hubfs/image8-2.jpg" alt="" className='w-8 h-8 object-cover rounded-full' />
                <h1 className='capitalize text-lg font-bold'>continue with google</h1>
            </span>
            <h1 className='w-full text-center text-xl font-normal capitalize'>or</h1>
        </div>
            </>):(<>    
        <div className='w-full center h-64'>
            <MobileNoVerification open={setIsSignUp} isSignUp={isSignUp}/>
        </div>
            </>)
        }
      </Dialog>
    </section>
  )
}
