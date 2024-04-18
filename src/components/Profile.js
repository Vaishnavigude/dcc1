import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Profile() {
    const [close, setClose]= useState(false)
    function closeSidebar() {
        setClose(!close)
    }
  return (
    <>
    <div className='signup template d-flex justify-content-center align-items-center vh-150 bg-white'>
          <div className='form_container p-5 rounded bg-white '>
              <form className='border-3 border-black rounded-xl'>
              <h3 className='text-center'>My Profile</h3>
              <div className='bg-white h-[220px]  text-black rounded-xl'>
                          <div className='h-56 rounded-t-xl  flex justify-center items-center'>
                              <img src="/pimages/human.png" alt='' className='h-44 w-44 rounded-full border-2 border-black' />
                          </div>
                          </div>
                  <div className='mb-2'>
                      
                      <input type='text' placeholder='Vaishnavi' className='form-control' />
                  </div>
                  <div className='mb-2'>
                      <input type='text' placeholder='Gude' className='form-control' />
                  </div>
                  <div className='mb-2'>
                      
                      <input type='email' placeholder='Vaishnavigude1714@gmail.com' className='form-control' />
                  </div>
                  <div className='mb-2'>
                      <input type='password' placeholder='********' className='form-control' />
                  </div>
                  <div className='d-grid mt-2 mb-2 ml-5 mr-5'>
                      <button className='btn btn-primary'>Profile Changes</button>

                  </div>
              </form>
          </div>
      </div><div>
              <span className='absolute text-white text-4xl top-5 left-4 cursor-pointer' onClick={() => closeSidebar(!close)}>
                  <i className='bi bi-filter-left px-2 bg-gray-900 rounded-md'></i>
              </span>
              <div className={'${close ? "hidden":"block"} fixed top-0 bottom-0 lg:left-0 p-2 w-[200px] text-center bg-blue-900'}>
                  <div className='text-gray-100 text-xl'>
                      <div className='p-2.5 mt-1 flex items-center'>
                          <i className='bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600'></i>
                          <h1 className='font-bold text-gray-200 text-[15px] ml-3'>
                              Side Menu
                          </h1>
                          <i className='bi bi-x cursor-pointer ml-28 lg:hidden' onClick={() => closeSidebar(!close)}></i>
                      </div>
                      <div className='my-2 bg-gray-600 h-[1px]'></div>
                  </div>
                  <div className='p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white'>
                      <i className='bi bi-search text-sm'></i>
                      <input type="text"
                          placeholder='Search' className='text-[15px] ml-4 w-full bg-transparent focus:outline-none' />
                  </div>
                  <div className='p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
                      <i className='bi bi-house-door-fill text-sm'></i>
                      <span className='text-[15px] ml-4 text-gray-200 font-bold'>Home</span>
                  </div>
                  <div className='p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
                      <i className='bi bi-bookmark text-sm'></i>
                      <span className='text-[15px] ml-4 text-gray-200 font-bold'><Link to="/project" className='ms-2 no-underline text-white'>Project Lists</Link></span>
                  </div>
                  <div className='p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
                      <i className='bi bi-chat-left-text-fill text-sm'></i>
                      <span className='text-[15px] ml-4 text-gray-200 font-bold'><Link to="/Siteengineer" className='ms-2 no-underline text-white'>Site Engineer</Link></span>
                  </div>
                  <div className='p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
                      <i className='bi bi-box-arrow-in-right text-sm'></i>
                      <span className='text-[15px] ml-4 text-gray-200 font-bold'><Link to="/reports" className='ms-2 no-underline text-white'>Reports</Link></span>
                  </div>
                  <div className='p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
                      <i className='bi text-sm'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 20" fill="currentColor" aria-hidden="true" class="w-5 h-5">
                          <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd">
                          </path>
                      </svg></i>
                      <span className='text-[15px] ml-4 text-gray-200 font-bold'>
                          <Link to="/profile" className='ms-2 no-underline text-white'>Profile</Link>
                      </span>
                  </div>
                  <div className='p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
                      <i className=' text-sm'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                          class="w-5 h-5">
                          <path fill-rule="evenodd"
                              d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                              clip-rule="evenodd"></path>
                      </svg></i>
                      <span className='text-[15px] ml-4 text-gray-200 font-bold'><Link to="/Login" className='ms-2 no-underline text-white'>Logout</Link></span>
                  </div>

              </div>
          </div></>
    
)
}
export default Profile