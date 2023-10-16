import React from 'react'
import Image from 'next/image'
import blog1 from '../img/blog1.webp'
import blog2 from '../img/blog2.webp'
import blog3 from '../img/blog3.webp'


function LatestNews() {
  return (
    <div className=' flex flex-col bg-slate-200'>
        <h1 className='text-center font-bold text-2xl p-1 mt-10 -mb-6 tracking-widest'>Latest News</h1>
        <div className='flex flex-row m-14 max-md:flex-col gap-6'>
        <div className='flex flex-col group hover:cursor-pointer'>
            <div>
            <Image src={blog1} alt='blog1' width={400} height={400} className='mb-2'></Image>
            </div>
            <div>
                <span className='text-sm text-slate-500'>Fashion Tips</span>
                <h1 className='text-xl mt-2 group-hover:text-violet-600'>What Curling Irons Are The Best Ones</h1>
                <p className='text-sm mt-2 mb-4 text-slate-600'>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                <button className='text-white bg-purple-600 p-2 transition duration-700 ease-in group-hover:bg-purple-800 group-hover:tracking-widest'>Read More</button>
            </div>
       </div>     

       <div className='flex flex-col group hover:cursor-pointer'>
            <div>
            <Image src={blog2} alt='blog1' width={400} height={400}></Image>
            </div>
            <div>
                <span className='text-sm text-slate-500'>Fashion Tips</span>
                <h1 className='text-xl mt-2 group-hover:text-violet-600'>What Curling Irons Are The Best Ones</h1>
                <p className='text-sm mt-2 mb-4 text-slate-600'>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                <button className='text-white bg-purple-600 p-2 transition duration-700 ease-in group-hover:bg-purple-800 group-hover:tracking-widest'>Read More</button>
            </div>
       </div>     

       <div className='flex flex-col group hover:cursor-pointer'>
            <div>
            <Image src={blog3} alt='blog1' width={400} height={400}></Image>
            </div>
            <div>
                <span className='text-sm text-slate-500'>Fashion Tips</span>
                <h1 className='text-xl mt-2 group-hover:text-violet-600'>What Curling Irons Are The Best Ones</h1>
                <p className='text-sm mt-2 mb-4 text-slate-600'>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                <button className='text-white bg-purple-600 p-2 transition duration-700 ease-in group-hover:bg-purple-800 group-hover:tracking-widest'>Read More</button>
            </div>
       </div>     
        </div>
         
    </div>
  )
}

export default LatestNews