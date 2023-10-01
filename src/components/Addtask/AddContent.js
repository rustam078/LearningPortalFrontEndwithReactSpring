import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ErrorModel from './updateModel/UpdateModel';
import AddContentForm from './AddContentForm'



function AddContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <IconButton onClick={openModal} color="primary">
        <AddIcon />
      </IconButton>
      
     {isModalOpen&& <AddContentForm onConfirm={closeModal}/>}
    </div>
  );
}

export default AddContent;
