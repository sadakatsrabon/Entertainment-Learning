import React from "react";
import { Helmet } from "react-helmet";
import {
  FaComment,
  FaInfoCircle,
  FaShareAlt,
  FaThumbsUp,
} from "react-icons/fa";
import { useQuery } from "react-query";

const InstructorPage = () => {
  const {
    data: instructors = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await fetch("https://education-entertainment-bknd.vercel.app/teachers");
      return res.json();
    },
  });
  return (
    <div className="mt-8">
      <Helmet>
        <title>instructors</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-green-500 text-center mb-4">
        Meet Our Skilled instructors
      </h1>
      <h1 className="text-2xl font-bold text-green-900 text-center mb-8">
        Elevate Your Skills with Expert Mentorship
      </h1>
      <div className="md:grid grid-cols-2 my-6 mx-2 gap-x-6 gap-y-12">
        {instructors.length >0 && instructors.map((instructor) => (
          <div
            key={instructor._id}
            className="card md:my-0 my-5 md:card-side bg-base-100 shadow-2xl"
          >
            <div className="md:flex flex-row-reverse">
              <figure className="md:w-1/2 md:h-auto h-1/2">
                <img
                  className="w-full h-full object-cover"
                  src={instructor.image}
                  alt="Album"
                />
              </figure>
              <div className="card-body md:w-1/2 md:h-auto h-1/2 p-4 bg-black bg-opacity-50">
                <div className="flex flex-col justify-center items-start">
                  <h2 className="card-title text-base">
                    <span className="text-green-500">Name:</span>{" "}
                    <span className=" text-green-500">{instructor.name}</span>
                  </h2>
                  {/* <p className="mb-2 card-title text-base">
                    <span className="text-green-500">Instructor of:</span>{" "}
                    <span className=" text-green-500">{instructor.classes[0]}</span>
                  </p> */}
                  <p className="mb-2 card-title text-base">
                    <span className="text-green-500">Current Students:</span>{" "}
                    <span className=" text-green-500">
                      {instructor.classes_taken}
                    </span>
                  </p>
                  <p className="mb-2 card-title text-base email-truncate">
                    <span className="text-green-500">Email:</span>{" "}
                    <span className=" text-green-500 overflow-hidden truncate max-w-[200px]">
                      {instructor.email}
                    </span>
                  </p>
                  <div className="card-actions flex mt-4">
                    <button className="btn text-green-900 text-green-500 hover:bg-green-700 flex-1 ml-2">
                      <FaThumbsUp className="mr-2" />
                      Like
                    </button>
                    <button className="btn flex text-green-900 text-green-500 hover:bg-green-700 flex-1 ml-2">
                      <FaComment className="mr-2" />
                      Comment
                    </button>
                    <button className="btn text-green-900 text-green-500 hover:bg-green-700 flex-1 ml-2">
                      <FaInfoCircle className="mr-2" />
                      Details
                    </button>
                    <button className="btn text-green-900 text-green-500 hover:bg-green-700 flex-1 ml-2">
                      <FaShareAlt className="mr-2" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorPage;
