import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ReactStars from "react-rating-stars-component";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import axiosPrivate from "../Api/axiosPrivate";
import PageTitle from "../Shared/PageTitle";

const AddReview = () => {
  const [star, setStar] = useState("");
  const [comment,setComment] = useState("")
  const [user] = useAuthState(auth)
  const ratingChanged = (newRating) => {
    setStar(newRating);
  };
  const handleReview = (event) =>{
      event.preventDefault()
      const review = {
        comment:comment,
        star:star,
        userName:user?.displayName,
        email:user?.email
      }
      axiosPrivate.post('reviews',review)
      .then(response => {
          if(response.data.insertedId){
            Swal.fire({
              icon: "success",
              title: "Thanks for your feedback",
              showConfirmButton: false,
              timer: 1500,
            });
            setComment("")
          }
          
      })
  }
  return (
    <div>
      <PageTitle title={"add-review"}></PageTitle>

      <div class="card max-w-sm mx-auto mt-6 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title mb-2">Add Review</h2>
          <textarea
            onChange={(e)=> setComment(e.target.value)}
            class="textarea textarea-bordered"
            placeholder="Comment"
          ></textarea>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={40}
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#faca51"
          />
        </div>
        <button onClick={handleReview} className="bg-[#f57224] text-white p-4">Review</button>
      </div>
    </div>
  );
};

export default AddReview;
