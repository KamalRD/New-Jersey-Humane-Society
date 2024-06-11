import React from 'react'

export default function Donate() {
  return (
    <div className='py-8 md:w-[80%] w-[90%] mx-auto flex flex-col gap-y-4'>
      <h1 className='text-2xl font-bold text-center'>Make an Impact</h1>
      <div className='hidden md:block'>
        <h2 className='font-semibold text-xl'>Donate</h2>
        <div className='grid md:grid-cols-4'>
          <p className='col-span-3'>As non-profit organization, we rely on the support of you, our community, to help us. Your generous donations, whether they be monetary or physical make a huge impact on the lives of the animals we care for. Any and all monetary donations 
          go directly towards the improvement and expansion of our services. If you cannot or do not want to give monetarily, check out our Amazon Wishlist for much needed supplies. We also accept donations directly at our door.
          </p>
          <img src='./homepage/donate/donate.png' alt="Donate" className='m-auto md:w-[80%] lg:w-[60%] xl:w-[40%] 2xl:w-[20%] h-auto max-h-full aspect-square'></img>
        </div>
      </div>
      <div className='hidden md:block'>
        <h2 className='font-semibold text-xl'>Volunteer</h2>
        <div className='grid md:grid-cols-5'>
          <img src='./homepage/donate/volunteer.png' alt="Donate" className='my-auto md:w-[80%] lg:w-[60%] xl:w-[40%] 2xl:w-[20%] h-auto max-h-full aspect-square'></img>
          <p className='col-span-4'>We're always looking for help and are incredibly grateful to have it. Whether you can give us one time help, frequent support, or even join our team, we are excited to have you. To connect with us about volunteering to help our loveable dogs and cats find forever homes, please fill out this form or give us a call.</p>
        </div>
      </div>

      <div className='md:hidden block'>
        <h2 className='font-semibold text-xl'>Donate</h2>
        <div>
            <p>As non-profit organization, we rely on the support of you, our community, to help us. Your generous donations, whether they be monetary or physical make a huge impact on the lives of the animals we care for.</p>
            <img src='./homepage/donate/donate.png' alt="Donate" className='m-auto py-4 w-[60%] h-auto max-h-full aspect-square'></img>
            <p>Any and all monetary donations go directly towards the improvement and expansion of our services. If you cannot or do not want to give monetarily, check out our Amazon Wishlist for much needed supplies. We also accept donations directly at our door.</p>
        </div>
      </div>
      <div className='md:hidden block'>
        <h2 className='font-semibold text-xl'>Volunteer</h2>
        <div>
          <p className='col-span-2'>We're always looking for help and are incredibly grateful to have it. Whether you can give us one time help, frequent support, or even join our team, we are excited to have you.</p>
          <img src='./homepage/donate/volunteer.png' alt="Donate" className='m-auto py-4 w-[60%] h-auto max-h-full aspect-square'></img>
          <p>To connect with us about volunteering to help our loveable dogs and cats find forever homes, please fill out this form or give us a call.</p>
        </div>
      </div>
    </div>
  )
}
