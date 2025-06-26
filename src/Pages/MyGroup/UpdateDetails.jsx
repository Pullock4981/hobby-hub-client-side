

import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
// import { useLoaderData, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

const UpdateDetails = () => {
    const groupData = useLoaderData();
    const navigate = useNavigate();

    const {
        groupName, hobbyCategory, location,
        maxMembers, startDate, photo,
        userName, userEmail, description
    } = groupData || {};

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedGroup = Object.fromEntries(formData.entries());

        fetch(`https://hobby-hub-server-tawny.vercel.app/groups/${groupData._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedGroup),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Updated successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myGroup');  // redirect after success
                }
            });
    };

    return (
        <div className='md:px-20 px-4 bg-[#E3F0E9]'>
            <h1 className="text-2xl font-semibold py-4">Update Group Details</h1>
            <form onSubmit={handleUpdateSubmit}>
                <div className='grid md:grid-cols-2 gap-4 py-10'>
                    <fieldset className="fieldset bg-base-200 p-4">
                        <label className="label">Group Name</label>
                        <input type="text" name='groupName' defaultValue={groupName} className="input w-full" required />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 p-4">
                        <label className="label">Hobby Category</label>
                        <input type="text" name='hobbyCategory' defaultValue={hobbyCategory} className="input w-full" required />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 p-4">
                        <label className="label">Meeting Location</label>
                        <input type="text" name='location' defaultValue={location} className="input w-full" required />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 p-4">
                        <label className="label">Max Members</label>
                        <input type="number" name='maxMembers' defaultValue={maxMembers} className="input w-full" required />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 p-4">
                        <label className="label">Start Date</label>
                        <input type="date" name='startDate' defaultValue={startDate} className="input w-full" required />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 p-4">
                        <label className="label">Photo URL</label>
                        <input type="text" name='image' defaultValue={photo} className="input w-full" required />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 p-4">
                        <label className="label">User Name</label>
                        <input type="text" name='userName' defaultValue={userName} readOnly className="input w-full" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 p-4">
                        <label className="label">User Email</label>
                        <input type="email" name='userEmail' defaultValue={userEmail} readOnly className="input w-full" />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <label className="label">Description</label>
                    <textarea
                        name="description"
                        defaultValue={description}
                        className="textarea textarea-bordered w-full"
                        placeholder="Group Description"
                        required
                    />
                </fieldset>
                <div className="form-control py-6">
                    <input type="submit" className="btn bg-[#2A9261] text-white font-bold w-full" value="Update Group" />
                </div>
            </form>
        </div>
    );
};

export default UpdateDetails;
