import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link to='/pricing'>Pricing</Link>
        </li>
      </ul>
    </main>
  );
}
