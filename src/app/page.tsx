'use client'
import { Content, Theme, Heading } from '@carbon/react';
import './page.scss';

export default function Home() {
  return (
    <Theme as="main" theme={'g100'}>
      <Content>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <Heading style={{ marginBottom: '1rem' }}>
            Something&apos;s Happening
          </Heading>
          <p>
            Welcome to Something&apos;s Happening - a web application built with React and Next.js
          </p>
        </div>
      </Content>
    </Theme>
  );
}
