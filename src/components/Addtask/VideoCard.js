import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './VideoCard.css'; // Import CSS for styling
import DeleteIcon from '@mui/icons-material/Delete';
import { deletecontentFromBackend } from '../../service/LoginService';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import EditIcon from '@mui/icons-material/Edit';
import UpdateModel from './updateModel/UpdateModel';
import { queryClient } from '../TanStackQueryHttp/http';

function VideoCard({ id, title, description, videoUrl, type }) {
  const [showmodel, setShowModel] = useState();
  const navigate = useNavigate();
  const titiletype = type;
  const currentURL = window.location.href;
  const parts = currentURL.split('/');
  const lastPart = parts[parts.length - 1];




  const handleDeleteClick = (id) => {
    const shouldDelete = window.confirm(`Are you sure you want to delete this  ${titiletype}? `);
    if (shouldDelete) {
      deletecontentFromBackend(id).then(response => {
        toast.success(`${titiletype} deleted successfully!`);
        queryClient.invalidateQueries({ queryKey: ['notification'] });
        queryClient.invalidateQueries({ queryKey: ['fetchCategories'] });
        if (isNaN(lastPart)) {
          navigate(`/dashboard/${lastPart}`);
        } else {
          navigate(`/dashboard`);
        }
      })
        .catch(error => {
          console.log(error)
          toast.error('Error fetching data:', error);
        });
    }
  };

  const updatesetShowModel = () => {
    setShowModel(null);
  };

  const showPopupModel = (id, videoUrl, title) => {
    setShowModel({
      id,
      videoUrl,
      title,
    }
    );
  }
  return (
    <>
      {showmodel && <UpdateModel id={showmodel.id} title={showmodel.title} videoUrl={showmodel.videoUrl} onConfirm={updatesetShowModel} />}
      <div className="video-card" style={{
        padding: type === "YOUTUBE" ? "0px" : "16px"
      }}>
        <Link to={`/dashboard/viewdetails/${id}?url=${videoUrl}`} className="video-link" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex' }}>
            <ReactPlayer
              url={videoUrl}
              controls={true}
              height={type === "YOUTUBE" ? "126px" : "100px"}
              width={type === "YOUTUBE" ? "298px" : "100px"}
            />

            {titiletype !== "YOUTUBE" && (
              <div className="video-content">
                <h2 className="video-title">{title}</h2>
                <p className="video-description">{description}</p>
              </div>
            )}
          </div>
        </Link>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to={`/dashboard/viewdetails/${id}?url=${videoUrl}`} className="video-link" style={{ textDecoration: 'none' }}>
            <div style={{ width: "250px" }}></div>
          </Link>
          <div className="delete-button">
            {titiletype !== "YOUTUBE" && <EditIcon onClick={() => showPopupModel(id, videoUrl, title)} />}
            <DeleteIcon onClick={() => handleDeleteClick(id)} />
          </div>
        </div>

      </div>
    </>
  );
}

export default VideoCard;
