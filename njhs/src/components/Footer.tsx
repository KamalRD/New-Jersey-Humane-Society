import { useState, FormEvent, FormEventHandler } from 'react'
import { Link } from 'react-router-dom';
import { z } from "zod";

// Data
import FooterData from "../mock-data/footer.json";

// Types
import { FooterElement, FooterSubElement, EmailSignupError } from '../types/footer';

// Functions
import { buildClassNames, getZodErrorMessage } from "../utils/utils";

const submitEmailSchema = z.string().min(1, { message: "To stay in touch, please fill out this field"}).email("The email you entered is invalid");
const inputEmailSchema = z.string().email("The email you entered is invalid");


export default function Footer() {
    const [ userEmail, setUserEmail ] = useState<string>("");
    const [ emailError, setEmailError ] = useState<EmailSignupError>({ status: false, message: ""});

    const updateUserEmail = (newUserEmail: string) => {
        setUserEmail(newUserEmail);

        if (newUserEmail.length > 5) {
            const parsingResult = inputEmailSchema.safeParse(newUserEmail);        
            if (!parsingResult.success) {
                setEmailError({
                    status: true,
                    message: getZodErrorMessage(parsingResult.error),
                });
            } else {
                setEmailError({
                    status: false,
                    message: ""
                })
            }
        } else {
            setEmailError({
                status: false,
                message: ""
            })
        }
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Create FormData & Get Email
        const formData: FormData = new FormData(event.currentTarget);
        const email: string = (formData.get("email") as string);
        const parsingResult = submitEmailSchema.safeParse(email);
        
        if (!parsingResult.success) {
            setEmailError({
                status: true,
                message: getZodErrorMessage(parsingResult.error),
            });
        } else {
            setEmailError({
                status: false,
                message: ""
            });
            console.log("Successful Submission");
        }
    };


    return (
        <>
            <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid md:gap-8 gap-6 row-gap-10 mb-8 lg:grid-cols-6">
                    <div className="md:max-w-md lg:col-span-2 mx-auto">
                        <Link to="/" aria-label="Go home" title="Company" className="inline-flex items-center">
                            <img 
                                src="/navbar/logo.webp"
                                alt="New Jersey Humane Society Logo"
                                className="object-fit md:max-h-40 max-h-20"
                            ></img>
                        </Link>
                    </div>
                <div className="grid grid-cols-2 gap-5 row-gap-4 lg:col-span-4 md:grid-cols-4 md:max-w-[650px] max-w-fit mx-auto">
                    {FooterData.footerItems.map((footerItem: FooterElement) => {
                        if (footerItem.subItems) {
                            return (
                                <div key={footerItem.text} className='max-w-34'>
                                    <Link to={footerItem.link} key={footerItem.text}>
                                    <p className="font-semibold">
                                        {footerItem.text}
                                    </p>
                                    </Link>
                                    <ul className="mt-2 space-y-2">
                                        {footerItem.subItems.map((subItem: FooterSubElement) => {
                                            return (
                                                <li key={subItem.text}>
                                                    <Link to={subItem.link} className="transition-colors duration-300 text-black hover:text-[#355796] hover:font-medium">
                                                        {subItem.text}
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            );
                        }
                        return (
                            <div key={footerItem.text} className='max-w-34'>
                                <Link to={footerItem.link} key={footerItem.text}>
                                    <p className="font-semibold">
                                        {footerItem.text}
                                    </p>
                                </Link>
                            </div>
                        )
                    })}
                    <div className='md:col-span-3 pt-6 col-span-2'>
                        <span className="text-black md:text-left text-center">Subscribe for the latest updates, heartwarming stories, and special offers from us and our four-legged friends.</span>
                        <form onSubmit={handleSubmit} className="flex flex-col mt-4 md:flex-row">
                            <input
                                autoCapitalize='true'
                                name='email'
                                onChange={(e) => updateUserEmail(e.target.value)}
                                placeholder="Enter Your Email"
                                type="text"
                                value={userEmail}
                                className={buildClassNames(emailError.status ? "border-red-700 focus:border-red-700" : "", "flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-[#355796] focus:outline-none focus:shadow-outline")}
                            />
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center h-12 px-6 font-medium text-white bg-[#355796] transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Subscribe
                            </button>
                        </form>
                        {emailError.status && (
                            <span className="text-red-700 text-sm">{emailError.message}</span>
                        )}
                    </div>
                </div>
                </div>
                <div className="flex flex-col justify-between pt-5 pb-10 border-t-2 border-[#355796] sm:flex-row">
                    <p className="text-sm text-black">
                        © Copyright 2024 New Jersey Humane Society | All Rights Reserved
                    </p>
                    <div className="flex items-center mt-4 space-x-4 sm:mt-0 sm:justify-center mx-auto md:mx-0">
                        <a href="/" className="transition-colors duration-300 text-black hover:text-[#355796]">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                            <path
                            d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                            ></path>
                        </svg>
                        </a>
                        <Link to="https://www.instagram.com/njhumanesociety/" target="_blank" className="transition-colors duration-300 text-black hover:text-[#355796]">
                            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                                <circle cx="15" cy="15" r="4"></circle>
                                <path
                                d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                                ></path>
                            </svg>
                        </Link>
                        <Link to="https://www.facebook.com/njhumanesociety/" target="_blank" className="transition-colors duration-300 text-black hover:text-[#355796]">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path
                                d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                                ></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
  )
}
