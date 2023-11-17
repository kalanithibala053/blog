import React, { useState } from "react";
import "./create.css";

function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreateBlog = (event) => {
    event.preventDefault();

    // In a real application, you'd send the blog data to a server for storage.
    // For this example, we'll just display the blog content.
    alert(`Blog Posted:\nTitle: ${title}\nContent: ${content}`);

    // Clear form fields
    setTitle("");
    setContent("");
  };

  return (
    <div className="container">
      <h1>Create a Blog</h1>
      <form onSubmit={handleCreateBlog}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          rows="6"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Post Blog</button>
      </form>
    </div>
  );
}

export default Create;
