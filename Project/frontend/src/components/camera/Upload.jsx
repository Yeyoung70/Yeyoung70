import React, { useContext } from "react";
import "./Upload.css";
import BuyModal from "../modal/camera/BuyModal";
import { BlobContext } from "../../contexts/BlobContext";

const Upload = () => {
  const { blobUrl } = useContext(BlobContext);

  return (
    <div className="upload">
      <div className="image">
        {blobUrl ? (
          <div className="imgBox">
            <img src={blobUrl} alt="Captured" className="img" />
          </div>
        ) : (
          <p>No image captured</p>
        )}
      </div>
      <div className="modal">
        <BuyModal />
      </div>
    </div>
  );
};

export default Upload;
