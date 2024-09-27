import React, { useState } from 'react';

const Home = ({ addWork }) => {
  const [workType, setWorkType] = useState('Development');
  const [workName, setWorkName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [status, setStatus] = useState('ดำเนินการ');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const workItem = {
      workType,
      workName,
      startTime,
      endTime,
      status,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    addWork(workItem);
    // Reset form
    setWorkName('');
    setStartTime('');
    setEndTime('');
    setStatus('ดำเนินการ');
  };

  return (
    <div className="p-4">
      <div className='flex items-center mb-4'>
        <input
          type='text'
          className='bg-[#F8F9FC] h-[40px] outline-none pl-3 w-[350px] rounded-[5px] placeholder-[14px] leading-[20px] font-normal'
          placeholder='Search for'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className='bg-[#4E73DF] h-[40px] px-4 flex items-center justify-center cursor-pointer rounded-[5px] ml-2'> 
          Search
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700">ประเภทงาน:</span>
          <select
            value={workType}
            onChange={(e) => setWorkType(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="Development">Development</option>
            <option value="Test">Test</option>
            <option value="Document">Document</option>
          </select>
        </label>

        <label className="block">
          <span className="text-gray-700">ชื่องาน:</span>
          <input
            type="text"
            value={workName}
            onChange={(e) => setWorkName(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">เวลาเริ่ม:</span>
          <input
            type="datetime-local"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">เวลาสิ้นสุด:</span>
          <input
            type="datetime-local"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">สถานะ:</span>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="ดำเนินการ">ดำเนินการ</option>
            <option value="เสร็จสิ้น">เสร็จสิ้น</option>
            <option value="ยกเลิก">ยกเลิก</option>
          </select>
        </label>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          บันทึกงาน
        </button>
      </form>
    </div>
    
  );
};

export default Home;
