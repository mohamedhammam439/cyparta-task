"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import RightVector from "./rightVector";
import DownVector from "./downVector";
import { usePathname } from 'next/navigation'
const Links = () => {
    const pathname = usePathname()
  
    const [showEmployee, setShowEmployee] = useState(false);
    const [showHolidays, setShowHolidays] = useState(false);
  
    const toggleEmployed = () => {
      setShowEmployee(!showEmployee);
    };
    const toggleHolidays = () => {
      setShowHolidays(!showHolidays);
    };
    return ( <>
     <div className="flex flex-row mb-8 pl-14">
        <Image
          src="/akar-icons_dashboard.png"
          width={26}
          height={26}
          alt="logo"
        />
        <Link href="/home/dashboard" className={`link ${pathname === '/home/dashboard' ? 'text-base font-medium	ml-5 text-active' : 'text-base font-medium	ml-5'}`}>Dashboard</Link>
      </div>
      <div className="flex flex-col mb-4">
        <div
          onClick={toggleEmployed}
          className={
            showEmployee
              ? "flex justify-between items-center mb-4 cursor-pointer  pl-14 py-3 pr-3 rounded-r-xl border-l-4 border-borderL bg-lightred"
              : "flex justify-between items-center mb-4 pr-3  pl-14 cursor-pointer"
          }
        >
          <div className="flex " >
            <Image
              src="/akar-icons_dashboard.png"
              width={26}
              height={26}
              alt="logo"
            />
            <div className="flex flex-row justify-between">
              <p
                
                className="block text-base font-medium ml-5 lg:mr-20 md:mr-5 sm:mr-2"
              >
                Employee
              </p>
            </div>
          </div>
          <div>
            <span className="toggle-icon">
              {showEmployee ? <DownVector /> : <RightVector  width={6} height={2}/>}
            </span>
          </div>
        </div>
        {showEmployee && (
          <>
            <div className="flex flex-row  pl-14  ml-5 mb-4">
              <Image
                src="/akar-icons_dashboard.png"
                width={26}
                height={26}
                alt="logo"
              />
               <Link href="/home/profile" className={`link ${pathname === '/home/profile' ? 'text-base font-medium	ml-5 text-active' : 'text-base font-medium	ml-5'}`}>
                Profile
              </Link>
             
            </div>
            <div className="flex flex-row  pl-14 ml-5 mb-4">
              <Image
                src="/akar-icons_dashboard.png"
                width={26}
                height={26}
                alt="logo"
              />
              <Link href="/profile" className="text-base font-medium	ml-5">
                Attendess
              </Link>
            </div>
            <div className="flex flex-row  pl-14 ml-5 mb-4">
              <Image
                src="/akar-icons_dashboard.png"
                width={26}
                height={26}
                alt="logo"
              />
              <Link href="/profile" className="text-base font-medium	ml-5">
                Tasks
              </Link>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-row mb-8 pl-14">
        <Image
          src="/akar-icons_dashboard.png"
          width={26}
          height={26}
          alt="logo"
        />
        <p className="text-base font-medium	ml-5">Payroll</p>
      </div>
      <div className="flex flex-col mb-4">
        <div
          onClick={toggleHolidays}
          className={
            showHolidays
              ? "flex justify-between items-center mb-4 cursor-pointer  pl-14 py-3 pr-3 rounded-r-xl border-l-4 border-borderL bg-lightred"
              : "flex justify-between items-center mb-4 pr-3  pl-14 cursor-pointer"
          }
        >
          <div className="flex " >
            <Image
              src="/akar-icons_dashboard.png"
              width={26}
              height={26}
              alt="logo"
            />
            <div className="flex flex-row justify-between">
              <p
                
                className="block text-base font-medium ml-5 lg:mr-20 md:mr-5 sm:mr-2"
              >
                Holidayes
              </p>
            </div>
          </div>
          <div>
            <span className="toggle-icon">
              {showHolidays ? <DownVector /> : <RightVector  width={6} height={2}/>}
            </span>
          </div>
        </div>
        {showHolidays && (
          <>
            <div className="flex flex-row  pl-14  ml-5 mb-4">
              <Image
                src="/akar-icons_dashboard.png"
                width={26}
                height={26}
                alt="logo"
              />
             <Link href="/profile" className="text-base font-medium	ml-5">
                Profile
              </Link>
            </div>
            <div className="flex flex-row  pl-14 ml-5 mb-4">
              <Image
                src="/akar-icons_dashboard.png"
                width={26}
                height={26}
                alt="logo"
              />
              <Link href="/profile" className="text-base font-medium	ml-5">
                Attendess
              </Link>
            </div>
            <div className="flex flex-row  pl-14 ml-5 mb-4">
              <Image
                src="/akar-icons_dashboard.png"
                width={26}
                height={26}
                alt="logo"
              />
              <Link href="/profile" className="text-base font-medium	ml-5">
                Tasks
              </Link>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-row mb-4 pl-14">
        <Image
          src="/akar-icons_dashboard.png"
          width={26}
          height={26}
          alt="logo"
        />
        <p className="text-base font-medium	ml-5">Advanced Payment</p>
      </div>
    </> );
}
 
export default Links;