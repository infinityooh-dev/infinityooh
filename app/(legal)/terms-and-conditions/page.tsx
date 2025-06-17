import React from 'react';

// import MyBreadcrumb from '@/components/custom/MyComponents/MyBreadcrumb';
import { data } from './data';
import LegalTemplate from '../template/LegalTemplate';
import { Metadata } from 'next';
import GenericHero from "@/components/custom/sections/hero/GenericHero";
// import GenericHero from '@/components/custom/shared/hero/GenericHero';

const title = 'Terms & Conditions - Infinity OOH';
const description =
  'We want your journey with Inifinty OOH to be seamless. We ask that you take the time to read and understand our website terms and conditions.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: ['/images/brand/logos/infinity-ooh-logo.svg'],
  },
};

const TermsOfServicePage = () => {
  return (
    <LegalTemplate data={data}>
        <GenericHero heroTitle='Terms And Conditions'/>
    </LegalTemplate>
  );
};

export default TermsOfServicePage;
