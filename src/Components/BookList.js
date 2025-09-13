import React, { useState } from "react";

 
const BookList = ({ title, author, pubDate, description, image }) => {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "16px",
    margin: "20px auto",
    width: "600px",
    display: "flex",
    gap: "20px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  };

  const imgStyle = {
    width: "120px",
    height: "160px",
    objectFit: "cover",
    borderRadius: "8px",
  };

  const infoStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "8px",
  };

  const authorStyle = {
    fontSize: "16px",
    fontWeight: "500",
    color: "#333",
    marginBottom: "6px",
  };

  const descStyle = {
    fontSize: "14px",
    color: "#555",
    maxHeight: "60px",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
const[display,setDisplay]=useState(false);
  return (
    <div style={cardStyle}>
      {image && <img src={image} alt={title} style={imgStyle} />}
      <div style={infoStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={authorStyle}>by {author || "Unknown Author"}</p>
        <p style={{ fontSize: "14px", color: "#666" }}>
          Published: {pubDate || "N/A"}
        </p>
        <p style={descStyle}>{description || "No description available."}</p> 
             
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Read
</button>

 
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <img src={image} style={imgStyle} />
        <h1 className="modal-title fs-4" id="staticBackdropLabel">{title}

          <span style={{fontWeight:"400",fontSize:"18px"}}> by {author}</span>
        </h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {description}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
         
      </div>
    </div>
  );
};

export default BookList;
