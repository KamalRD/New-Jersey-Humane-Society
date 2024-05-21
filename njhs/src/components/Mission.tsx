import React from 'react'

export default function Mission() {
  return (
    <div className='py-8 md:w-[80%] w-[90%] mx-auto'>
        <h1 className='text-center pb-2 text-2xl font-bold'>Our Mission</h1>
        <div className='md:grid grid-cols-3 gap-x-4 hidden'>
            <p className='col-span-2 max-h-fit'>At the New Jersey Humane Society, we are dedicated to protecting and rescuing stray and domesticated animals across Hudson County and Northern New Jersey. 
                As a proud No-Kill shelter, our mission is to find safe, loving homes for every animal in our care. Our friendly and knowledgeable team is committed to making every adoption process a positive experience. 
                We invite you to visit us and meet the wonderful dogs and cats in need of forever homes. Together, we can ensure a brighter future for all animals.</p>
            <img src='/mission/dogsandcats.png' alt="Mission Statement - Dogs and Cats to Adpot" className='m-auto max-h-60 rounded-3xl border-2 border-[#355796] aspect-[D/C]'></img>
        </div>
        <div className='block md:hidden'>
            <p className='pb-4'>At the New Jersey Humane Society, we are dedicated to protecting and rescuing stray and domesticated animals across Hudson County and Northern New Jersey. 
                As a proud No-Kill shelter, our mission is to find safe, loving homes for every animal in our care.</p>
            <img src='/mission/dogsandcats.png' alt="Mission Statement - Dogs and Cats to Adpot" className='min-[525px]:max-w-[40%] max-w-[80%] mx-auto rounded-3xl border-2 border-[#355796] aspect-[D/C]'></img>
            <p className='pt-4'>Our friendly and knowledgeable team is committed to making every adoption process a positive experience. 
                We invite you to visit us and meet the wonderful dogs and cats in need of forever homes. Together, we can ensure a brighter future for all animals.</p>

        </div>
    </div>
  )
}
