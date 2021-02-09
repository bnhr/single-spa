import React, { useState } from 'react';
import { Link } from '@reach/router';
import './style.module.css';

export default function Root() {
  const [name, setName] = useState('');
  return (
    <div className="card cardReact">
      <h2 className="titleReact title">Heelooo from react navbar</h2>
      <nav>
        <ul className="menuReact">
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/vueapp">Vue App</Link>
          </li>
          <li>
            <Link to="/svelteapp">Svelte App</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
