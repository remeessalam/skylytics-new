import logo from "../assets/logo/logo.png";

// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/web-development-portfolio/5ghomes.png";
import BayutImg from "../assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "../assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "../assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "../assets/web-development-portfolio/flatiorn.png";
import MavenImg from "../assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "../assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "../assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "../assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "../assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "../assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "../assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "../assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "../assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "../assets/app-development-portfolio/namaz.png";
import PoteaImg from "../assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "../assets/app-development-portfolio/rentop bike and car.png";

// services icons (website)
import { ReactComponent as icon1 } from "../assets/svg/services/custome.svg";
import { ReactComponent as icon2 } from "../assets/svg/services/web.svg";
import { ReactComponent as icon3 } from "../assets/svg/services/app.svg";
import { ReactComponent as icon4 } from "../assets/svg/services/aiml.svg";
import { ReactComponent as icon5 } from "../assets/svg/services/rpa.svg";
import { ReactComponent as icon6 } from "../assets/svg/services/chatbot.svg";
import { ReactComponent as icon7 } from "../assets/svg/services/blockchain.svg";
import { ReactComponent as icon8 } from "../assets/svg/services/data.svg";
import { ReactComponent as icon9 } from "../assets/svg/services/cloud.svg";

// app development services icons
import { ReactComponent as appIcon1 } from "../assets/svg/services/iOS App Development.svg";
import { ReactComponent as appIcon2 } from "../assets/svg/services/Android.svg";
import { ReactComponent as appIcon3 } from "../assets/svg/services/Flutter.svg";
import { ReactComponent as appIcon4 } from "../assets/svg/services/Hybrid App Development.svg";

// web development services icons
import { ReactComponent as webIcon1 } from "../assets/svg/services/E-Commerce Development.svg";
import { ReactComponent as webIcon2 } from "../assets/svg/services/Social Media Websites.svg";
import { ReactComponent as webIcon3 } from "../assets/svg/services/Web Development.svg";
import { ReactComponent as webIcon4 } from "../assets/svg/services/UIUX Design.svg";
import { FaGlobe } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";

export { logo };

export const companyDetails = {
  email: "SKYLYTICStechnologies@gmail.com",
  // email: "remeesreme4u@gmail.com",
  phone: "+91-9686612171",
  address:
    "SBB Diamond , Hoodi Main road , Ayyappa Nagar, Krpuram. Banglore 560036 Karnataka",
  instagram: "https://www.instagram.com/skylyticstechnologies",
  x: "https://x.com/Skylytics",
  facebook: "https://www.facebook.com/",
  linkedin: "https://www.linkedin.com/",
  whatsapplink:
    "https://api.whatsapp.com/send/?phone=9686612171&text&type=phone_number&app_absent=0",
};

export const navItems = [
  { label: "Home", path: "/", extraClasses: "hover:text-blue-400 " },
  { label: "About", path: "/about-us", extraClasses: "hover:text-blue-400" },
  { label: "Services", path: "/services", extraClasses: "hover:text-blue-400" },

  {
    label: "Blogs",
    path: "/blogs",
    extraClasses: "hover:text-blue-400",
  },

  {
    label: "Contact Us",
    path: "/contact-us",
    extraClasses:
      "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700",
  },
];

