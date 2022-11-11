import React from 'react';

type Props = {};

type Block = {
  title: string;
  url: string;
};

const blocks: Block[] = [
  {
    title: 'FE',
    url: 'https://bitbucket.org/bright-software/bright-frontend/pull-requests/',
  },
  {
    title: 'Ad',
    url: 'https://bitbucket.org/bright-software/bright-admin/pull-requests/',
  },
  {
    title: 'BE',
    url: 'https://bitbucket.org/bright-software/bright-backend/pull-requests/',
  },
];

const Left = (props: Props) => {
  return (
    <div className="h-full basis-1/4 p-4 flex flex-col gap-2">
      <h1 className="text-7xl text-blue-700">Bitbucket</h1>
      <div className="flex flex-col gap-4 ">
        {blocks.map(({ title, url }) => (
          <button
            className="w-full basis-1/3
          bg-black opacity-30 rounded-lg
          cursor-pointer hover:opacity-100
          transition-all duration-300"
            onClick={() => window.open(url, '_blank')}
            type="button"
          >
            <h1
              className="text-[280px]
            text-gray-300
              leading-none
              text-center
            "
            >
              {title}
            </h1>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Left;
