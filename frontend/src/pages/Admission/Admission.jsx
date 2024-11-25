import React from "react";
import NavBar from "../NavBar";
import FooterSection from "../FooterSection";
import Admissionoverview from "./Admissionoverview";
import Admissionsteps from "./Admissionsteps";
import Admissiontermdates from "./Admissiontermdates"
import AdmissionFAQ from "./AdmissionFAQ"
import AdmissionDOCS from "./AdmissionDOCS"
import Admissionconditions from "./Admissionconditions"

const Admission = () => {
  return (
    <>
      <div className="w-full h-[0.1px]" id="start"></div>
      <NavBar />
      <div className="w-full h-[0.1px]" id="overview" ></div>
      <Admissionoverview />
      <div className=" w-full h-[0.1px]" id="admissionsteps"></div>
      <Admissionsteps />
      <div className=" w-full h-[0.1px]" id="admissiondocuments"></div>
      <AdmissionDOCS/>
      <div className=" w-full h-[0.1px] bg-black" id="termsconditions"></div>
      <Admissionconditions/>
      <div className=" w-full h-[0.1px] bg-black" id="termdates"></div>
      <Admissiontermdates/>
      <div className=" w-full h-[0.1px] bg-black" id="faq"></div>
      <AdmissionFAQ/>
      

      <FooterSection />
    </>
  );
};

export default Admission;