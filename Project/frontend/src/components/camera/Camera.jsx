import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PhotoCameraRoundedIcon from "@mui/icons-material/PhotoCameraRounded";
import "./Camera.css";
import { BlobContext } from "../../contexts/BlobContext";

function Camera() {
  const [source, setSource] = useState("");
  const navigate = useNavigate();
  const { setBlobUrl } = useContext(BlobContext);

  const handleCapture = (target) => {
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }
      const newUrl = URL.createObjectURL(file);
      console.log("Generated URL: ", newUrl); // URL 로그 추가
      setSource(newUrl);
      setBlobUrl(newUrl);
      navigate("/upload");
    }
  };

  return (
    <div className="root">
      <Grid container>
        <Grid item xs={12}>
          <h5>Capture your image</h5>
          {source ? (
            <Box className="imgBox">
              <img src={source} alt="snap" className="img" />
            </Box>
          ) : (
            <div className="message">
              Please capture an image using the camera icon below.
            </div>
          )}
          <input
            accept="image/*"
            id="icon-button-file"
            type="file"
            capture="environment"
            onChange={(e) => handleCapture(e.target)}
            className="input"
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCameraRoundedIcon fontSize="large" color="primary" />
            </IconButton>
          </label>
        </Grid>
      </Grid>
    </div>
  );
}

export default Camera;
