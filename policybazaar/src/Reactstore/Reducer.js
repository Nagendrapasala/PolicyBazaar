import React from 'react'
import hdfc from "../Components/Product_page/data/HDFC_Life_logo.webp"
import icici from "../Components/Product_page/data/ICICI_logo.webp"
import max from "../Components/Product_page/data/MAX_logo.png"
import tata from "../Components/Product_page/data/TATA_AIA_logo (1).png"
let data = {
    user_details:{},
    user_health_insurance:{
      self:true,
      spouse:false,
      son:false,
      doughter:true,
      father:true,
      mother:false

  },
Term_Life_Insurance:[
  {
insurer:{ image:hdfc,
      name:"HDFC Life" },
life_cover: "50",
cover_till_age:{ max_age:"60" ,
          max_limit:"99" ,
          cover_term:"33" ,},
premium:"599" ,
clim_settled:97.9,
offers:[ "Waiver of Premium Cover","100% payout on Terminal illness","Extra Payout on Accidental death","Cover against 34 critical illnesses"],
},
{
  insurer:{ image:icici,
          name:"ICICI" },
  life_cover: "55",
  cover_till_age:{ max_age:"70" ,
              max_limit:"99" ,
              cover_term:"33" ,},
  premium:"899" ,
  clim_settled:98.9,
  offers:[ "Waiver of Premium Cover","100% payout on Terminal illness","Extra Payout on Accidental death","Cover against 34 critical illnesses"],
  },
  {
          insurer:{ image:max,
                  name:"MAX Life" },
          life_cover: "50",
          cover_till_age:{ max_age:"60" ,
                      max_limit:"99" ,
                      cover_term:"33" ,},
          premium:"455" ,
          clim_settled:96,
          offers:[ "Waiver of Premium Cover","100% payout on Terminal illness","Extra Payout on Accidental death","Cover against 34 critical illnesses"],
          },
          {
                  insurer:{ image:tata,
                          name:"TATA AIA" },
                  life_cover: "60",
                  cover_till_age:{ max_age:"70" ,
                              max_limit:"99" ,
                              cover_term:"33" ,},
                  premium:"698" ,
                  clim_settled:99,
                  offers:[ "Waiver of Premium Cover","100% payout on Terminal illness","Extra Payout on Accidental death","Cover against 34 critical illnesses"],
                  },
                  {
                          insurer:{ image:hdfc,
                                  name:"HDFC Life" },
                          life_cover: "50",
                          cover_till_age:{ max_age:"80" ,
                                      max_limit:"99" ,
                                      cover_term:"33" ,},
                          premium:"599" ,
                          clim_settled:97.9,
                          offers:[ "Waiver of Premium Cover","100% payout on Terminal illness","Extra Payout on Accidental death","Cover against 34 critical illnesses"],
                          },
                          {
                              insurer:{ image:icici,
                                      name:"ICICI" },
                              life_cover: "55",
                              cover_till_age:{ max_age:"80" ,
                                          max_limit:"99" ,
                                          cover_term:"33" ,},
                              premium:"899" ,
                              clim_settled:98.9,
                              offers:[ "Waiver of Premium Cover","100% payout on Terminal illness","Extra Payout on Accidental death","Cover against 34 critical illnesses"],
                              },
                              {
                                      insurer:{ image:max,
                                              name:"MAX Life" },
                                      life_cover: "70",
                                      cover_till_age:{ max_age:"90" ,
                                                  max_limit:"99" ,
                                                  cover_term:"33" ,},
                                      premium:"455" ,
                                      clim_settled:96,
                                      offers:[ "Waiver of Premium Cover","100% payout on Terminal illness","Extra Payout on Accidental death","Cover against 34 critical illnesses"],
                                      },
                                      {
                                              insurer:{ image:tata,
                                                      name:"TATA AIA" },
                                              life_cover: "60",
                                              cover_till_age:{ max_age:"90" ,
                                                          max_limit:"99" ,
                                                          cover_term:"33" ,},
                                              premium:"698" ,
                                              clim_settled:99,
                                              offers:[ "Waiver of Premium Cover","100% payout on Terminal illness","Extra Payout on Accidental death","Cover against 34 critical illnesses"],
                                              }
                                                     

],
Health_Insurance:[],
Car_Insurance:[]
}
export const Reducer = (storedata=data,action) => {
  switch(action.type)
  {
    case "user":return {...storedata,user_details:action.payload};
    case "health":return {...storedata,user_health_insurance:action.payload};
    default:return storedata
  }
}
