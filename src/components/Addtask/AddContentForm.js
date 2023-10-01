import React, { useEffect, useState } from "react";
import classes from "./addcontent.module.css";
import { getUser } from "../../service/LoginService";
import { loadSuccessPopup,loadPopup } from "../../service/ToastifyPopup";
import { useNavigate } from "react-router-dom";
import { queryClient } from "../TanStackQueryHttp/http";
import ReactDOM from "react-dom";
import classess from "./updateModel/update.module.css";
import Card from "./updateModel/Card";
import { motion, AnimatePresence } from 'framer-motion';

const modalVariants = {
  hidden: {
    opacity: 0.7,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 100,
    },
  },
};
const Backdrop = (props) => {
  return <div className={classess.backdrop} onClick={props.onConfirm} />;
};

function AddContentForm(props) {
  const [contentType, setContentType] = useState("VIDEO");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [imageType, setImageType] = useState("link"); // Added state for image type
  const [image, setImage] = useState(null); // New state for the uploaded image file
  const [imageUrl, setImageUrl] = useState(`https://picsum.photos/300/${Math.floor(Math.random() * 900) + 100}`); // New state for image URL
  const navigate = useNavigate();
  const user = getUser();

  useEffect(()=>{
    document.body.style.overflowY="hidden";
    return ()=>{
      document.body.style.overflowY="scroll";
    }
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContent = {
      id: Date.now(),
      contentType,
      title,
      url,
      categoryId: category,
      imageUrl:imageUrl,
    };

    let urls = "http://localhost:8080/api/categories/add";
    console.log(newContent);
    const token = user.token;
    fetch(urls, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newContent),
    })
      .then((response) => response.json())
      .then((data) => {
        loadSuccessPopup("Record added successful...");
        console.log("Response from server:", data);
        queryClient.invalidateQueries({queryKey:['fetchCategories']});
        props.onConfirm();
        navigate("/dashboard");
      })
      .catch((error) => {
        loadPopup("some thing went worng ....");
        console.error("Error:", error);
      });

    setTitle("");
    setUrl("");
    setCategory("");
    setImage(null);
    setImageUrl("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <React.Fragment>
    {ReactDOM.createPortal(
      <Backdrop onConfirm={props.onConfirm} />,
      document.getElementById('backdrop-root')
    )}

    {ReactDOM.createPortal(
         <motion.div
         style={{position:'fixed',zIndex:'10'}}
         variants={modalVariants}
         initial="hidden"
         animate="visible"
         exit="hidden"
         >
      <div className={classes.formcontainer}>
      <form onSubmit={handleSubmit}>
      <Card className={classes.modal} style={{width:"300px"}}>
      <header className={classess.header}>
      <h2>Add Task</h2>
      </header>
        <div className={classes.type}>
          <label>
            Content Type:
            <input
              type="radio"
              name="contentType"
              value="VIDEO"
              checked={contentType === "VIDEO"}
              onChange={() => setContentType("VIDEO")}
            />
            Video
          </label>
          <label>
            <input
              type="radio"
              name="contentType"
              value="ARTICLE"
              checked={contentType === "ARTICLE"}
              onChange={() => setContentType("ARTICLE")}
            />
            Article
          </label>
        </div>
        <div style={{display:'flex',margin:'10px',justifyContent: 'center', alignItems: 'baseline'}}>
          <label>
            Title:
           </label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                if (e.target.value.length <= 100) {
                  setTitle(e.target.value);
                }
              }
            }
            />
        </div>
        <div style={{display:'flex',margin:'10px',justifyContent: 'center', alignItems: 'baseline'}}>
          <label>
            URL:
            </label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
        </div>
        <div style={{display:'flex',marginRight:'10px',marginBottom:'10px',justifyContent: 'center', alignItems: 'baseline'}}>
          <label>
            Category:
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              <option value="1">Java</option>
              <option value="2">HTML</option>
              <option value="3">React</option>
              <option value="4">Spring</option>
            </select>
        </div>
     
       {contentType === "ARTICLE"&&(<> <hr/>
       <div style={{display:'flex',margin:'10px',justifyContent: 'space-between', alignItems: 'baseline'}}>
          <label>
            Image Type:
            </label>
            <input
              type="radio"
              name="imageType"
              value="upload"
              checked={imageType === "upload"}
              onChange={() => setImageType("upload")}
            />
            Upload Image
            <input
  type="radio"
  name="imageType"
  value={`https://picsum.photos/300/${Math.floor(Math.random() * 900) + 100}`}
  checked={imageType === "link"}
  onChange={(e) => {
    setImageType("link");
    setImageUrl(e.target.value);
  }}
/>

            Image URL
        </div>
        </>
        )}
        {/* Conditionally render the image input based on the selected image type */}
        {contentType === "ARTICLE"&& imageType === "upload" && (
          <div style={{display:'flex',margin:'10px',justifyContent: 'space-between', alignItems: 'baseline'}}>
            <label>
              Image:
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
          </div>
        )}
        {contentType === "ARTICLE"&& imageType === "link" && (
          <div style={{display:'flex',margin:'10px',justifyContent: 'center', alignItems: 'baseline'}}>
            <label>
              Image URL:
              </label>
              <input
                type="text"
                value={`https://picsum.photos/300/${Math.floor(Math.random() * 900) + 100}`}
                onChange={(e) => setImageUrl(e.target.value)}
              />
          </div>
        )}
        <button type="submit">Add Content</button>
      </Card>
      </form>
      </div>
    </motion.div>
      ,
      document.getElementById("overlay-root")
    )}
  </React.Fragment>
  );
}

export default AddContentForm;
