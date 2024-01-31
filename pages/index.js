import Head from 'next/head';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Careers from '../components/Careers';
import Information from '../components/Information';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vera&apos;s General Building</title>
        <meta name='description' content='Your Best Conbstruction Decision' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <Information />
      <Portfolio />
      <Careers />
    </div>
  );
}
