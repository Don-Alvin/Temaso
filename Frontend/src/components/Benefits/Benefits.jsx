import React from 'react'
import { BsClipboardData, BsFiles, BsFillFilterSquareFill } from 'react-icons/bs'
import { TbTarget } from 'react-icons/tb'
import { SlCalender } from 'react-icons/sl'
import { IoSettingsSharp } from 'react-icons/io5'

const Benefits = () => {
  return (
    <div className='flex flex-col items-center mt-20 gap-20 px-10'>
        <div className="flex flex-col items-center gap-4">
            <h3 className='text-teal-900 text-5xl font-bold p-2 rounded-md'>Benefits</h3>
            <span className='text-slate-700 text-2xl'>You'll never miss a deadline!</span>
            <p className='text-slate-700 text-center'>With Proma.io, you will never miss a deadline because you lost<br></br> of your tasks.
                You can easily organize your day, track your goals<br></br> and become more productive
            </p>
        </div>
        <div className=" grid grid-cols-3 grid-rows-2 gap-6 px-40">
            <div className="flex flex-col items-start gap-4 rounded-2xl shadow-md p-3">
                <div className="bg-rose-200 p-3 rounded-lg">
                    <BsFiles className='text-rose-700 text-3xl'/>
                </div>
                <h5 className='text-lg text-teal-900 font-semibold'>Organize</h5>
                <p className='text-slate-700 font-normal text-sm'>Organize your tasks across multiple applications and don't lose track of your day</p>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-2xl shadow-md p-3">
                <div className="p-3 rounded-lg bg-blue-200">
                    <BsClipboardData className='text-3xl text-blue-700'/>
                </div>
                <h5 className='text-lg text-teal-900 font-semibold'>Track Progress</h5>
                <p className='text-slate-700 font-normal text-sm'>Proma.io can easily track your goals by assigning tasks. Ofcourse, you will follow your progress as well.</p>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-2xl shadow-md p-3">
                <div className="p-3 rounded-lg bg-yellow-200">
                    <TbTarget className='text-3xl text-yellow-500'/>
                </div>
                <h5 className='text-lg text-teal-900 font-semibold'>Set Goals</h5>
                <p className='text-slate-700 font-normal text-sm'>Once you set specific goals with time frames, you can organize and manage your workload.</p>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-2xl shadow-md p-3 ">
                <div className="p-3 rounded-lg bg-sky-200">
                    <BsFillFilterSquareFill className='text-3xl text-sky-700'/>
                </div>
                <h5 className='text-lg text-teal-900 font-semibold'>Limit Distractions</h5>
                <p className='text-slate-700 font-normal text-sm'>Concentrating on your work for extended in an organized workspace is much easier.</p>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-2xl shadow-md p-3 ">
                <div className="p-3 rounded-lg bg-amber-200">
                    <SlCalender className='text-3xl text-amber-700'/>
                </div>
                <h5 className='text-lg text-teal-900 font-semibold'>Calender Overview</h5>
                <p className='text-slate-700 font-normal text-sm'>Proma.io keeps you aware of what meetings and due dates you have coming up in your schedule.</p>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-2xl shadow-md p-3 ">
                <div className="p-3 rounded-lg bg-violet-200">
                    <IoSettingsSharp className='text-3xl text-violet-700'/>
                </div>
                <h5 className='text-lg text-teal-900 font-semibold'>Practice Accountability</h5>
                <p className='text-slate-700 font-normal text-sm'>Accountability includes keeping your to-do list in mind. You should evaluate your goal list, reflect on your progress and identify the steps you need to take.</p>
            </div>
        </div>
        <div className="w-full h-0.5 bg-slate-400"></div>
    </div>
  )
}

export default Benefits