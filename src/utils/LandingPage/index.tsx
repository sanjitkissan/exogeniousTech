import { learn1_img, learn2_img, learn3_img, review_img1, review_img2, review_img3 } from "../.././assets/MutualFundLandingPage";
import { learnArrType, reviewArrType } from "../.././type/LandingPage";

export const learnArr:learnArrType[]=[
    {
        id:1,
        title:"How to select/Pick Mutual Funds.",
        img: learn1_img
    },
    {
        id:2,
        title:"Beginner Card to Mutual Funds.",
        img: learn2_img
    },
    {
        id:3,
        title:"How to Diversify in the Time of Market Volatility.",
        img: learn3_img
    },
]

export const reviewArr:reviewArrType[]=[
    {
        id:1,
        img: review_img1,
        description:"BullSmart.in was the platform where I first got onboard to MF and I would have to say, even for a beginner like me it made things quite easier to explore and invest. BullSmart actually helped me make better-informed decisions.",
        name:"ankit puri",
        designation:"product specialist, google"
    },
    {
        id:2,
        img:review_img2,
        description:"Actually, the UI is extremely simple and easy for users to adapt, that’s what makes it unique. Many of my referrals have also joined and enjoying BullSmart. Keep doing a good job.",
        name:"amit sharma",
        designation:"Principal Solutions Architect, Amazon Web Services"
    },
    {
        id:3,
        img: review_img3,
        description:"If you are one of those who would like to take control of how you save, use BullSmart. It’s ridiculously easy portal. It took me 5 mins to set up and 10 mins to find the funds that suited my need and invest.",
        name:"roopa ambekar",
        designation:"Founder of Uber Medspa & Style Lounge"
    },
]