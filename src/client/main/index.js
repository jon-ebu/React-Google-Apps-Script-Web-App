import React from 'react';
import { createRoot } from 'react-dom/client';
import HelloWorld from `./components//HelloWorld`;

import './styles.css';

const container = document.getElementById('index');
const root = createRoot(container);
root.render(<HelloWorld />);
