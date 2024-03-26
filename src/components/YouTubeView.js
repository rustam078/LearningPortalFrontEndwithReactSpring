import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const [url, setUrl] = useState('');
  
  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  return (
    <div>
      <input type="text" value={url} onChange={handleChange} placeholder="Paste YouTube URL" />
      {url && <ReactPlayer url={url} controls />}
    </div>
  );
};

export default VideoPlayer;
