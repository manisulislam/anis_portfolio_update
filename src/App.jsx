
import './App.css';
import Profile from "./assets/anisimage.png";



function App() {


  return (
    <>
      <header>
        <div className="container m-auto">
          <div className='flex justify-between items-center px-4 py-6 m-5'>
            <div>
              <a href="#" className='font-extrabold text-2xl text-white'> MD. ANISUL ISLAM</a>
            </div>
            <div>
              <ul className='flex gap-3'>
                <li className='text-gray-400 cursor-pointer hover:text-white font-bold'>Projects</li>
                <li className='text-gray-400 cursor-pointer hover:text-white font-bold'>Skills</li>
                <li className='text-gray-400 cursor-pointer hover:text-white font-bold'>About me</li>
                <li className='text-gray-400 cursor-pointer hover:text-white font-bold'>Contact us</li>
                <li className='text-gray-400 cursor-pointer hover:text-white font-bold'>Education</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* main section */}
      <main>
        {/* banner */}
        <div className='flex justify-center items-center p-2 mt-5'>
          <div className='p-5'>
            <h2 className='text-2xl font-bold text-white '>I am MD. Anisul Islam</h2>
            <h2 className='text-2xl font-bold  mt-2 text-blue-700'>Backend Developer (Django)</h2>
            <p className='text-1xl font-bold text-white mt-4'>I love keeping up with <br /> the latest tech trends and turning <br /> cool ideas into real things and, <br /> Knowledge of web applications writing code with optimization.</p>
            <div className='flex gap-4'>
              <div>
                <a href="https://drive.google.com/file/d/1AVp7lqdVOWvF0IuxZ12OTt8dUcu-CTLP/view?usp=sharing" target='blank'>
                  <button className="bg-blue-500 hover:bg-blue-700 mt-6 text-white font-bold py-2 px-4 rounded">
                    Resume
                  </button>
                </a>
              </div>
              <div>
                <a href="https://drive.google.com/file/d/17sD5On3l_lmjab_OI55HseuBjjtg5LHj/view?usp=sharing" target='blank'>
                  <button className="bg-blue-500 hover:bg-blue-700 mt-6 text-white font-bold py-2 px-4 rounded">
                    CV
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src={Profile} alt="" className='w-full p-10' />
          </div>
        </div>
    {/* skill section */}
        <div className="py-12 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white">Technical Skills:</h2>
            <div >
            <h2 className='mt-4 text-2xl font-semibold text-white'>Expertise:</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5">
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
                <h3 className="text-1xl hover:text-white font-semibold text-gray-900">Python</h3>
               
              </div>
              <div className="p-4 bg-white  hover:bg-blue-900 rounded-lg shadow-md">
                <h3 className="text-1xl hover:text-white font-semibold text-gray-900">Django</h3>
               
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
              </div>
              {/* Add more skill items as needed */}
            </div>
            
          </div>
        </div>
        {/* timeline education*/}
        <section>
          <h1 className='text-white font-semibold text-2xl my-4 px-5'>My Education</h1>
          {/* <!-- This is an example component --> */}
          <div className="max-w-2xl mx-auto">



            <ol className="relative border-l border-gray-200 dark:border-gray-700">


              <li className="mb-10 ml-2">
                <div
                  className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                </div>


                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2022</time>
                <h3 className="text-lg font-semibold text-slate-100 dark:text-white">Admission In Port City Internationa University, Chattogram. My Dream Department which is CSE</h3>
              </li>
              <li className="mb-10 ml-4">
                <div
                  className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                </div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2020</time>
                <h3 className="text-lg font-semibold text-slate-100  dark:text-white">Completed Higher Secondary Certificate from Raozan Govt. College, Chattogram</h3>

              </li>
              <li className="ml-4 mb-12">
                <div
                  className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                </div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>

                <h3 className="text-lg font-semibold text-slate-100  dark:text-white">Completed Secondary School Certificate from Raozan Govt. College, Chattogram</h3>
              </li>
            </ol>

          </div>
        </section>
        {/* footer */}
        <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
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
