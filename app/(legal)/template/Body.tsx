import React from 'react';

import { LegalPageType } from './data';

interface BodyProps {
  data: LegalPageType;
}

const Body = ({ data }: BodyProps) => {
  return (
    <section className="container space-y-16 pb-16">
      {data.body.map((item, index) => (
        <div
          key={index}
          className="border-t-2 pt-8 border-accent scroll-mt-24"
          id={item.slug}
        >
          <div className="standard-width">
            <div className="space-y-8 max-w-[700px]">
              <h1 className="fs-lg">
                {index + 1}. {item.title}
              </h1>

              <div className="space-y-4 whitespace-pre-wrap">
                {item.descriptions && (
                  <div className="space-y-4">
                    {item.descriptions.map((desc, index) => (
                      <p
                        key={index}
                        dangerouslySetInnerHTML={{ __html: desc }}
                      />
                    ))}
                  </div>
                )}

                {item.ol && (
                  <div className="space-y-4">
                    {item.ol.map((ol, index) => (
                      <div key={index} className="space-y-4">
                        {ol.text && (
                          <div className="flex gap-2">
                            <span>{ol.id}.</span>{' '}
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ol.text as string,
                              }}
                            />
                          </div>
                        )}

                        {ol.ul && (
                          <div className="ml-8 space-y-4">
                            {ol.ul.map((ul, index) => (
                              <div key={index} className="flex gap-2">
                                <span>{ul.id}.</span>{' '}
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ul.text as string,
                                  }}
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {item.content && (
                  <div>
                    {item.content.map((content, index) => (
                      <div key={index} className="space-y-3">
                        <h3 className="fs-md">
                          {content.title}
                        </h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: content.description || '',
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Body;
