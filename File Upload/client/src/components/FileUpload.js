import React, { Fragment, useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("Upload your File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message,setMessage] = useState(null);
  const handleChange = (event) => {
    setFile(event.target.files[0]);
    setFilename(event.target.files[0].name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
      setMessage({
        type: "File Uploded",
        style: { color: "green" },
        text: "The File is succesfully uploaded"
      });
    } catch (error) {
      if (error.response) {
        if (error.response.status === 500) {
          setMessage({
            type: "error",
            style: { color: "red" },
            text: "There is a problem with the server"
          });
          console.log("There is a problem with the server");
        } else {
          console.log(error.response.data.msg);
        }
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="">
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            {filename}
          </label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-4">
          Submit
        </button>
      </form>
      {
        message && <h4 style={message.style}>{`${message.type} : ${message.text}`}</h4>
      }
      {uploadedFile.fileName ? (
        <div className="mt-3">
          <h3>{uploadedFile.fileName}</h3>
          <img style={{ width: "100%" }} src={uploadedFile.filePath} alt={uploadedFile.fileName} />
        </div>
      ) : null}
    </Fragment>
  );
};

export default FileUpload;
