import { BreadcrumbType } from '@/lib/types/common';
import { LegalPageType } from '../template/data';

export const breadcrumb: BreadcrumbType = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'Privacy Policy',
  },
];

export const data: LegalPageType = {
  heading: 'Privacy Policy',
  // tagline: `At OOH, accessible from ${getSiteDomain()} one of our main priorities is the privacy of our visitors.`,
  descriptions: [
    'This Privacy Policy document contains types of information that is collected and recorded by Infinity OOH and how we use it.',
    'If you have additional questions or require more information about our Privacy Policy, do not hesitate to <a href="/contact">contact us</a>.',
  ],
  version: 'v1.23 27',
  body: [
    {
      title: 'Log Files',
      slug: 'log-files',
      descriptions: [
        `Infinity OOH follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and are a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. This is not linked to any information that is personally identifiable. The purpose of the information is to analyse trends, administer the site, track user's movement on the website, and gather demographic information.`,
      ],
    },
    {
      title: 'Cookies & Web Beacons',
      slug: 'cookies-web-beacons',
      descriptions: [
        `Like any other website, Infinity OOH uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimise the users' experience by customising our web page content based on visitors' browser type and/or other information.`,
        `For more general information on cookies, please Please refer to your browser’s ‘help’ facility for further information or go to <a href="http://www.aboutcookies.org/">http://www.aboutcookies.org/</a>`,
      ],
    },
    {
      title: 'Google DoubleClick DART Cookie',
      slug: 'google-doubleclick-dart-cookie',
      descriptions: [
        `We may also use DART cookies for ad serving through Google’s DoubleClick, which places a cookie on your computer when you are browsing the web and visiting a site using DoubleClick advertising (including some Google AdSense advertisements). This cookie is used to serve ads specific to you and your interests (“interest-based targeting”). The ads served will be targeted based on your previous browsing history (For example, if you have been viewing sites about visiting Las Vegas, you may see Las Vegas hotel advertisements when viewing a non-related site, such as a site about hockey).`,
        `DART uses “non-personally identifiable information”. It does NOT track personal information about you, such as your name, email address, physical address, telephone number, social security number, bank account numbers, or credit card numbers. You can opt-out of this ad serving on all sites using this Google advertising by visiting <a href="http://www.doubleclick.com/privacy/dart_adserving.aspx">http://www.doubleclick.com/privacy/dart_adserving.aspx</a>`,
      ],
    },
    {
      title: 'Our Advertising Partners',
      slug: 'our-advertising-partners',
      descriptions: [
        `Some of the advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has its own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.`,
      ],
      content: [
        {
          title: 'Google',
          description:
            '<a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a>',
        },
      ],
    },
    {
      title: 'Privacy Policies',
      slug: 'privacy-policies',
      descriptions: [
        `You may consult this list to find the Privacy Policy for each of the advertising partners of Infinity OOH.`,
        `Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Infinity OOH, which are sent directly to users' browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalise the advertising content that you see on websites that you visit.`,
        `Note that Infinity OOH has no access to or control over these cookies that are used by third-party advertisers.`,
      ],
    },
    {
      title: 'Third-Party Privacy Policies',
      slug: 'third-party-privacy-policies',
      descriptions: [
        `Infinity OOH's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt out of certain options.`,
        `You can choose to disable cookies through your individual browser options. More detailed information about cookie management with specific web browsers can be found on the browsers' respective websites.`,
      ],
    },
    {
      title: 'Online Privacy Policy Only',
      slug: 'online-privacy-policy-only',
      descriptions: [
        `This Privacy Policy applies only to our online activities and is valid for visitors to our website with regard to the information that they share and/or collect in Infinity OOH. This policy does not apply to any information collected offline or via channels other than this website.`,
      ],
    },
    {
      title: 'Consent',
      slug: 'consent',
      descriptions: [
        `By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.`,
      ],
    },
  ],
};
