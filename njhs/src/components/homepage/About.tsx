export default function About() {

  return (
    <div className='bg-[#d7ddea]'>
      <div className='md:w-[80%] w-[90%] mx-auto py-8'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold'>About Us</h1>
          <h3 className='mx-auto'>At the New Jersey Humane Society, we are dedicated to the protection and rescue of stray and domesticated animals across Hudson County and Northern New Jersey. As a proud <strong>no-kill</strong> shelter, our mission is to ensure every animal in our care finds a safe, loving home. Our commitment to compassion drives us to provide the best possible outcomes for animals in need, reflecting our core values of kindness, protection, and community support.</h3>
        </div>
        <div className="flex md:flex-row flex-col justify-evenly py-6 gap-4">
          <div className='mx-auto h-full py-6 px-6 border-2 drop-shadow-lg rounded-lg border-[#355796] bg-white min-w-[250px] max-w-[350px] hover:border-4'>
              <div className="flex items-center justify-center">
                <img src='./services/adopt.svg' alt="Adoption Icon" height={48} width={48}></img>
              </div>
              <h1 className='text-center'>Alexander Saavedra</h1>
              <h3 className="text-center pb-1">Director</h3>
              <p className='pt-2'></p>
          </div>
          <div className='mx-auto h-full py-6 px-6 border-2 drop-shadow-lg rounded-lg border-[#355796] bg-white min-w-[250px] max-w-[350px] hover:border-4'>
              <div className="flex items-center justify-center">
                <img src='./services/adopt.svg' alt="Adoption Icon" height={48} width={48}></img>
              </div>
              <h1 className='text-center'>Lisa Menendez</h1>
              <h3 className="text-center text-balanced pb-1">Cotrol & Rescue Team Supervisor</h3>
              <p className='pt-2'></p>
          </div>
        </div>
      </div>
    </div>
  )
}