import React, { createContext, useState } from "react";

export const BlobContext = createContext();

export const BlobProvider = ({ children }) => {
  const [blobUrl, setBlobUrl] = useState("");

  return (
    <BlobContext.Provider value={{ blobUrl, setBlobUrl }}>
      {children}
    </BlobContext.Provider>
  );
};
