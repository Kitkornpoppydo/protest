import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-[#4E73DF] h-screen'>
        <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
            <h1 className='text-white text-[20px] leading-[24px] font-semibold cursor-pointer'>
            บันทึกรายการการปฎิบัติงานประจำวัน
            </h1>
        </div>
        <div className='flex items-center gap-[15px] py-[20px] border-b-[1px]'>
            <h5 className='text-[14px] leading-[20px] font-bold text-white cursor-pointer text-center'>
               หน้าบันทึก
            </h5>
        </div>
       
    </div>
  )
}

export default Sidebar