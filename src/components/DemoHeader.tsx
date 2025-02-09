import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDemo } from '../hooks/useDemo';
import { X } from 'lucide-react';

export const DemoHeader = () => {
  const navigate = useNavigate();
  const { endDemoSession } = useDemo();

  const handleExitDemo = () => {
    endDemoSession();
    navigate('/');
  };

  return (
    <div className="bg-[#2C5F2D] text-white py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm font-medium text-[#97BC62]">
          You're viewing a demo version. Any changes will be reset when you exit.
        </p>
        <button
          onClick={handleExitDemo}
          className="flex items-center text-sm font-medium text-[#97BC62] hover:text-white transition-colors"
        >
          <X className="h-4 w-4 mr-1" />
          Exit Demo
        </button>
      </div>
    </div>
  );
};
