// import React from 'react'
import GoelGanga from "../Components/Images/Logos/GoelGanaga.png"
import CKdeveloper from "../Components/Images/Logos/CKdeveloper.png"
import senses from "../Components/Images/Logos/senses.png"
import nandan from "../Components/Images/Logos/nandan.png"
import Jhamtani from "../Components/Images/Logos/Jhamtani.png"


export const Logos
 = () => {
  return (
    <div>
        

        <section>
  {/* <!-- Container --> */}
  <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
    {/* <!-- Title --> */}
    <h5 className="mb-6 text-center text-xl font-bold md:mb-10 lg:mb-12"> The Indias well-known companies use Print Express.</h5>
    {/* <!-- Component --> */}
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-6">
      <img className="mx-auto" src={GoelGanga} alt="" />
      <img className="mx-auto" src={Jhamtani} alt="" />
      <img className="mx-auto" src={nandan} alt="" />
      <img className="mx-auto mt-4" src={senses} alt="" />
      <img className="mx-auto" src={CKdeveloper} alt="" />
    </div>
  </div>
</section>

    </div>
  )
}
