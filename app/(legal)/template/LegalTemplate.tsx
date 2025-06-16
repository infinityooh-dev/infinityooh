import React from 'react';

import { LegalPageType } from './data';
import Hero from './Hero';
import Body from './Body';

interface LegalTemplateProps {
  children: React.ReactNode;
  data: LegalPageType;
}

const LegalTemplate = ({ children, data }: LegalTemplateProps) => {

  return (
    <main className='flex justify-center items-center w-full flex-col text-black'>
      {children}
      <div className='flex flex-col md:flex-row w-[95vw] gap-8 max-w-[1200px] mt-44 relative'>
        <Hero data={data} />
        <Body data={data} />
      </div>
    </main>
  );
};

export default LegalTemplate;
