import React from 'react'

const DashboardItemsHeader = () => {
  return (
    <div>
        <header className='pt-24 px-3 pr-5 flex items-center justify-between gap-3 pb-6 bg-zinc-200 shadow-md my-4'>
                <div className="flex gap-2 items-center">
                    <img src="public/images/profile.jpg" className='w-16 h-16 rounded-full' alt="profile picture" />
                    <span className="text-teal-900 text-xl"> Hello,<br></br> Don Alvin</span>
                </div>
                <div className="h-auto w-auto p-1 py-4 flex flex-col items-center border border-teal-900 shadow-md rounded">
                    <h6 className='text-center text-slate-700'>Total Projects</h6>
                    <span className='text-teal-900'>5</span>
                </div>
                <div className="h-auto w-auto p-1 py-4 flex flex-col items-center border border-teal-900 shadow-md rounded">
                    <h6 className='text-center text-slate-700'>Projects Completed</h6>
                    <span className='text-teal-900'>2</span>
                </div>
                <div className="h-auto w-auto p-1 py-4 flex flex-col items-center border border-teal-900 shadow-md rounded">
                    <h6 className='text-center text-slate-700'>Active Projects</h6>
                    <span className='text-teal-900'>3</span>
                </div>
                <div className="h-auto w-auto p-1 py-4 flex flex-col items-center border border-teal-900 shadow-md rounded">
                    <h6 className='text-center text-slate-700'>Projects Underreview</h6>
                    <span className='text-teal-900'>1</span>
                </div>
            </header>
    </div>
  )
}

export default DashboardItemsHeader