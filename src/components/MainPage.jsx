import Header from "../Header/Header";
import BrevoWebinar from "../MainPage/BrevoWebinar";
import Cards from "../MainPage/Cards";
import CompanyLogos from "../MainPage/CompanyLogos";
import FeaturesSection from "../MainPage/FeaturesSection";
import HeroSection from "../MainPage/HeroSection";
import SolutionForBusiness from "../MainPage/SolutionForBusiness";
import ConnectedTool from "../MainPage/connectTools/ConnectedTool";

import Footer from "../footer/Footer"



const MainPage = () => {
  
  




 




  return (
    <>
    <Header/>
      {/* Hero Section */}
     <HeroSection/>
      {/* Features Section */}
     <FeaturesSection/>

      {/* Cards */}
  <Cards/>

    {/* BREVO WEBINAR */}
    <BrevoWebinar/>

  {/*company's logos*/}
  <CompanyLogos/>

 {/* Solutions for every business */}

<SolutionForBusiness/>
{/* ConnectedTool */}

<ConnectedTool/>

{/* Footer */}
<Footer/>
    </>
  );
};

export default MainPage;
