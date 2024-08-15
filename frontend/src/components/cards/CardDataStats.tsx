import React, { ReactNode } from 'react';

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white">
        {children}
      </div>

      <div className="mt-6 flex flex-col items-start">
        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
          {total}
        </h4>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {title}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span
          className={`text-sm font-medium ${
            levelUp ? 'text-green-500' : levelDown ? 'text-red-500' : 'text-gray-500'
          }`}
        >
          {rate}
        </span>
        {levelUp && (
          <svg
            className="w-4 h-4 text-green-500"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4l-8 8h5v8h6v-8h5l-8-8z"
              fill="currentColor"
            />
          </svg>
        )}
        {levelDown && (
          <svg
            className="w-4 h-4 text-red-500"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 20l8-8h-5V4H9v8H4l8 8z"
              fill="currentColor"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default CardDataStats;
