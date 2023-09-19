import React from 'react';
import { Link } from 'react-router-dom';
// import './LeftMenu.css'; // Import the CSS file

const videoData = [
    { id: 1, url: 'https://www.example.com/video1.mp4' },
    { id: 2, url: 'https://www.example.com/video2.mp4' },
    { id: 3, url: 'https://www.example.com/video3.mp4' },
    { id: 4, url: 'https://www.example.com/video4.mp4' },
    { id: 5, url: 'https://www.example.com/video5.mp4' },
    { id: 1, url: 'https://www.example.com/video1.mp4' },
    { id: 2, url: 'https://www.example.com/video2.mp4' },
    { id: 3, url: 'https://www.example.com/video3.mp4' },
    { id: 4, url: 'https://www.example.com/video4.mp4' },
    { id: 5, url: 'https://www.example.com/video5.mp4' },
    { id: 1, url: 'https://www.example.com/video1.mp4' },
    { id: 2, url: 'https://www.example.com/video2.mp4' },
    { id: 3, url: 'https://www.example.com/video3.mp4' },
    { id: 4, url: 'https://www.example.com/video4.mp4' },
    { id: 5, url: 'https://www.example.com/video5.mp4' },
    { id: 1, url: 'https://www.example.com/video1.mp4' },
    { id: 2, url: 'https://www.example.com/video2.mp4' },
    { id: 3, url: 'https://www.example.com/video3.mp4' },
    { id: 4, url: 'https://www.example.com/video4.mp4' },
    { id: 5, url: 'https://www.example.com/video5.mp4' },
    { id: 1, url: 'https://www.example.com/video1.mp4' },
    { id: 2, url: 'https://www.example.com/video2.mp4' },
    { id: 3, url: 'https://www.example.com/video3.mp4' },
    { id: 4, url: 'https://www.example.com/video4.mp4' },
    { id: 5, url: 'https://www.example.com/video5.mp4' },
    { id: 1, url: 'https://www.example.com/video1.mp4' },
    { id: 2, url: 'https://www.example.com/video2.mp4' },
    { id: 3, url: 'https://www.example.com/video3.mp4' },
    { id: 4, url: 'https://www.example.com/video4.mp4' },
    { id: 5, url: 'https://www.example.com/video5.mp4' },
    { id: 1, url: 'https://www.example.com/video1.mp4' },
    { id: 2, url: 'https://www.example.com/video2.mp4' },
    { id: 3, url: 'https://www.example.com/video3.mp4' },
    { id: 4, url: 'https://www.example.com/video4.mp4' },
    { id: 5, url: 'https://www.example.com/video5.mp4' },
    { id: 1, url: 'https://www.example.com/video1.mp4' },
    { id: 2, url: 'https://www.example.com/video2.mp4' },
    { id: 3, url: 'https://www.example.com/video3.mp4' },
    { id: 4, url: 'https://www.example.com/video4.mp4' },
    { id: 5, url: 'https://www.example.com/video5.mp4' },
    { id: 1, url: 'https://www.example.com/video1.mp4' },
    { id: 2, url: 'https://www.example.com/video2.mp4' },
    { id: 3, url: 'https://www.example.com/video3.mp4' },
    { id: 4, url: 'https://www.example.com/video4.mp4' },
    { id: 5, url: 'https://www.example.com/video5.mp4' },
    { id: 1, url: 'https://www.example.com/video1.mp4' },
    { id: 2, url: 'https://www.example.com/video2.mp4' },
    { id: 3, url: 'https://www.example.com/video3.mp4' },
    { id: 4, url: 'https://www.example.com/video4.mp4' },
    { id: 5, url: 'https://www.example.com/video5.mp4' },
    { id: 1, url: 'https://www.example.com/video1.mp4' },
    { id: 2, url: 'https://www.example.com/video2.mp4' },
    { id: 3, url: 'https://www.example.com/video3.mp4' },
    { id: 4, url: 'https://www.example.com/video4.mp4' },
    { id: 5, url: 'https://www.example.com/video5.mp4' },
  ];
  
function LeftMenu() {
  return (
    <div className="left-menu">
      {/* Add your horizontal links here */}
      {videoData.map((video) => (
          <Link to={`/addTask/${video.id}`} key={video.id}>video {video.id}</Link>
        ))}
 
    </div>
  );
}

export default LeftMenu;
