import React from 'react';
import radisonlog from './radisonlog.jpg'

function Navbars() {
  return (
    <header className="">
      <div className=" mb-96">
        <div className="bg-gray-500 bg-opacity-75  ">
          <nav className="containere mx-auto px-6 py-3 md:flex md:justify-between md:items-center ">
            <div className=" flex items-center justify-between">
              <div className="md:flex  md:items-center ">
                <div class="text-transpalent bg-white rounded-full text-5xl ">
                  {" "}
                  HR
                </div>
                <div className="flex flex-col m-2 w-70">
                  <a
                    className="text-xl w-39 m-l-2 font-bold text-white hover:text-gray-700 text-white border-b-2  "
                    href="#"
                  >
                    RADISON
                  </a>
                  <a
                    className="text-xl w-39 m-l-2 font-bold text-white hover:text-gray-700 text-white"
                    href="#"
                  >
                    {" "}
                    Hotels
                  </a>
                </div>
                {/* <img src={rad} alt="rad" class=" h-16"/> */}
              </div>
              <div className="flex md:hidden">
                <button
                  type="button"
                  className="text-white hover:text-gray-600 focus:outline-none focus:text-gray-600"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M21 18.999H3v-2h18v2zm0-6H3v-2h18v2zm0-6H3V4h18v2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="md:flex md:items-center md:mx-6">
              <div className="flex flex-col md:flex-row md:mx-6 W-auto 64">
                <a
                  className="flex my-1 border-white border-2 rounded-full w-36 text-white hover:text-blue-600 md:mx-4 md:my-0 "
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                  GET THE APP
                </a>
                <a
                  oi
                  className="flex my-1 text-white hover:text-blue-600 md:mx-4 md:my-0"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  MY RESERVATIONNS
                </a>
                <a
                  className="flex my-1 text-white hover:text-blue-600 md:mx-4 md:my-0"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
                    />
                  </svg>
                  ENGLISH
                </a>
                <a
                  className="flex my-1 text-white hover:text-blue-600 md:mx-4 md:my-0 w-"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                    />
                  </svg>
                  +33315138080
                </a>
                <a
                  className=" flex my-1 text-white hover:text-blue-600 md:mx-4 md:my-0"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                    />
                  </svg>
                  EUR
                </a>
              </div>

              <button
                className="mr-3 bg-puple-900 rounded-md text-white  rounded hover:text-blue-600"
                href="#"
              >
                JOIN-SIGN IN
              </button>
            </div>
          </nav>
          <div className="flex flex-col md:flex-row md:mx-1 md:items-center md:flex md:items-center">
            <a
              className="my-1 text-sm text-white hover:text-blue-600 md:mx-2 md:my-0"
              href="#"
            >
              HOTELS
            </a>
            <a
              className="my-1 text-white hover:text-blue-600 md:mx-2 md:my-0"
              href="#"
            >
              DESTINATIONNS
            </a>
            <a
              className="my-1 text-white hover:text-blue-600 md:mx-4 md:my-0"
              href="#"
            >
              RADISSON REWARDS
            </a>
            <a
              className="my-1 text-white hover:text-blue-600 md:mx-4 md:my-0"
              href="#"
            >
              DEALS
            </a>
            <a
              className="my-1 text-white hover:text-blue-600 md:mx-4 md:my-0"
              href="#"
            >
              RADISSON MEETINGS
            </a>
            <a
              className="my-1 text-white hover:text-blue-600 md:mx-4 md:my-0"
              href="#"
            >
              EXPERIENCE
            </a>
            <a
              className="my-1 text-white hover:text-blue-600 md:mx-4 md:my-0"
              href="#"
            >
              DIGITAL SERVICES
            </a>
          </div>
          <div className=" flex  bg-white bg-opacity-50 mb-52 h-36 text-white">
            <div className="mb-4">
              <div class="flex mb-4 text-gray-200">
                HOM RWANDA KIGALI
                <span className="font-bord text-gray-700 ml-2">
                  {" "}
                  RADISSON BLU HOTEL & CONVETION CENTRE,KIGALI
                </span>
              </div>

              <span className="flex font-bold  text-black text-xl mb-3">
                Radisson Blu Hotel And Convetion Centre,Kigali
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-red-700 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
              </span>
              <div className="">
                <div className="flex flex-row md:flex-row md:mx-6 underline">
                  <a
                    className="flex my-1 border-l-2  border-gray-700 text-gray-700  hover:text-blue-600 md:mx-4 md:my-0"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    kigali Roundbout, kigali,Rwanda
                  </a>
                  <a
                    className="flex my-1 border-l-2  border-gray-700 text-gray-700  hover:text-blue-600 md:mx-4 md:my-0"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                      />
                    </svg>
                    +250 252252252
                  </a>
                  <a
                    className="flex my-1 border-l-2  border-gray-700 text-gray-700  hover:text-blue-600 md:mx-4 md:my-0"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    information kigali@radisonblu.com
                  </a>
                  <button class="bg-green-700 h-4 w-4 rounded-full color ">
                    {" "}
                  </button>{" "}
                  <button class="bg-green-700 h-4 w-4 rounded-full color ">
                    {" "}
                  </button>
                  <button class="bg-green-700 h-4 w-4 rounded-full color ">
                    {" "}
                  </button>{" "}
                  <button class="bg-green-700 h-4 w-4 rounded-full color ">
                    {" "}
                  </button>
                  <button class="bg-green-700 h-4 w-4 rounded-full color ">
                    {" "}
                  </button>
                  <a
                    className="flex my-1    text-red-500  hover:text-blue-600 md:mx-4 md:my-0"
                    href="#"
                  >
                    View 1486 Reviews
                  </a>
                </div>
              </div>

              <div className="flex md:hidden">
                <button
                  type="button"
                  className="text-white hover:text-gray-600 focus:outline-none focus:text-gray-600"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M21 18.999H3v-2h18v2zm0-6H3v-2h18v2zm0-6H3V4h18v2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div><div className=" flex align-l "></div>

      <div>
        <div className="ml-32 mr-32 p-8 bg-white">hello</div>
      </div>
    </header>
  );
}

export default Navbars;
