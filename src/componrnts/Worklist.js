import React from 'react';

const Worklist = ({ works, deleteWork }) => {
  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h2 className="text-lg font-semibold mb-4">รายการงาน</h2>
      {works.length === 0 ? (
        <p className="text-gray-500">ยังไม่มีรายการงาน</p>
      ) : (
        <ul className="list-disc pl-5">
          {works.map((work, index) => (
            <li key={index} className="mb-2 flex justify-between items-center">
              <span className="text-gray-800">
                {work.workName} - <span className="font-bold">{work.status}</span>
              </span>
              <button
                onClick={() => deleteWork(index)}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                ลบ
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Worklist;
