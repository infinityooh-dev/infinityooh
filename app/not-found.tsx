'use client';

import CustomButton from "@/components/custom/shared/CustomButton";

// import MyBreadcrumb from '@/components/custom/MyComponents/MyBreadcrumb';
// import MyButton from '@/components/custom/MyComponents/MyButton';

export default function NotFound() {
  return (
    <main className="">
      {/* <MyBreadcrumb data={[{ label: 'Home', url: '/' }, { label: '404' }]} /> */}

      <section className="bg-tertiary-300 min-h-[calc(100svh-250px)] flex justify-center items-center">
        <div className="space-y-8 max-w-[800px] mx-auto -translate-x-1 text-center text-black p-16 -translate-y-1">
          <h1 className="fs-3xl">Sorry, we were not able to find that page.</h1>

          <p>
            Don’t you just hate when you can’t find something. We are sure it is
            around here somewhere. Maybe take a look again from our homepage?
          </p>

          <div className="flex flex-col gap-4 md:gap-8 justify-center items-center">
            <div className="flex flex-col gap-4 md:gap-8 justify-center max-w-2xs">
            <CustomButton btnName="Homepage" isLink href="/" />
            <CustomButton btnName="Contact Us" isLink href="/contact" variant="secondary" showIcon={false} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
