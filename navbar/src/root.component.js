import React from 'react';
import { Link } from '@reach/router';
import { nope } from '@bnhr/fakestate';
import './style.module.css';

export default function Root() {
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
          <li>
            <button onClick={nope}>click me</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
