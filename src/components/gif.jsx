import React from 'react';
import teacherGif from './gifFile.gif'; // Adjust path

const VirtualTeacher = () => {
  return (
    <div className="flex flex-col items-center mt-6 mx-h-40">
      <img src={teacherGif} alt="Animated Teacher" className="w-48 h-auto" />
      <p className="mt-2 font-semibold text-lg text-purple-700">Hi! I'm your Teacher 👩‍🏫</p>
    </div>
  );
};

export default VirtualTeacher;
