import { useState } from 'react';
import './App.css';
import Profile from "./assets/anisimage.png";
import pImg1 from "./assets/hotel_1.jpg";
import secondImg from "./assets/eco.jpg";
import thirdImg from "./assets/next-code.jpg";
import fourthImg from "./assets/rsa.jpg";
import Experience from './components/Experience/Experience';
import ScrollProgressBar from './components/ScrollProgressBar/ScrollProgressBar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';



function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className='sticky top-0 bg-blue-900'>
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <a href="#" className='font-extrabold text-2xl text-white'>MD. ANISUL ISLAM</a>

          <button className="block lg:hidden text-white" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <nav className='hidden lg:flex lg:items-center lg:gap-6'>
            <a href="#projects" className='text-white cursor-pointer hover:text-gray-200 font-bold'>Projects</a>
            <a href="#skills" className='text-white cursor-pointer hover:text-gray-200 font-bold'>Skills</a>
            <a href="#about" className='text-white cursor-pointer hover:text-gray-200 font-bold'>About me</a>
            <a href="#contact" className='text-white cursor-pointer hover:text-gray-200 font-bold'>Contact us</a>
            <a href="#education" className='text-white cursor-pointer hover:text-gray-200 font-bold'>Education</a>
          </nav>
        </div>

        {/* Off-canvas Menu */}
        <div className={`fixed inset-0 bg-blue-800 text-white transform transition-transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
          <div className="flex flex-col items-center p-4">
            <button className="absolute top-4 right-4 text-white" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <a href="#projects" className='py-2 text-lg hover:text-gray-300' onClick={toggleMenu}>Projects</a>
            <a href="#skills" className='py-2 text-lg hover:text-gray-300' onClick={toggleMenu}>Skills</a>
            <a href="#about" className='py-2 text-lg hover:text-gray-300' onClick={toggleMenu}>About me</a>
            <a href="#contact" className='py-2 text-lg hover:text-gray-300' onClick={toggleMenu}>Contact us</a>
            <a href="#education" className='py-2 text-lg hover:text-gray-300' onClick={toggleMenu}>Education</a>
          </div>
        </div>
      </header>


      {/* scroll progressbar */}
      <ScrollProgressBar />

      {/* scroll to top */}
      <ScrollToTop />

      {/* main section */}
      <main>
        {/* banner */}
        <div className='flex flex-col md:flex-row justify-center items-center p-2 mt-5'>
          <div className='p-5 text-center md:text-left'>
            <h2 className='text-2xl font-bold text-white'>I am MD. Anisul Islam</h2>
            <h2 className='text-2xl font-bold mt-2 text-blue-700'>Full Stack Developer (Django and React)</h2>
            <p className='text-xl font-bold text-white mt-4'>
              As a highly motivated and detail-oriented Full Stack Developer <br />
              with expertise in Django and React, <br />
              I am eager to leverage my skills in building dynamic and responsive web applications. <br />
              Seeking to contribute to a forward-thinking <br />
              company where I can apply my technical knowledge,<br />
              problem-solving abilities, <br />
              and passion for continuous learning to develop innovative solutions<br />
              that drive business success and enhance user experiences.
            </p>
            <div className='flex flex-col md:flex-row gap-4 mt-6'>
              <div>
                <a href="https://drive.google.com/file/d/1ywSy1XJLeOrZsbRzApxtB8dA_6jNmgP5/view?usp=sharing" target='blank'>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto">
                    Full Stack Resume
                  </button>
                </a>
              </div>
              <div>
                <a href="https://drive.google.com/file/d/1ywSy1XJLeOrZsbRzApxtB8dA_6jNmgP5/view?usp=sharing" target='blank'>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto">
                    Frontend Resume
                  </button>
                </a>
              </div>
              <div>
                <a href="https://drive.google.com/file/d/1mRf3z_xVvJpnb3Rbto0rZJ2Kjg5uJ8wy/view?usp=sharing" target='blank'>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto">
                    CV
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className='mt-6 md:mt-0'>
            <img src={Profile} alt="" className='w-full p-5 rounded-lg' />
          </div>
        </div>



        {/* skill section */}
        <div id="skills" className="py-12 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white">Technical Skills:</h2>
            <div >
              <h2 className='mt-4 text-2xl font-semibold text-white'>Expertise:</h2>
              <div className="mt-6 grid  gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                <div className="p-4 bg-white hover:bg-blue-900 rounded-lg shadow-md ">
                  <h3 className="text-1xl hover:text-white  font-semibold text-gray-900">HTML</h3>

                </div>
                <div className="p-4 bg-white  hover:bg-blue-900 rounded-lg shadow-md">
                  <h3 className="text-1xl hover:text-white font-semibold text-gray-900">CSS</h3>

                </div>

                <div className="p-4 bg-white  hover:bg-blue-900 rounded-lg shadow-md">
                  <h3 className="text-1xl hover:text-white font-semibold text-gray-900">Bootstrap</h3>

                </div>
                <div className="p-4 bg-white  hover:bg-blue-900 rounded-lg shadow-md">
                  <h3 className="text-1xl hover:text-white font-semibold text-gray-900">Tailwind CSS</h3>

                </div>
                <div className="p-4 bg-white  hover:bg-blue-900 rounded-lg shadow-md">
                  <h3 className="text-1xl hover:text-white font-semibold text-gray-900">Python</h3>

                </div>
                <div className="p-4 bg-white  hover:bg-blue-900 rounded-lg shadow-md">
                  <h3 className="text-1xl hover:text-white font-semibold text-gray-900">Django</h3>

                </div>
                <div className="p-4 bg-white  hover:bg-blue-900 rounded-lg shadow-md">
                  <h3 className="text-1xl hover:text-white font-semibold text-gray-900">Django Rest Framework</h3>

                </div>
              </div>
              {/* Add more skill items as needed */}
            </div>
            <div >
              <h2 className='mt-4 text-2xl font-semibold text-white'>Comportable:</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5">
                <div className="p-4 bg-white  hover:bg-blue-900 rounded-lg shadow-md">
                  <h3 className="text-1xl hover:text-white font-semibold text-gray-900">DATA STRUCTURE</h3>

                </div>
                <div className="p-4 bg-white  hover:bg-blue-900 rounded-lg shadow-md">
                  <h3 className="text-1xl hover:text-white font-semibold text-gray-900">ALGORITHMS</h3>

                </div>
                <div className="p-4 bg-white  hover:bg-blue-900 rounded-lg shadow-md">
                  <h3 className="text-1xl hover:text-white font-semibold text-gray-900">SQL</h3>

                </div>
                <div className="p-4 bg-white  hover:bg-blue-900 rounded-lg shadow-md">
                  <h3 className="text-1xl hover:text-white font-semibold text-gray-900">oop</h3>

                </div>
                <div className="p-4 bg-white  hover:bg-blue-900  hover:bg-blue-900 rounded-lg shadow-md">
                  <h3 className="text-1xl hover:text-white font-semibold text-gray-900">REST API (DRF)</h3>

                </div>
                <div className="p-4 bg-white  hover:bg-blue-900 rounded-lg shadow-md">
                  <h3 className="text-1xl hover:text-white font-semibold text-gray-900">MYSQL</h3>

                </div>
                <div className="p-4 bg-white  hover:bg-blue-900 rounded-lg shadow-md">
                  <h3 className="text-1xl hover:text-white font-semibold text-gray-900">POSTGRESQL</h3>

                </div>
                <div className="p-4 bg-white  hover:bg-blue-900 rounded-lg shadow-md">
                  <h3 className="text-1xl hover:text-white font-semibold text-gray-900">System Design</h3>

                </div>
              </div>
              {/* Add more skill items as needed */}
            </div>
            <div >
              <h2 className='mt-4 text-2xl font-semibold text-white'>Familiar:</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5">


                <div className="p-4 bg-white  hover:bg-blue-900 rounded-lg shadow-md">
                  <h3 className="text-1xl hover:text-white font-semibold text-gray-900">JavaScript</h3>

                </div>
                <div className="p-4 bg-white   hover:bg-blue-900 rounded-lg shadow-md">
                  <h3 className="text-1xl hover:text-white font-semibold text-gray-900">REACT</h3>

                </div>
                <div className="p-4 bg-white   hover:bg-blue-900 rounded-lg shadow-md">
                  <h3 className="text-1xl hover:text-white font-semibold text-gray-900">AWS</h3>

                </div>
              </div>
              {/* Add more skill items as needed */}
            </div>
            <div >
              <h2 className='mt-4 text-2xl font-semibold text-white'>Tools:</h2>
              <div className="mt-6 grid  grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5">


                <div className="p-4 bg-white  hover:bg-blue-900 rounded-lg shadow-md">
                  <h3 className="text-1xl hover:text-white font-semibold text-gray-900">VS CODE</h3>

                </div>
                <div className="p-4 bg-white  hover:bg-blue-900 rounded-lg shadow-md">
                  <h3 className="text-1xl hover:text-white font-semibold text-gray-900">GIT</h3>

                </div>
                <div className="p-4 bg-white  hover:bg-blue-900 rounded-lg shadow-md">
                  <h3 className="text-1xl hover:text-white font-semibold text-gray-900">RENDER</h3>

                </div>
                <div className="p-4 bg-white  hover:bg-blue-900 rounded-lg shadow-md">
                  <h3 className="text-1xl hover:text-white font-semibold text-gray-900">DEV TOOL</h3>

                </div>
                <div className="p-4 bg-white  hover:bg-blue-900 rounded-lg shadow-md">
                  <h3 className="text-1xl hover:text-white font-semibold text-gray-900">POSTMAN</h3>

                </div>
              </div>
              {/* Add more skill items as needed */}
            </div>

          </div>
        </div>
        {/* about me section */}
        <section id="about" className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900">About Me</h2>
            <div className="mt-6 ">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">I am Md. Anisul Islam.</h3>
                <p className="mt-2 text-gray-600">
                  When I was studying at my college that time I dreamed that I wanted to be a good software engineer. After 3 years of continuous struggle. Now, I am a Software Engineer and work on Django. Which is Python framework and Python is a popular language. This long journey to fulfill my dream with the help of so many members. For the first time, my coding journey was started with javascript which was exceptional and the Web development journey started. 1-1.5 years later I learned the fundamental concept of computer science. Doing problem-solving around 500+ problems to see how works data structure and algorithms. Then I again moved to the software development field. Now, I am very happy with my life. I believe that my acquired knowledge will have a good impact on the software development industry. My hobbies is reading,coding,playing cricket,Cooking etc.
                </p>
              </div>


            </div>
          </div>
        </section>



        {/* project section */}
        <section id='projects' className="py-12 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-slate-100">Django and React Projects</h2>
            <div className="mt-6 space-y-8">
              {/* First Project */}
              <div className="flex flex-col sm:flex-row bg-white shadow-md rounded-lg overflow-hidden p-4 sm:p-6">
                <img className="w-full sm:w-1/3 h-auto object-cover aspect-w-16 aspect-h-9" src={pImg1} alt="Project 1" />
                <div className="p-4 sm:p-6 flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">➤ The Lakefront - Hotel Booking Site</h3>
                  <h4 className="text-lg font-bold text-gray-900 mt-2">Features:</h4>
                  <p className="mt-2 text-gray-600">
                    1. Users receive an email for verification after registering. Once verified, they can access their resources.
                    <br />
                    2. Users can book a hotel after depositing money into their balance and receive a confirmation email.
                    <br />
                    3. Authenticated users who stayed at a hotel can write reviews. They can update and delete reviews in the profile section.
                  </p>
                  <div className="mt-4 flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="https://github.com/manisulislam/hotel_booking" className="inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900" target='blank'>GitHub</a>
                    {/* <a href="https://hotel-booking-r726.onrender.com/" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-900" target='_blank'>Live Link</a> */}
                  </div>
                </div>
              </div>
              {/* Second Project */}
              <div className="flex flex-col sm:flex-row bg-white shadow-md rounded-lg overflow-hidden p-4 sm:p-6">
                <img className="w-full sm:w-1/3 h-auto object-cover aspect-w-16 aspect-h-9" src={secondImg} alt="Project 2" />
                <div className="p-4 sm:p-6 flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">➤ Eco Elite Empire</h3>
                  <h4 className="text-lg font-bold text-gray-900 mt-2">Features:</h4>
                  <p className="mt-2 text-gray-600">
                    1. Authentication and Authorization using Djoser, with email verification.
                    <br />
                    2. Email Notifications for user interactions.
                    <br />
                    3. Developed a user-friendly UI/UX with React and Tailwind CSS.
                    <br />
                    4. Managed state using Redux Toolkit for user, cart, shipping, etc.
                    <br />
                    5. Integrated SSLCommerz sandbox for payment processing.
                    <br />
                    6. Users can write reviews, with a client dashboard to view overall activity.
                  </p>
                  <div className="mt-4 flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="https://github.com/manisulislam/eco_lite_empire_frontend" className="inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900" target='blank'>Frontend</a>
                    <a href="https://github.com/manisulislam/eco_elite_empire_backend" className="inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900" target='blank'>Backend</a>
                  </div>
                </div>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-100">Frontend Projects</h2>

              {/* thrid project  */}
              <div className="flex flex-col sm:flex-row bg-white shadow-md rounded-lg overflow-hidden p-4 sm:p-6">
                <img className="w-full sm:w-1/3 h-auto object-cover aspect-w-16 aspect-h-9" src={thirdImg} alt="Project 2" />
                <div className="p-4 sm:p-6 flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">➤ NEXT CODE PVT LTD</h3>
                  <h4 className="text-lg font-bold text-gray-900 mt-2">Features:</h4>
                  <p className="mt-2 text-gray-600">
                    1. Responsive Design: Optimized for all device sizes, ensuring a smooth user experience across desktops, tablets,
                    and smartphones
                    <br />
                    2. Interactive UI: Engaging, user-friendly interfaces with intuitive navigation and dynamic interactions.

                    <br />
                    3. Modern Technologies: Built with cutting-edge frontend frameworks like React, Angular, and Vue.js to ensure
                    high performance and maintainability.
                    <br />
                    4. Cross-Browser Compatibility: Ensures consistent user experience across all major browsers.

                  </p>
                  <div className="mt-4 flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="https://next-code-pvt-ltd.netlify.app/" className="inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900" target='blank'>Frontend</a>
                    <a href="https://github.com/manisulislam/next-code-pvt-ltd" className="inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900" target='blank'>Github</a>
                  </div>
                </div>
              </div>

              {/* fourth projects */}
              <div className="flex flex-col sm:flex-row bg-white shadow-md rounded-lg overflow-hidden p-4 sm:p-6">
                <img className="w-full sm:w-1/3 h-auto object-cover aspect-w-16 aspect-h-9" src={fourthImg} alt="Project 2" />
                <div className="p-4 sm:p-6 flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">➤ RSA Cryptography </h3>
                  <h4 className="text-lg font-bold text-gray-900 mt-2">Features:</h4>
                  <p className="mt-2 text-gray-600">
                    1. RSA Encryption & Decryption: Users can generate public and private keys, and use them to encrypt and
                    decrypt messages securely
                    <br />
                    2. Key Pair Generation: The tool allows users to generate RSA key pairs with customizable key sizes (e.g., 512-bit,
                    1024-bit).

                    <br />
                    3. Secure Communication: The application facilitates secure message transmission using RSA is asymmetric
                    encryption principles.

                    <br />
                    4. Interactive UI: User-friendly interface that simplifies the RSA process with clear instructions and real-time
                    updates.
                    <br />
                    5. Educational Purpose: Aimed at helping users understand the fundamental principles of public-key cryptography
                    through hands-on interaction.


                  </p>
                  <div className="mt-4 flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="https://cryptography-bitwise-thinkers.netlify.app/" className="inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900" target='blank'>Frontend</a>
                    <a href="https://github.com/manisulislam/cryptograpy_tool" className="inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900" target='blank'>Github</a>
                  </div>
                </div>
              </div>
              {/* Repeat the above structure for each project card */}
            </div>
          </div>
        </section>



        {/* experinece section */}
        <Experience />

        {/* timeline education*/}
        <section id="education" className="px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-white font-semibold text-2xl my-4 px-5 text-center sm:text-left">
            My Education
          </h1>

          <div className="max-w-2xl mx-auto">
            <ol className=" border-l border-gray-200 dark:border-gray-700">
              <li className="mb-10 ml-2 sm:ml-4">
                <div
                  className=" w-3 h-3 bg-gray-200 rounded-full -left-1.5 sm:-left-2.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                ></div>

                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  August 2022
                </time>
                <h3 className="text-lg font-semibold text-slate-100 dark:text-white">
                  Admission In Port City International University, Chattogram. My Dream Department which is CSE
                </h3>
              </li>

              <li className="mb-10 ml-2 sm:ml-4">
                <div
                  className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 sm:-left-2.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                ></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  March 2020
                </time>
                <h3 className="text-lg font-semibold text-slate-100 dark:text-white">
                  Completed Higher Secondary Certificate from Raozan Govt. College, Chattogram
                </h3>
              </li>

              <li className="ml-2 sm:ml-4 mb-12">
                <div
                  className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 sm:-left-2.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                ></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  April 2022
                </time>

                <h3 className="text-lg font-semibold text-slate-100 dark:text-white">
                  Completed Secondary School Certificate from Raozan Govt. College, Chattogram
                </h3>
              </li>
            </ol>
          </div>
        </section>


        {/* Contact us section */}
        <section id="contact" className="py-12 bg-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Contact</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-center">

                <p className="text-gray-800">Baborer Bari, Sultatpur,<br />7 no ward,4340 <br />Raozan, Pouroshava, Chattogram</p>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M20 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM7 19H5V9h2v10zm1-11.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm9.14 8.65c0-2.95-4-5.3-9-5.3s-9 2.35-9 5.3v1.25h18v-1.25z" clipRule="evenodd" />
                </svg>
                <a href="tel:+1234567890" className="text-gray-800">(+880) 01608927009 (whatsapp) (telegram)</a>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.47 17.97H7V10.6h2.47v7.38zm-1.24-8.66c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm8.75 8.66h-2.48V13.6c0-.47.16-.78.53-.93.35-.15.82-.18 1.29-.18.47 0 .8.05 1.03.18.21.12.35.34.35.64v4.04h-2.47v-3.22c0-.24-.12-.47-.36-.57-.24-.1-.61-.15-1.07-.15-.48 0-.84.15-1.09.36-.24.21-.36.5-.36.81v2.77H12v-3.21c0-.47.16-.78.53-.93.35-.15.82-.18 1.29-.18.47 0 .8.05 1.03.18.21.12.35.34.35.64v4.04z" clipRule="evenodd" />
                </svg>
                <a href="mailto:anisulislam980340@gamil.com" className="text-gray-800">anisulislam9834@gamil.com</a>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M20 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-2.235 3.024c.526 0 .95.426.95.95v12.052c0 .524-.424.95-.95.95H8.236a.95.95 0 0 1-.95-.95V5.974c0-.524.424-.95.95-.95h9.529zM12 14.5v-7M9.5 12h5" clipRule="evenodd" />
                </svg>
                <a href="https://www.linkedin.com/in/mdanisul340/" className="text-gray-800" target="blank">LinkedIn</a>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.47 17.97H7V10.6h2.47v7.38zm-1.24-8.66c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm8.75 8.66h-2.48V13.6c0-.47.16-.78.53-.93.35-.15.82-.18 1.29-.18.47 0 .8.05 1.03.18.21.12.35.34.35.64v4.04h-2.47v-3.22c0-.24-.12-.47-.36-.57-.24-.1-.61-.15-1.07-.15-.48 0-.84.15-1.09.36-.24.21-.36.5-.36.81v2.77H12v-3.21c0-.47.16-.78.53-.93.35-.15.82-.18 1.29-.18.47 0 .8.05 1.03.18.21.12.35.34.35.64v4.04z" clipRule="evenodd" />
                </svg>
                <a href="https://github.com/manisulislam" className="text-gray-800" target="blank">GitHub</a>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M19.684 2H4.316C3.512 2 3 2.512 3 3.316v15.368C3 19.488 3.512 20 4.316 20h7.105v-6.973h-1.924v-2.725h1.924V9.082c0-1.899 1.161-2.929 2.85-2.929.812 0 1.512.059 1.716.086v2.1h-1.176c-.927 0-1.107.441-1.107 1.088v1.426h2.215l-.289 2.725h-1.926V20h3.784c.805 0 1.317-.512 1.317-1.316V3.316C21 2.512 20.488 2 19.684 2z" clipRule="evenodd" />
                </svg>
                <a href="https://www.facebook.com/profile.php?id=100055382937194" className="text-gray-800" target="blank">Facebook</a>
              </div>
            </div>
          </div>
        </section>
        {/* footer */}
        <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
            <li>
              <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</a>
            </li>
            <li>
              <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-500 hover:underline dark:text-gray-400">Contact</a>
            </li>
          </ul>
        </footer>
      </main>
    </>
  )
}

export default App
