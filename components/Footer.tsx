import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer>
      <div>Data updates at 2am, UTC</div>
      <div>
        Created by{' '}
        <a href="https://twitter.com/dmihal" target="twitter">
          David Mihal
        </a>
      </div>

      <div>
        <Link href="/faqs">
          <a>FAQs</a>
        </Link>
        {' | '}
        <Link href="/submit-project">
          <a>Request Project</a>
        </Link>
        {' | '}
        <Link href="/api-docs">
          <a>API Documentation</a>
        </Link>
      </div>

      <div>
        <b>cryptofees.info</b>
        {' | '}
        <a href="https://ethereumnodes.com">ethereumnodes.com</a>
        {' | '}
        <a href="https://money-movers.info">money-movers.info</a>
        {' | '}
        <a href="https://stakers.info">stakers.info</a>
        {' | '}
        <a href="https://open-orgs.info">open-orgs.info</a>
      </div>
    </footer>
  );
};

export default Footer;
