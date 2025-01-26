import React, { useState, useEffect } from "react";
import { db } from "../utils/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import TextEditor from "../components/textEditor";
import SafeHtml from "../components/safeHtml";

const AssignmentUploader = () => {
  const [assignments, setAssignments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [listLoading, setListLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchAssignments = async () => {
    setListLoading(true);
    setErrorMessage("");
    try {
      const q = query(
        collection(db, "assignments"),
        orderBy("timestamp", "asc")
      );
      const querySnapshot = await getDocs(q);
      const fetchedAssignments = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAssignments(fetchedAssignments);
    } catch (error) {
      console.error("Error fetching assignments:", error);
      setErrorMessage("Failed to load assignments. Please check your network.");
    } finally {
      setListLoading(false);
    }
  };

  const handleUpload = async () => {
    if (!title || !content) {
      alert("Both title and content are required.");
      return;
    }

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await addDoc(collection(db, "assignments"), {
        title,
        content,
        timestamp: serverTimestamp(),
      });
      setSuccessMessage("Assignment uploaded successfully!");
      setTitle("");
      setContent("");
      setShowModal(false);
      fetchAssignments();
    } catch (error) {
      console.error("Error uploading assignment:", error);
      setErrorMessage(
        "Failed to upload the assignment. Please check your network and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  // Clear success and error messages after 3 seconds
  useEffect(() => {
    if (successMessage || errorMessage) {
      const timeout = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [successMessage, errorMessage]);

  return (
    <div className="assignment-uploader">
      {/* Hidden Button */}
      <button
        className="hidden-upload-btn"
        onClick={() => setShowModal(true)}
        title="Upload assignment"
      >
        <i className="fa-solid fa-upload"></i>
      </button>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="detail">Upload Assignment</h2>
            <p className="modal-note">
              Note: Maximum image size for uploads is 5MB.
            </p>
            {/* <input
              type="text"
              placeholder="Question"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="modal-input"
            /> */}
            <div className="modal-question">
              <TextEditor
                value={title}
                onChange={setTitle}
                placeholder="Question"
              />
            </div>
            <TextEditor
              value={content}
              onChange={setContent}
              placeholder="Write the assignment content here..."
            />
            <div className="modal-actions">
              <button
                onClick={handleUpload}
                className="modal-upload-btn"
                disabled={loading}
              >
                {loading ? "Uploading..." : "Upload"}
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="modal-cancel-btn"
                disabled={loading}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success and Error Messages */}
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {/* Assignment List */}
      {listLoading ? (
        <div className="loading-indicator">Loading assignments...</div>
      ) : (
        <div className="assignment-list">
          {assignments.map((assignment, index) => (
            <div key={assignment.id} className="assignment-item">
              <div className="list-question">
                <h3> Assignment {index + 1}:</h3> 
                <SafeHtml htmlContent={assignment.title} fallback="Question is not available." />
              </div>
              <p className="assignment-date">
                Uploaded:{" "}
                {new Date(assignment.timestamp?.toDate()).toLocaleString()}
              </p>
              <a href={`/assignments/${assignment.id}`} className="view-link">
                View Assignment
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AssignmentUploader;
