import { li } from 'framer-motion/m';
import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2'
const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const handleApply = e => {
        e.preventDefault();
        const from = e.target;
        const linkedin = from.linkedinUrl.value;
        const github = from.githubUrl.value;
        const resume = from.resumeUrl.value;

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedin,
            github,
            resume

        }
        fetch('http://localhost:5000/jobApplications', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your application has been submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }

            })


    }
    return (
        <div>
            <h2 className="text-xl font-bold mb-4 text-center mt-10 md:text-2xl lg:text-3xl">Your Future Job Awaits!!</h2>
            <form onSubmit={handleApply} className="card-body md:w-6/12 mx-auto">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-mono">Linkedin Url </span>
                    </label>
                    <input
                        type="url"
                        name='linkedinUrl'
                        placeholder="Enter your linkedin url"
                        className="font-mono input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-mono">GitHub URL</span>
                    </label>
                    <input
                        type="url"
                        name='githubUrl'
                        placeholder="Enter your GitHub URL"
                        className="font-mono input input-bordered"

                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-mono text-xl">Resume Url</span>
                    </label>
                    <input
                        type="url"
                        name='resumeUrl'
                        placeholder="Enter your Resume Url"
                        className="font-mono input input-bordered"
                        required
                    />


                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary bg-blue-800 hover:bg-green-700 text-white text-xl font-mono">
                        Apply  Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;