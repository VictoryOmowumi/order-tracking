import React from 'react'
import TopContainer from '../components/TopContainer'
import BottomContainer from '../components/BottomContainer'

const Main = ({
    trackingStages,
    error
}) => {



  return (
    <main className="w-full min-h-screen flex  main-container flex-col justify-between text-white">
      <section className="">
        <TopContainer />
      </section>
      <section className="">
        <BottomContainer 
          trackingStages={trackingStages}
          error={error}
         />
      </section>
    </main>
  )
}

export default Main