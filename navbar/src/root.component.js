import React, { useState } from 'react';
import './style.module.css';

export default function Root() {
  const [name, setName] = useState('');
  return (
    <div className="card cardReact">
      <h2 className="titleReact title">heelooo from react navbar</h2>
      <nav>
        <ul className="menuReact">
          <li>Vue</li>
          <li>Svelte</li>
        </ul>
      </nav>
    </div>
  );
}
