import { title } from 'process';
import React from 'react'
import { MetaTags } from 'react-meta-tags';

interface LinkPreviewProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const LinkPreview = ({title, description, image,url}: LinkPreviewProps) => {
  return (
    
    <div>
    <MetaTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
    </MetaTags>
    {/* Rest of your component */}
  </div>
  )
}

export default LinkPreview