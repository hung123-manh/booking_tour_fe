import "./Comment.css";
import { motion, px } from "framer-motion";
import React, { useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";

function MainContent() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <div className="comment-container" style={{ height: "100vh" }}>
      <h1>GÓP Ý CỦA BẠN </h1>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Vui lòng để lại nhận xét của bạn"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows="4"
          cols="50"
        />
        <br />
        <button type="submit">Nhập</button>
      </form>

      <div className="comment-list">
        <h3>Bình luận đã gửi:</h3>
        {comments.length === 0 && <p>Chưa có bình luận nào.</p>}
        <ul>
          {comments.map((cmt, index) => (
            <li key={index}>{cmt}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Comment() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* <NavBar /> */}
      <MainContent />
      {/* <Footer /> */}
    </motion.div>
  );
}

export default Comment;
