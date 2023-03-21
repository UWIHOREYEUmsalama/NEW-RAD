import React from 'react'

export default function Cards () {
  return (
    <div>
      <div class=" flex ">
        <div className="flex max-w-sm">
          <Cards imgSrc="https://th.bing.com/th/id/R.01efccf205aef55f074b320b0ce34c1d?rik=o0L9QoNIebvsmQ&pid=ImgRaw&r=0">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Cards>
        </div>
      </div>
    </div>
  );
}
