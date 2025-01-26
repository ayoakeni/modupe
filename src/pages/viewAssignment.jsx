import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../utils/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import SafeHtml from "../components/safeHtml";

const ViewAssignment = () => {
  const { id } = useParams(); // Get the assignment ID from the URL
  const [assignment, setAssignment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        const docRef = doc(db, "assignments", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setAssignment({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching assignment:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAssignment();
  }, [id]);

  if (loading) {
    return <div className="loading-indicator">Loading assignment...</div>;
  }

  if (!assignment) {
    return <div className="loading-indicator">Assignment not found!</div>;
  }

  return (
    <div className="viewBox">
      <div className="view-assignment">
        <div className="details-top">
          <span><strong>Name:</strong> Akeni Ayowunmi</span>
          <span><strong>Matric:</strong> F/HD/23/3210009</span>
          <span><strong>Department:</strong> Computer Science</span>
          <span><strong>Level:</strong> HND1</span>
          <span className="view-date">
            <strong>Uploaded:</strong>{" "}
            {new Date(assignment.timestamp?.toDate()).toLocaleString()}
          </span>
          <div className="question"><strong>Question(s):</strong>
            <SafeHtml htmlContent={assignment.title} fallback="Question is not available." />
          </div>
        </div>
        <span className="answer">Answer</span>
        <div className="assignment-content">
          <SafeHtml htmlContent={assignment.content} fallback="Content is not available." />
        </div>
      </div>
    </div>
  );
};

export default ViewAssignment;