export const testimonials = [
  {
    name: "Arjun Mehta",
    designation: "COO, LogiChain Solutions",
    image: require("../assets/images/testimonial/2.jpg"),
    review:
      "Skylytics transformed our operations with their custom software solution. The tailored platform streamlined our workflow and increased productivity by 40% within the first month! Their team was professional, innovative, and delivered beyond our expectations.",
  },
  {
    name: "Meera Joshi",
    designation: "CTO, FinTech Innovations",
    image: require("../assets/images/testimonial/1.jpg"),
    review:
      "The full-stack web application developed by Skylytics was a game-changer for our business. Their seamless integration with our existing systems and attention to detail made the entire process smooth and efficient. We’re thrilled with the results!",
  },
  {
    name: "Rohan Kapoor",
    designation: "Product Lead, HealthTrack",
    image: require("../assets/images/testimonial/3.jpg"),
    review:
      "Skylytics developed a mobile app that achieved 100k downloads in the first quarter. The user experience is flawless across both iOS and Android platforms. Their team was responsive, creative, and delivered a polished product on time.",
  },
  {
    name: "Vikram Singh",
    designation: "AI Architect, RetailPlus",
    image: require("../assets/images/testimonial/4.jpg"),
    review:
      "The AI solution implemented by Skylytics revolutionized our customer service. Response times improved by 70% while maintaining 98% satisfaction rates. Their expertise in AI and machine learning was evident throughout the project.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: webIcon1,
    desc: "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: webIcon2,
    desc: "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: webIcon3,
    desc: " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: webIcon4,
    desc: "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: appIcon1,
    desc: "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: appIcon2,
    desc: "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: appIcon3,
    desc: "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: appIcon4,
    desc: "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// portfolio links
export const portfolio = {
  appDevelopment: {
    icon: <AiFillAppstore size={30} />,
    list: [
      {
        id: 1,
        img: DubaiTravelGuideImg,
        title: "Dubai Travel Guide",
        link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
      },
      {
        id: 2,
        img: EloraHairPalourImg,
        title: "Elora Hair Palour",
        link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
      },
      {
        id: 3,
        img: EvansFrancisImg,
        title: "Evans Francis",
        link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
      },
      {
        id: 4,
        img: HouseOfDeliverenceImg,
        title: "House of Deliverence",
        link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
      },
      {
        id: 5,
        img: MybitsShopImg,
        title: "Mybits Shop",
        link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
      },
      {
        id: 6,
        img: NamazImg,
        title: "Namaz",
        link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
      },
      {
        id: 7,
        img: PoteaImg,
        title: "Potea",
        link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
      },
      {
        id: 8,
        img: RentopBikeAndCarImg,
        title: "Rentop Bike and Car",
        link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
      },
    ],
  },
  webDevelopment: {
    icon: <FaGlobe size={30} />,
    list: [
      {
        id: 1,
        img: FiveGHomesImg,
        title: "5g Homes",
        link: "https://5ghighspeedinternet.co",
      },
      {
        id: 2,
        img: BayutImg,
        title: "Bayut",
        link: "https://www.bayut.com",
      },
      {
        id: 3,
        img: ColdCreekcapImg,
        title: "Cold Creekcap",
        link: "https://www.coldcreekcap.com",
      },
      {
        id: 4,
        img: EmergencyMusicImg,
        title: "Emergency Music",
        link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
      },
      {
        id: 5,
        img: FlatiornImg,
        title: "Flatiorn",
        link: "",
      },
      {
        id: 6,
        img: MavenImg,
        title: "Maven",
        link: "",
      },
      {
        id: 7,
        img: MenissaCateringsImg,
        title: "Menissa Caterings",
        link: "https://messinascatering.com",
      },
      {
        id: 8,
        img: MethodistImg,
        title: "Methodist",
        link: "",
      },
      {
        id: 9,
        img: ThinkRealityImg,
        title: "Think Reality",
        link: "https://thinkrealty.ae",
      },
    ],
  },
};

// complete service and details
export const services = [
  {
    id: 1,
    title: "Custom Software Development",
    icon: icon1,
    desc: "Empower your business with Skylytics's tailored software solutions. From streamlining workflows to building scalable applications, we deliver high-performance software that drives growth and innovation.",
    detailsPage: {
      banner: require("../assets/images/banners/custome.jpg"),
      img1: require("../assets/images/service-details/custome-1.jpg"),
      img2: require("../assets/images/service-details/custome-2.jpg"),
      img3: require("../assets/images/service-details/custome-3.jpg"),
      firstSection: `
        <div class="space-y-6">
   <div class="space-y-4">
    <h2 class="text-xl font-bold">
      Transform Your Business with Custom Software
    </h2>
    <p class="">
      In a fast-paced digital world, businesses need tailored software solutions to stay competitive, enhance productivity, and deliver seamless customer experiences.
    </p>
    <p class="">
      At <span class="font-bold text-secondary">Skylytics</span>, we specialize in building high-quality, scalable, and secure software solutions designed to meet your unique business needs.
    </p>
   </div>
  </div>`,

      secondSection: `
  <div class="py-6">
  <div class="space-y-6">
    <h2 class="text-xl font-bold">
      Why Invest in Custom Software Development?
    </h2>
    <ul class="space-y-5 list-decimal pl-6">
      <li>
        <h3 class="font-bold mb-2">Tailored Solutions</h3>
        <p class="">
          Get software designed specifically for your business requirements, ensuring maximum efficiency and effectiveness.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Scalability & Flexibility</h3>
        <p class="">
          Build software that grows with your business, adapting to new challenges and market trends.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Enhanced Security</h3>
        <p class="">
          Protect your sensitive data with robust security features, minimizing risks and ensuring compliance.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Seamless Integration</h3>
        <p class="">
          Integrate custom solutions with your existing tools and systems for a unified and efficient workflow.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Long-Term Cost Savings</h3>
        <p class="">
          Reduce dependency on third-party software and minimize recurring licensing costs with a custom-built solution.
        </p>
      </li>
    </ul>
  </div>
</div>
`,
      thirdSection: `<div class="py-6">
  <div class="space-y-6">
    <h2 class="text-xl font-bold">
      Our Expertise in Custom Software Development
    </h2>
    <p>
      At Skylytics, we deliver cutting-edge software solutions that help businesses streamline operations and drive innovation.
    </p>
    <ul class="space-y-5 list-disc pl-6">
      <li>
        <h3 class="font-bold mb-2">Enterprise Software Development</h3>
        <p>
          Build scalable and efficient software tailored to your business needs, ensuring seamless operations.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Web & Mobile Applications</h3>
        <p>
          Develop high-performance web and mobile apps that enhance user engagement and business growth.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Cloud-Based Solutions</h3>
        <p>
          Leverage the power of cloud computing for secure, scalable, and accessible software solutions.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Process Automation</h3>
        <p>
          Automate business processes to increase efficiency and reduce operational costs.
        </p>
      </li>
    </ul>
  </div>
</div>
`,
    },
  },
  {
    id: 2,
    title: "Full-Stack Web Development",
    icon: icon2,
    desc: "Accelerate your digital transformation with Skylytics’s full-stack web development services. We build dynamic, scalable, and high-performance web applications tailored to your business needs.",
    detailsPage: {
      banner: require("../assets/images/banners/web.jpg"),
      img1: require("../assets/images/service-details/web-1.jpg"),
      img2: require("../assets/images/service-details/web-2.jpg"),
      img3: require("../assets/images/service-details/web-3.jpg"),
      firstSection: `<div class="space-y-6">
  <div class="space-y-4">
    <h2 class="text-xl font-bold">
      End-to-End Full-Stack Web Development Solutions
    </h2>
    <p>
      In today’s digital landscape, businesses need powerful, seamless web applications that offer exceptional user experiences and high performance.
    </p>
    <p>
      At <span class="font-bold text-secondary">Skylytics</span>, we specialize in full-stack web development, building both front-end and back-end solutions that integrate seamlessly to drive business growth.
    </p>
  </div>
</div>
`,
      secondSection: `<div class="py-6">
  <div class="space-y-6">
    <h2 class="text-xl font-bold">
      Why Choose Skylytics for Full-Stack Web Development?
    </h2>
    <ul class="space-y-5 list-decimal pl-6">
      <li>
        <h3 class="font-bold mb-2">Comprehensive Development</h3>
        <p>
          We handle both front-end and back-end development, delivering complete, robust, and scalable solutions.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Modern Technologies</h3>
        <p>
          Our developers use the latest frameworks and tech stacks, including React, Angular, Node.js, Python, and more, ensuring high-quality applications.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">API & Database Integration</h3>
        <p>
          We build secure APIs and integrate databases efficiently to power data-driven applications.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Scalability & Performance</h3>
        <p>
          Our full-stack solutions are designed for growth, handling high traffic and complex functionalities with ease.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Security & Optimization</h3>
        <p>
          We prioritize security, ensuring your application is protected against vulnerabilities while maintaining optimal performance.
        </p>
      </li>
    </ul>
  </div>
</div>
`,

      thirdSection: `<div class="py-6">
  <div class="space-y-6">
    <h2 class="text-xl font-bold">
      Our Full-Stack Web Development Process
    </h2>
    <ul class="space-y-5 list-decimal pl-6">
      <li>
        <h3 class="font-bold mb-2">Requirement Analysis</h3>
        <p>
          We gather insights into your business needs and define the project scope.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">UI/UX Design</h3>
        <p>
          Our designers create intuitive, user-friendly interfaces for seamless interaction.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Front-End & Back-End Development</h3>
        <p>
          We develop a high-performing front end and a secure, scalable back end to power your application.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Testing & Deployment</h3>
        <p>
          Rigorous testing ensures flawless functionality before launching your application.
        </p>
      </li>
      <li>
        <h3 class="font-bold mb-2">Maintenance & Support</h3>
        <p>
          We provide continuous updates, optimizations, and security patches to keep your application running smoothly.
        </p>
      </li>
    </ul>
  </div>
</div>
`,
    },
  },
  {
    id: 3,
    title: "Mobile App Development",
    icon: icon3,
    desc: "Take your business to the next level with Skylytics’s innovative app development services. We design and develop mobile applications that deliver seamless experiences, enhance user engagement, and drive growth.",
    detailsPage: {
      banner: require("../assets/images/banners/app.jpg"),
      img1: require("../assets/images/service-details/app-dev-1.webp"),
      img2: require("../assets/images/service-details/app-dev-2.webp"),
      img3: require("../assets/images/service-details/app-dev-3.webp"),
      firstSection: `<div class="space-y-6">
        <div class="space-y-4">
          <h2 class="text-xl font-bold">
            Creating Impactful Mobile Apps for Your Business
          </h2>
          <p>
            In the mobile-first world, having an app that resonates with your audience is crucial for business success.
          </p>
          <p>
            At <span class="font-bold text-secondary">Skylytics</span>, we specialize in developing high-quality mobile applications that provide an exceptional user experience, enhance functionality, and grow your business.
          </p>
        </div>
      </div>
      `,
      secondSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Why Choose Skylytics for App Development?
          </h2>
          <ul class="space-y-5 list-decimal pl-6">
            <li>
              <h3 class="font-bold mb-2">Custom Solutions</h3>
              <p>
                We understand that each business is unique, and we create tailor-made apps that align with your business objectives.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Cross-Platform Compatibility</h3>
              <p>
                Our apps are designed to perform seamlessly across multiple platforms, ensuring a consistent experience for all users.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">User-Centered Design</h3>
              <p>
                We focus on intuitive design and user engagement, ensuring your app offers a delightful experience for users.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Scalability & Security</h3>
              <p>
                Our apps are built to scale with your business and are secured with the latest technologies to protect your data.
              </p>
            </li>
          </ul>
        </div>
      </div>
      `,
      thirdSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Our App Development Process
          </h2>
          <ul class="space-y-5 list-decimal pl-6">
            <li>
              <h3 class="font-bold mb-2">Consultation</h3>
              <p>
                We start by understanding your business goals and the vision for your app.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Planning</h3>
              <p>
                We outline the features and functionalities, and select the best approach for development.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Design & Development</h3>
              <p>
                Our team develops a robust and scalable app with an exceptional user interface.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Testing</h3>
              <p>
                We ensure that the app is bug-free, reliable, and performs optimally across all devices.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Launch & Support</h3>
              <p>
                Once launched, we provide ongoing support and maintenance to ensure your app remains up-to-date and functional.
              </p>
            </li>
          </ul>
        </div>
      </div>
      `,
    },
  },
  {
    id: 4,
    title: "AI Solutions & Machine Learning",
    icon: icon4,
    desc: "Unlock the power of artificial intelligence with Skylytics’s advanced AI solutions and machine learning services. We help businesses automate processes, enhance decision-making, and drive innovation.",
    detailsPage: {
      banner: require("../assets/images/banners/aiml.jpg"),
      img1: require("../assets/images/service-details/aiml-1.jpg"),
      img2: require("../assets/images/service-details/aiml-2.jpg"),
      img3: require("../assets/images/service-details/aiml-3.jpg"),
      firstSection: `<div class="space-y-6">
        <div class="space-y-4">
          <h2 class="text-xl font-bold">
            Transforming Businesses with AI & Machine Learning
          </h2>
          <p>
            AI and machine learning are reshaping industries, enabling businesses to streamline operations, gain data-driven insights, and unlock new opportunities.
          </p>
          <p>
            At <span class="font-bold text-secondary">Skylytics</span>, we specialize in building AI-powered solutions that enhance automation, improve decision-making, and drive business success.
          </p>
        </div>
      </div>`,
      secondSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Why Choose Skylytics for AI & Machine Learning Solutions?
          </h2>
          <ul class="space-y-5 list-decimal pl-6">
            <li>
              <h3 class="font-bold mb-2">AI-Powered Automation</h3>
              <p>
                Reduce manual efforts and improve efficiency with AI-driven process automation and intelligent workflows.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Data-Driven Insights</h3>
              <p>
                Extract valuable insights from vast amounts of data to make informed business decisions and predictions.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Personalized Customer Experiences</h3>
              <p>
                Leverage AI for chatbots, recommendation engines, and predictive analytics to create highly customized user experiences.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Scalable & Secure AI Models</h3>
              <p>
                Our AI solutions are built for scalability and security, ensuring reliable and future-ready performance.
              </p>
            </li>
          </ul>
        </div>
      </div>`,
      thirdSection: `<div class="py-6">
        <div class="space-y-6">
          <h2 class="text-xl font-bold">
            Our Expertise in AI & Machine Learning
          </h2>
          <p>
            At Skylytics, we offer cutting-edge AI and machine learning solutions tailored to diverse industry needs.
          </p>
          <ul class="space-y-5 list-disc pl-6">
            <li>
              <h3 class="font-bold mb-2">Machine Learning Models</h3>
              <p>
                We develop and deploy machine learning models that continuously learn from data to improve outcomes and decision-making.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Natural Language Processing (NLP)</h3>
              <p>
                Build AI-powered chatbots, voice assistants, and sentiment analysis tools that understand and process human language.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Computer Vision</h3>
              <p>
                Enable AI to analyze and interpret images and videos for applications in security, healthcare, retail, and more.
              </p>
            </li>
            <li>
              <h3 class="font-bold mb-2">Predictive Analytics</h3>
              <p>
                Utilize AI to analyze trends, forecast future events, and optimize business strategies.
              </p>
            </li>
          </ul>
        </div>
      </div>`,
    },
  },
  {
    id: 5,
    title: "Robotic Process Automation (RPA)",
    icon: icon5,
    desc: "Streamline operations and enhance efficiency with Skylytics’s Robotic Process Automation (RPA) solutions. We help businesses automate repetitive tasks, reduce errors, and boost productivity through intelligent automation.",
    detailsPage: {
      banner: require("../assets/images/banners/rpa.jpg"),
      img1: require("../assets/images/service-details/rpa-1.jpg"),
      img2: require("../assets/images/service-details/rpa-2.jpg"),
      img3: require("../assets/images/service-details/rpa-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Transforming Business Operations with RPA
            </h2>
            <p>
              In the digital era, businesses need to automate time-consuming, repetitive tasks to improve efficiency and reduce operational costs. RPA enables organizations to streamline workflows, minimize human errors, and focus on high-value activities.
            </p>
            <p>
              At <span class="font-bold text-secondary">Skylytics</span>, we specialize in implementing intelligent RPA solutions that optimize processes, enhance accuracy, and accelerate business growth.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Choose Skylytics for RPA Solutions?
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Intelligent Automation</h3>
                <p>
                  We leverage advanced RPA tools to automate complex business processes, reducing manual effort and improving accuracy.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Cost & Time Savings</h3>
                <p>
                  Automating repetitive tasks significantly cuts down operational costs and frees up valuable employee time for strategic initiatives.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Scalability & Flexibility</h3>
                <p>
                  Our RPA solutions are scalable, allowing businesses to expand automation capabilities as they grow and evolve.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Seamless Integration</h3>
                <p>
                  Our RPA bots integrate seamlessly with existing systems, ensuring minimal disruption and maximizing efficiency.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Compliance & Security</h3>
                <p>
                  Our automation solutions adhere to strict security standards and compliance requirements, ensuring data protection and regulatory alignment.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our RPA Implementation Process
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Process Assessment</h3>
                <p>
                  We analyze your workflows to identify automation opportunities and assess feasibility.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Automation Strategy</h3>
                <p>
                  Based on our assessment, we design a tailored RPA strategy aligned with your business goals.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Bot Development & Testing</h3>
                <p>
                  We develop, test, and deploy RPA bots that automate key business processes while ensuring accuracy and efficiency.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Deployment & Continuous Optimization</h3>
                <p>
                  We monitor bot performance post-deployment, provide ongoing support, and optimize automation processes for continuous improvement.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 6,
    title: "Chatbot Development",
    icon: icon6,
    desc: "Enhance customer interactions and automate support with Skylytics’s advanced chatbot development services. We create intelligent, AI-powered chatbots that provide seamless engagement and efficient responses.",
    detailsPage: {
      banner: require("../assets/images/banners/chatbot.jpg"),
      img1: require("../assets/images/service-details/chatbot-1.jpg"),
      img2: require("../assets/images/service-details/chatbot-2.jpg"),
      img3: require("../assets/images/service-details/chatbot-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Revolutionizing Customer Engagement with AI-Powered Chatbots
            </h2>
            <p>
              Skylytics’s chatbot development services empower businesses with intelligent virtual assistants that streamline communication, improve customer service, and enhance user experience.
            </p>
            <p>
              Our AI-driven chatbots are designed to provide real-time support, automate responses, and integrate seamlessly with your business platforms to deliver a personalized and efficient user experience.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Choose Skylytics for Chatbot Development?
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">AI-Powered Intelligence</h3>
                <p>
                  Our chatbots leverage machine learning and natural language processing (NLP) to provide human-like conversations and intelligent interactions.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">24/7 Customer Support</h3>
                <p>
                  Ensure round-the-clock availability with automated chatbots that assist customers anytime, improving response time and satisfaction.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Seamless Integrations</h3>
                <p>
                  Our chatbots easily integrate with CRM systems, websites, mobile apps, and social media platforms for a unified communication experience.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Cost & Time Efficiency</h3>
                <p>
                  Automate repetitive queries and tasks, reducing the workload on human agents and cutting operational costs.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Personalized User Interactions</h3>
                <p>
                  AI-driven chatbots provide personalized responses based on user preferences and history, enhancing customer engagement.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Chatbot Development Process
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Requirement Analysis</h3>
                <p>
                  We analyze your business needs, customer interactions, and existing support processes to define chatbot functionalities.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Chatbot Design & Development</h3>
                <p>
                  Our experts design and develop a chatbot with a customized conversational flow, AI-driven responses, and seamless integration.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Testing & Training</h3>
                <p>
                  We test and refine chatbot performance using real-world data, training it to understand user intents and improve accuracy.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Deployment & Optimization</h3>
                <p>
                  We deploy the chatbot across your preferred platforms and provide continuous monitoring and improvements to enhance performance.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 7,
    title: "Blockchain Development",
    icon: icon7,
    desc: "Revolutionize your business with Skylytics’s cutting-edge blockchain development services. We build secure, decentralized, and scalable blockchain solutions tailored to your industry needs.",
    detailsPage: {
      banner: require("../assets/images/banners/blockchain.jpg"),
      img1: require("../assets/images/service-details/blockchain-1.jpg"),
      img2: require("../assets/images/service-details/blockchain-2.jpg"),
      img3: require("../assets/images/service-details/blockchain-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Secure & Scalable Blockchain Solutions for Your Business
            </h2>
            <p>
              Skylytics’s blockchain development services empower businesses with decentralized solutions that enhance security, transparency, and efficiency.
            </p>
            <p>
              From smart contract development to blockchain integration, we provide customized solutions that streamline operations, reduce fraud, and ensure data integrity.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Choose Skylytics for Blockchain Development?
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Decentralized Security</h3>
                <p>
                  Our blockchain solutions ensure tamper-proof data storage and transactions, reducing risks of fraud and cyber threats.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Smart Contracts</h3>
                <p>
                  Automate transactions and agreements with self-executing smart contracts, enhancing efficiency and reducing operational costs.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Seamless Integration</h3>
                <p>
                  We integrate blockchain solutions with your existing systems, ensuring smooth adoption without disrupting workflows.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Scalability & Performance</h3>
                <p>
                  Our blockchain networks are designed for high performance, handling large-scale transactions while maintaining speed and security.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Transparency & Trust</h3>
                <p>
                  Blockchain ensures an immutable and transparent ledger, building trust among stakeholders and customers.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Blockchain Development Process
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Requirement Analysis</h3>
                <p>
                  We assess your business goals and identify how blockchain can enhance security, efficiency, and transparency.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Blockchain Architecture & Development</h3>
                <p>
                  Our experts design and develop custom blockchain networks, smart contracts, and decentralized applications (dApps).
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Testing & Security Audit</h3>
                <p>
                  We rigorously test the blockchain system, ensuring smart contracts are secure and the network performs optimally.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Deployment & Optimization</h3>
                <p>
                  After deployment, we provide continuous monitoring, performance optimization, and scalability enhancements.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 8,
    title: "Data Analytics & Business Intelligence",
    icon: icon8,
    desc: "Unlock actionable insights with Skylytics’s data analytics and business intelligence solutions. We help businesses make data-driven decisions with advanced analytics, visualization, and AI-powered intelligence.",
    detailsPage: {
      banner: require("../assets/images/banners/data.jpg"),
      img1: require("../assets/images/service-details/data-1.jpg"),
      img2: require("../assets/images/service-details/data-2.jpg"),
      img3: require("../assets/images/service-details/data-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Transform Your Business with Data-Driven Insights
            </h2>
            <p>
              Skylytics’s data analytics and business intelligence services empower businesses with deep insights to drive growth, optimize performance, and improve decision-making.
            </p>
            <p>
              From predictive analytics to real-time dashboards, we provide custom solutions that turn raw data into valuable business intelligence.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Choose Skylytics for Data Analytics & Business Intelligence?
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Advanced Data Processing</h3>
                <p>
                  We leverage big data technologies and AI-powered analytics to process and analyze vast amounts of data efficiently.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Predictive & Prescriptive Analytics</h3>
                <p>
                  Utilize AI-driven models to forecast trends, detect patterns, and provide actionable recommendations for business growth.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Seamless System Integration</h3>
                <p>
                  Our analytics solutions integrate with your existing CRM, ERP, and cloud systems to provide a unified data-driven experience.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Interactive Dashboards & Reports</h3>
                <p>
                  Gain real-time insights with visually rich dashboards and reports tailored to your business needs.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Data Security & Compliance</h3>
                <p>
                  Ensure data integrity and compliance with industry regulations through our secure and privacy-focused analytics solutions.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Data Analytics & BI Process
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Data Collection & Integration</h3>
                <p>
                  We gather, clean, and integrate data from multiple sources to create a structured and reliable dataset.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Data Analysis & Modeling</h3>
                <p>
                  Using AI and machine learning, we analyze data trends and create predictive models tailored to your business needs.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Visualization & Reporting</h3>
                <p>
                  We design intuitive dashboards and reports to help you interpret data insights and make informed decisions.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Optimization & Continuous Monitoring</h3>
                <p>
                  Our team ensures ongoing analysis, optimization, and updates to enhance the accuracy and efficiency of your BI solutions.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 9,
    title: "Cloud Computing Services",
    icon: icon9,
    desc: "Leverage the power of the cloud with Skylytics’s cloud computing services. We provide scalable, secure, and cost-effective cloud solutions to help businesses innovate and grow.",
    detailsPage: {
      banner: require("../assets/images/banners/cloud.jpg"),
      img1: require("../assets/images/service-details/cloud-1.jpg"),
      img2: require("../assets/images/service-details/cloud-2.jpg"),
      img3: require("../assets/images/service-details/cloud-3.jpg"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Scalable & Secure Cloud Solutions for Your Business
            </h2>
            <p>
              Skylytics’s cloud computing services enable businesses to accelerate digital transformation with scalable and secure cloud solutions.
            </p>
            <p>
              From cloud migration to infrastructure management, we offer tailored solutions that enhance flexibility, optimize costs, and ensure high availability.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Choose Skylytics for Cloud Computing Services?
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Scalable Cloud Infrastructure</h3>
                <p>
                  We design cloud solutions that scale with your business needs, ensuring flexibility and cost-efficiency.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Seamless Cloud Migration</h3>
                <p>
                  Our experts ensure a smooth and secure transition to the cloud with minimal downtime and disruption.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Multi-Cloud & Hybrid Solutions</h3>
                <p>
                  We offer hybrid and multi-cloud strategies, integrating public and private cloud environments for optimal performance.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Enhanced Security & Compliance</h3>
                <p>
                  Our cloud solutions ensure data security, compliance with industry regulations, and robust disaster recovery strategies.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Cost Optimization</h3>
                <p>
                  We help businesses reduce IT infrastructure costs by optimizing cloud resource utilization and eliminating inefficiencies.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Cloud Computing Process
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Cloud Strategy & Consultation</h3>
                <p>
                  We assess your business requirements and define a cloud strategy tailored to your goals and workload demands.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Cloud Architecture & Deployment</h3>
                <p>
                  Our team designs and deploys cloud architectures that optimize performance, security, and scalability.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Cloud Management & Monitoring</h3>
                <p>
                  We provide continuous monitoring, management, and support to ensure high availability and performance.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Optimization & Future Scaling</h3>
                <p>
                  We optimize cloud resources and implement scaling strategies to accommodate future business growth.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
];
