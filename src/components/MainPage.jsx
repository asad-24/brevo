import Header from "../Header/Header";
import heroSectionImg from "../assets/en_new_hero_image-3.webp";
import logo1 from "../assets/Amnesty.svg";
import logo2 from "../assets/ebay-1.svg";
import logo3 from "../assets/LouisVuitton.svg";
import logo4 from "../assets/Michelin-1.svg";
import logo5 from "../assets/Stripe.svg";
import logo6 from "../assets/Tissot.svg";
import markingPlateform from "../assets/MarketingPlatform-64-4.svg";
import salePlateform from "../assets/SalesCRM-64-1.svg";
import conversationalPlateform from "../assets/Conversations-40-3.svg";
import coustomerPlateform from "../assets/CDP-1.svg";
import apiPlateform from "../assets/TransactionalEmails-64-3.svg";
import cdp from "../assets/cdp_webinar_media_cta_op3-1.webp";
const MainPage = () => {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <div
        className="relative w-full bg-[#D7FEC8] "
      
      >
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:px-8 flex flex-col items-center md:flex-row">
          <div className="lg:col-span-6 xl:col-span-7 lg:ml-8 xl:ml-0">
            <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:px-6 lg:py-24">
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                Grow with our email marketing & CRM suite
              </h1>
              <p className="mt-8 text-lg text-gray-700">
                All-in-one platform to manage your customer relationships via
                Email, SMS, Chat and more
              </p>
              <div className="mt-5">
                <button
                  type="button"
                  className="rounded-2xl border-2 border-[#006A43] bg-[#10754D]  hover:bg-white px-8 py-3 text-medium  text-white hover:text-[#10754D] text-xl "
                >
                  Sign Up Free
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 xl:col-span-5 lg:-mr-8 xl:mr-0 flex items-center">
            <img className="w-full h-auto" src={heroSectionImg} alt="img" />
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div
        className="mx-auto my-6 max-w-9xl px-4 sm:px-6 md:my-24 lg:my-12 lg:px-8"
        style={{ border: "2px solid red" }}
      >
        <div className="mx-auto max-w-xxl text-center">
          <div className="mx-auto inline-flex   px-4 py-1.5">
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Join 500,000+ customers around the world who trust Brevo
            </p>
          </div>
          <div
            className="mt-5 grid grid-cols-12 gap-x-20 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-6 "
            style={{ border: "2px solid red" }}
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center  ">
              <img src={logo1} alt="Amnesty" />
            </div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center  ">
              <img src={logo2} alt="Amnesty" />
            </div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center  ">
              <img src={logo3} alt="Amnesty" />
            </div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center  ">
              <img src={logo4} alt="Amnesty" />
            </div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center  ">
              <img src={logo5} alt="Amnesty" />
            </div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center  ">
              <img src={logo6} alt="Amnesty" />
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
   <div className="flex flex-wrap justify-center gap-6 ">
   <div className="w-[400px]  border border-[#3C3585]  hover:border-2 rounded-ss-3xl rounded-ee-3xl ">
        <div className="p-4 ">
          <div className="flex justify-between ps-4">
            <h1 className="text-lg font-semibold">Markiting Plateform</h1>
            <img src={markingPlateform} alt="marking plateform" />
          </div>

         <div className="px-4">
         <p className="mt-3 text text-gray-600">
            Increase conversions with multi-channel campaigns and marketing
            automation
          </p>
          <p className="my-3">Top Features:</p>
          <ul className="text text-gray-600 list-disc mx-3">
            <li>Email markiting </li>
            <li>markiting Automation</li>
            <li>SMS And whatsapp campaigns</li>
          </ul>
         </div>
          <button
            type="button"
            className="mt-7  bg-[#3C3585] text-white hover:text-[#3C3585] hover:bg-white border-2 border-[#3C3585] py-5 text-xl font-semibold w-full rounded-2xl"
          >
            Find Out More
          </button>
        </div>
      </div>
   <div className="w-[400px]  border border-[#BC4E2D]  hover:border-2 rounded-ss-3xl rounded-ee-3xl ">
        <div className="p-4 ">
          <div className="flex justify-between ps-4">
            <h1 className="text-lg font-semibold">Sale Plateform</h1>
            <img src={salePlateform} alt="marking plateform" />
          </div>

         <div className="px-4">
         <p className="mt-3 text text-gray-600">
         Easily manage your pipeline and accelerate revenue growth across the entire sales cycle
          </p>
          <p className="my-3">Top Features:</p>
          <ul className="text text-gray-600 list-disc mx-3">
            <li>Pipeline management </li>
            <li>Automated deal tracking</li>
            <li>Meetings & call recordings</li>
          </ul>
         </div>
          <button
            type="button"
            className="mt-7  bg-[#BC4E2D] text-white hover:text-[#BC4E2D] hover:bg-white border-2 border-[#BC4E2D] py-5 text-xl font-semibold w-full rounded-2xl"
          >
            Find Out More
          </button>
        </div>
      </div>
   <div className="w-[400px]  border border-[#B22556]  hover:border-2 rounded-ss-3xl rounded-ee-3xl ">
        <div className="p-4 ">
          <div className="flex justify-between ps-4">
            <h1 className="text-lg font-semibold">Conversations Platform</h1>
            <img src={conversationalPlateform} alt="marking plateform" />
          </div>

         <div className="px-4">
         <p className="mt-3 text text-gray-600">
         Offer superb customer service with our multi-channel communication solution
          </p>
          <p className="my-3">Top Features:</p>
          <ul className="text text-gray-600 list-disc mx-3">
            <li>Chat</li>
            <li>Phone</li>
            <li>Universal inbox</li>
          </ul>
         </div>
          <button
            type="button"
            className="mt-7  bg-[#B22556] text-white hover:text-[#B22556] hover:bg-white border-2 border-[#B22556] py-5 text-xl font-semibold w-full rounded-2xl"
          >
            Find Out More
          </button>
        </div>
      </div>
   <div className="w-[400px]  border border-[#22609B]  hover:border-2 rounded-ss-3xl rounded-ee-3xl ">
        <div className="p-4 ">
          <div className="flex justify-between ps-4">
            <h1 className="text-lg font-semibold">Customer Data Plateform</h1>
            <img src={coustomerPlateform} alt="marking plateform" />
          </div>

         <div className="px-4">
         <p className="mt-3 text text-gray-600">
         Unify, manage and sync customer data to accelerate your time-to-value
          </p>
          <p className="my-3">Top Features:</p>
          <ul className="text text-gray-600 list-disc mx-3">
            <li>Multi-table data model </li>
            <li>Scoring Library</li>
            <li>Customer Analytics & BI</li>
          </ul>
         </div>
          <button
            type="button"
            className="mt-7  bg-[#22609B] text-white hover:text-[#22609B] hover:bg-white border-2 border-[#22609B] py-5 text-xl font-semibold w-full rounded-2xl"
          >
            Find Out More
          </button>
        </div>
      </div>
   <div className="w-[400px]  border border-[#116B6B]  hover:border-2 rounded-ss-3xl rounded-ee-3xl ">
        <div className="p-4 ">
          <div className="flex justify-between ps-4">
            <h1 className="text-lg font-semibold">Messaging API </h1>
            <img src={apiPlateform} alt="marking plateform" />
          </div>

         <div className="px-4">
         <p className="mt-3 text text-gray-600">
         Deliver individual messages at scale and on time with our powerful API
          </p>
          <p className="my-3">Top Features:</p>
          <ul className="text text-gray-600 list-disc mx-3">
            <li>Email, SMS & WhatsApp API</li>
            <li>CMS integration</li>
            <li>Inbound parsing</li>
          </ul>
         </div>
          <button
            type="button"
            className="mt-7  bg-[#116B6B] text-white hover:text-[#116B6B] hover:bg-white border-2 border-[#116B6B] py-5 text-xl font-semibold w-full rounded-2xl"
          >
            Find Out More
          </button>
        </div>
      </div>
      
   </div>

    {/* Hero Section */}
    <div
        className="relative w-full bg-white"
      
      >
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:px-8 flex flex-col items-center md:flex-row">
          <div className="lg:col-span-6 xl:col-span-7 lg:ml-8 xl:ml-0 px-6">
           
            <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:px-6 lg:py-24">
            <p className="text-xl">BREVO WEBINAR</p>
              <h1 className="mt-8 text-xl tracking-tight text-black md:text-2xl lg:text-3xl">
              Adapt and Thrive: Agile Marketing Automation with CDP
              </h1>
              <p className="mt-8 text-lg text-gray-700">
              Join Yassine Hamou-Tahra, Director of Brevo CDP, on April 25th, at 12 PM CEST and 10 AM PDT, and discover how to maximize your data potential in various marketing scenarios
              </p>
              <div className="mt-5">
                <button
                  type="button"
                  className="rounded-2xl border-2 border-[#006A43] bg-[#10754D]  hover:bg-white px-8 py-3 text-medium  text-white hover:text-[#10754D] text-xl "
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 xl:col-span-5 lg:-mr-8 xl:mr-0 flex items-center">
            <img className="w-full h-auto" src={cdp} alt="img" />
          </div>
        </div>
      </div>

    </>
  );
};

export default MainPage;
