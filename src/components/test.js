import React from "react";

export default function Test() {
  return (
    <section className=" text-gray-200 bg-gray-900">
      <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-300 p-6 rounded-lg">
            <h2 className="text-lg  font-medium title-font mb-2">Hard Skill</h2>
            <ul className="flex flew-row-3 leading-relaxed text-base">
              <li>ReactJS / Chakra UI</li>
              <li>NodeJS / Express</li>
              <li>PostgreSQL</li>
              <li>JavaScript</li>
              <li>Ethereum / Solidity</li>
              <li>CSS3 / Bootstrap5</li>
              <li>HTML5</li>
            </ul>
          </div>
        </div>

        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-300 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 italic">
              <span className="font-bold text-sm ">Php</span>
            </div>
            <h2 className="text-lg  font-medium title-font mb-2">
              Guide complet des dates en PHP
            </h2>
            <p className="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waist co, subway tile
              poke farm.
            </p>

            <div className="text-center mt-2 leading-none flex justify-between w-full">
              <span className=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                <svg
                  className=" fill-current w-4 h-4 mr-2 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                </svg>
                40 min
              </span>
              <span className=" inline-flex items-center leading-none text-sm">
                <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <path
                      fill="#D8D8D8"
                      d="M9.2 6.583v11.08h3.5V6.583zm6.4 11.084h3.5V3h-3.5z"
                    />
                    <path fill="#667EEA" d="M2.6 17.667h3.5v-7.334H2.6z" />
                  </g>
                </svg>
                Débutant
              </span>
            </div>
          </div>
        </div>
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-300 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <svg
                className=" fill-current h-6 w-6 "
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>CSS3 icon</title>
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
              </svg>
            </div>
            <h2 className="text-lg  font-medium title-font mb-2">CSS avancé</h2>
            <p className="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waist co, subway tile
              poke farm.
            </p>

            <div className="text-center mt-2 leading-none flex justify-between w-full">
              <span className=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                <svg
                  className=" fill-current w-4 h-4 mr-2 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                </svg>
                2h 40 min
              </span>
              <span className=" inline-flex items-center leading-none text-sm">
                <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <path fill="#D8D8D8" d="M15.6 17.667h3.5V3h-3.5z" />
                    <path fill="#667EEA" d="M9.2 6.583v11.08h3.5V6.583z" />
                    <path fill="#667EEA" d="M2.6 17.667h3.5v-7.334H2.6z" />
                  </g>
                </svg>
                Débutant
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
