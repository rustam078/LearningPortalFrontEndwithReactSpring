import React, { useState } from "react";
import { useParams, useLocation, useLoaderData } from "react-router-dom";
import ReactPlayer from "react-player";
import classes from "./ViewDetailsPage.module.css";
import { HEADERS } from "../../service/UrlUtils";
import { faker } from "@faker-js/faker";
import { Avatar, Button, IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";

const ViewDetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const videoData = useLoaderData();
  const [activeItemIndex, setActiveItemIndex] = useState(null);
  const searchParams = new URLSearchParams(location.search);
  const videoUrl = searchParams.get("url");
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(videoUrl);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState("First video");
  const isMobileView = window.innerWidth <= 768;
  // Function to handle video link clicks
  const handleVideoLinkClick = (url, index, title) => {
    setSelectedVideoUrl(url);
    setActiveItemIndex(index);
    setSelectedVideoTitle(title);
  };
  const generateRandomViewsAndYearsAgo = () => {
    const views = Math.floor(Math.random() * (10000000 - 1000 + 1)) + 1000;
    const yearsAgo = Math.floor(Math.random() * 10) + 1;
    let viewsText;
    if (views >= 1000000) {
      viewsText = `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 1000) {
      viewsText = `${(views / 1000).toFixed(1)}K`;
    } else {
      viewsText = views.toString();
    }

    const yearsAgoText = Math.random() < 0.5 ? "month" : "year";

    return `${viewsText} views · ${yearsAgo} ${yearsAgoText}s ago`;
  };

  return (
    <>
      <div className={classes.flexcontainer}>
        <div className={classes.videoPlayer}>
          <ReactPlayer
            url={selectedVideoUrl}
            controls={true}
            height={isMobileView ? "300px" : "400px"}
            width={isMobileView ? "330px" : "780px"}
          />
          <div className="video-content">
            <h2 className={classes.videoplayerTitle}>{selectedVideoTitle}</h2>
            <div className={classes.desc}>
              <div className={classes.channel}>
                <div className={classes.channel1}>
                <Avatar src={faker.image.avatar()} alt="Channel Avatar" />
                <span>Channel Name</span>
                </div>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "black",
                    borderRadius: "25px",
                    color: "white", // Set text color to white for visibility
                  }}
                >
                  Subscribe
                </Button>
              </div>
              <div className={classes.likedislike}>
              <Button
  variant="text"
  startIcon={<ThumbUpIcon />}
//   onClick={() => handleLikeClick()}
>
  Like
</Button>

<Button
  variant="text"
  startIcon={<ThumbDownIcon />}
//   onClick={() => handleDislikeClick()}
>
  Dislike
</Button>

<Button
  variant="text"
  startIcon={<ShareIcon />}
//   onClick={() => handleShareClick()}
>
  Share
</Button>

<Button
  variant="text"
  startIcon={<MoreVertIcon />}
//   onClick={() => handleMoreOptionsClick()}
>
</Button>
              </div>
            </div>
          </div>

          <p className={isMobileView ? classes.contmobile : classes.contlarge}>
        Ipsum Lorem excepteur adipisicing ea eu exercitation commodo
        reprehenderit dolor. Ipsum Lorem excepteur adipisicing ea eu
        exercitation commodo reprehenderit dolor.
      </p>

        </div>

        <div className={classes.videoListContainer}>
          <h3 className={classes.videoListHeader}>Video List</h3>
          <div className={classes.videoList}>
            <ul>
              {videoData && videoData.length > 0 ? (
                videoData.map((video, index) => (
                  <li
                    key={video.id}
                    className={`${classes.itemList} ${
                      index === activeItemIndex ? classes.activeItem : ""
                    }`}
                  >
                    <div
                      style={{ display: "flex", cursor: "pointer" }}
                      onClick={() =>
                        handleVideoLinkClick(video.url, index, video.title)
                      }
                    >
                      <img
                        className={classes.thumbnail}
                        src={faker.image.image()}
                        alt={`Profile of ${video.id}`}
                      />
                      <div>
                        <p className={classes.videoTitle}>
                          {video.title.length > 20
                            ? `${video.title.slice(0, 40)}...`
                            : video.title}
                        </p>
                        <p> {video.name}</p>
                        <p className={classes.viewCount}>
                          {generateRandomViewsAndYearsAgo()}
                        </p>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <p
                  className={classes.nocontent}
                >
                  No content available ......
                </p>
              )}
            </ul>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default ViewDetailsPage;

export async function loader() {
  let apiUrl =
    "https://mpairavat.in/learningPortal/api/categories/byContentType?contentType=VIDEO";
  try {
    const response = await fetch(apiUrl, HEADERS());

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(`Data fetched from URL ${apiUrl}:`, data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // Return null or an empty object to indicate an error
  }
}
