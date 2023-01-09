import { icici_bank_logo, pgim_logo, quant_logo } from "../../assets/MutualfundDashBord/PopularFund";
import { collectionArrayType, fundCardType, heroArrType, quickAccessArrayType } from "../.././type/MutualFundDashboard";
import { High_Return, Large_Cap, Mid_Cap, Sip_With, Small_Cap, Tax_saving } from "../.././assets/MutualfundDashBord/Collection";
import { NewOnMf, Sip } from "../.././assets/MutualfundDashBord/Hero";
import PublishIcon from '@mui/icons-material/Publish';
import GavelIcon from '@mui/icons-material/Gavel';
import CompareIcon from '@mui/icons-material/Compare';
import CalculateIcon from '@mui/icons-material/Calculate';

export const fundCardArr:fundCardType[] = [
    {
        id:1,
        title: "Quant Small Cap Fund Direct Plan Growth",
        growth:"56.0 %",
        year:"(3Y)",
        logo: quant_logo,
    },
    {
        id:2,
        title: "ICICI Prudential Technology Direct Plan Growth",
        growth:"31.8 %",
        year:"(3Y)",
        logo: icici_bank_logo,
    }
    ,
    {
        id:3,
        title: "ICICI Prudential Commodities Fund Direct Growth",
        growth:"41.7 %",
        year:"(3Y)",
        logo: icici_bank_logo,
    },
    {
        id:4,
        title: "PGIM India Midcap Opportunities Fund Direct Growth",
        growth:"36.5 %",
        year:"(3Y)",
        logo: pgim_logo,
    },
]

export const collectionArr:collectionArrayType[] = [
    {
        id:1,
        title:"high return",
        img:High_Return
    },
    {
        id:2,
        title:"sip with 500/-",
        img: Sip_With
    },
    {
        id:3,
        title:"tax saving",
        img: Tax_saving
    },
    {
        id:4,
        title:"large cap",
        img: Large_Cap
    },
    {
        id:5,
        title:"mid cap",
        img: Mid_Cap
    },
    {
        id:6,
        title:"small cap",
        img: Small_Cap
    },
]

export const heroCardArr:heroArrType[] = [
    {
        id:1,
        img:NewOnMf, 
        title:"New to Mutual Funds ?",
        description:"Start exploring mutual funds to begin your investment journey ",
        button:"explore mutual funds"
   },
    {
        id:2,
        img: Sip , 
        title:"Have a SIP!",
        description:"Start and manage monthly investment on Grow simple and fast ",
        button:"start a sip"
   },
]


export const quickAccessArr:quickAccessArrayType[] = [
    {
        id:1,
        icon:<PublishIcon className="!rotate-180 !text-2xl"/>,
        title:"Import funds"
    },
    {
        id:2,
        icon:<GavelIcon className=" !text-2xl"/>,
        title:"New fund Offering"
    },
    {
        id:3,
        icon:<CompareIcon className=" !text-2xl"/>,
        title:"Compare fund "
    },
    {
        id:4,
        icon:<CalculateIcon className=" !text-2xl"/>,
        title:"SIP Calculator "
    },
]