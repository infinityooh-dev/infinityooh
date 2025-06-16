import React from 'react';

import { LegalPageType } from './data';
import Link from 'next/link';

interface HeroProps {
  data: LegalPageType;
}

const Hero = ({ data }: HeroProps) => {
  return (
    <section className="bg-primary-200">
      <div className="container py-8 sticky top-5 left-0">
        <div className="space-y-8 standard-width">
          <div className="space-y-8 border-b border-accent pb-8">
            <div className="max-w-[700px] space-y-3">
              {data.descriptions.map((desc, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: desc }} />
              ))}
            </div>
          </div>

          <div className="space-y-8 border-b border-accent pb-8">
            <p className="fs-sm">
              {data.version}
            </p>

            <h2>Contents</h2>

            <ul className="space-y-6">
              {data.body.map((item, index) => (
                <li key={item.slug} className="fs-md">
                  {index + 1}
                  {'. '}
                  <Link href={`#${item.slug}`} className="underline underline-offset-2">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
