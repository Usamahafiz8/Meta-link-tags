import React from 'react';
import logo from './logo.svg';
import './App.css';
import LinkPreview from './component/linkPre';

function App() {
  return (
    <div>
      <h1>Welcome to My Store</h1>
      <LinkPreview
        title="My Awesome Store"
        description="Check out our amazing products!"
        image="https://example.com/images/my-store-image.jpg"
        url="https://example.com/store/123"
      />
    </div>
  );
}

export default App;
