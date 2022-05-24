import React from "react";
import CountUp from 'react-countup';

const BuisnessSummary = () => {

  return (
    <div className="lg:px-16 mt-20">
      <div>
        <h1 className="text-center text-5xl text-[#28aaa9]">
          MILLION BUSINESS TRUST US
        </h1>
        <h2 className="text-center mt-2 text-2xl text-[#00003a]">
          TRY TO UNDERSTAND USERS EXPRESSION
        </h2>
      </div>

      <div>
        <div class="stats shadow w-full mt-12">
          <div class="stat">
            <div class="stat-figure text-[#28aaa9]  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                />
              </svg>
            </div>
            <div class="stat-value text-[#00033e]">
            <CountUp start={1} end={82} />
            </div>
            <div class="text-xl text-[#28aaa9]">Countries</div>
          </div>

          <div class="stat">
            <div class="stat-figure text-[#28aaa9]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div class="stat-value text-[#00033e]">2.6M</div>
            <div class="stext-xl text-[#28aaa9]">Website view</div>
          </div>

          <div class="stat">
            <div class="stat-figure text-[#28aaa9]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </div>
            <div class="stat-value text-[#00033e]"><CountUp start={100} end={1000} />+</div>
            <div class="stext-xl text-[#28aaa9]">Feedback</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuisnessSummary;
