import React from 'react';
import { data } from './data';
import LegalTemplate from '../template/LegalTemplate';
import { Metadata } from 'next';
import GenericHero from "@/components/custom/sections/hero/GenericHero";

const title = 'Privacy Policy - Infinity OOH';
const description =
  'At OOH one of our main priorities is the privacy of our visitors. Learn more about how your data is collected and used.';

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
        <GenericHero heroTitle='Privacy Policy'/>
    </LegalTemplate>
  );
};

export default TermsOfServicePage;
