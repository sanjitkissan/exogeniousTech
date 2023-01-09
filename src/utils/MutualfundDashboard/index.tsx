import { icici_bank_logo, pgim_logo, quant_logo } from "../.././assets/MutualfundDashBord";
import { fundCardType } from "../.././type/MutualFundDashboard";

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