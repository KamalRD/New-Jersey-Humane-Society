import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='w-full h-24 grid grid-cols-5 py-2 px-4'>
        <div className='col-span-1'>
            <Link to="/">
                <img 
                    src='logo.webp'
                    alt="New Jersey Humane Society Logo"
                    className='object-fit max-h-20'
                ></img>
            </Link>
        </div>
        <div className='col-start-2 col-end-5 grid grid-cols-4 justify-evenly w-10/12 m-auto text-center'>
            <Link to='/services'>
                <h1 className='text-xl'>Services</h1>
            </Link>
            <Link to='/about'>
                <h1 className='text-xl'>About</h1>
            </Link>
            <Link to='/contact'>
                <h1 className='text-xl'>Contact</h1>
            </Link>
            <Link to='/donate'>
                <h1 className='text-xl'>Donate</h1>
            </Link>
        </div>
    </div>
  )
}
