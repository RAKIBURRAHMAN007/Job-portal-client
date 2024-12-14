import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const data = useLoaderData();
    const {
        _id,
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements,
        responsibilities,
        status,
        hr_email,
        hr_name,
        company_logo
    } = data;

    return (
        <div className="container mx-auto p-4 md:p-8">
            {/* Job Header */}
            <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden mb-8">
                <img src={company_logo} alt={company} className="w-24 h-24 md:w-40 md:h-40 object-cover m-4" />
                <div className="flex-1 px-4">
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">{title}</h1>
                    <p className="text-gray-600 text-sm mb-1">Company: <span className="font-medium">{company}</span></p>
                    <p className="text-gray-600 text-sm mb-1">Location: <span className="font-medium">{location}</span></p>
                    <p className="text-gray-600 text-sm mb-1">Type: <span className="font-medium">{jobType}</span></p>
                    <p className="text-gray-600 text-sm">Category: <span className="font-medium">{category}</span></p>
                </div>
            </div>

            {/* Job Details */}
            <div className="bg-white shadow-lg rounded-lg p-4 md:p-8 mb-8">
                <h2 className="text-xl font-bold mb-4">Job Details</h2>
                <p className="text-gray-700 mb-2">
                    <span className="font-medium">Salary Range:</span> ${salaryRange.min} - ${salaryRange.max}
                </p>
                <p className="text-gray-700 mb-2">
                    <span className="font-medium">Application Deadline:</span> {applicationDeadline}
                </p>
                <p className="text-gray-700 mb-4">{description}</p>
            </div>

            {/* Responsibilities */}
            <div className="bg-white shadow-lg rounded-lg p-4 md:p-8 mb-8">
                <h2 className="text-xl font-bold mb-4">Responsibilities</h2>
                <ul className="list-disc pl-5 text-gray-700">
                    {responsibilities.map((item, index) => (
                        <li key={index} className="mb-2">{item}</li>
                    ))}
                </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white shadow-lg rounded-lg p-4 md:p-8 mb-8">
                <h2 className="text-xl font-bold mb-4">Requirements</h2>
                <ul className="list-disc pl-5 text-gray-700">
                    {requirements.map((item, index) => (
                        <li key={index} className="mb-2">{item}</li>
                    ))}
                </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-white shadow-lg rounded-lg p-4 md:p-8 mb-8">
                <h2 className="text-xl font-bold mb-4">HR Contact</h2>
                <p className="text-gray-700 mb-2"><span className="font-medium">Name:</span> {hr_name}</p>
                <p className="text-gray-700 mb-2"><span className="font-medium">Email:</span> {hr_email}</p>
                <p className={`text-gray-700 mb-2 font-medium ${status === 'active' ? 'text-green-600' : 'text-red-600'}`}>
                    Status: {status}
                </p>
            </div>

            {/* Apply Now Button */}
            <div className="text-center">
                <Link to={`/jobapply/${_id}`}><button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition">
                    Apply Now
                </button></Link>
            </div>
        </div>
    );
};

export default JobDetails;
