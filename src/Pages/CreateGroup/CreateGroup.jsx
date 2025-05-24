// // import React from 'react';
// // import Swal from 'sweetalert2';

import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

// import { useContext } from "react";
// import { AuthContext } from "../../Contexts/AuthContext";
// import { Link, useNavigate } from "react-router";
// import Swal from "sweetalert2";

// // const CreateGroup = () => {

// //     // handle form submit
// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         const formData = new FormData(e.target);
// //         const newGroup = Object.fromEntries(formData.entries());
// //         console.log(newGroup);

// //         // send data to server
// //         fetch('https://hobby-hub-server-tawny.vercel.app/groups', {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json',
// //             },
// //             body: JSON.stringify(newGroup),
// //         })
// //             .then(res => res.json())
// //             .then(data => {
// //                 if (data.insertedId) {
// //                     Swal.fire({
// //                         title: "Group created successfully!",
// //                         icon: "success",
// //                         draggable: true
// //                     });
// //                 }
// //                 // console.log('Group created successfully:', data);
// //                 // handle success
// //             })
// //     };
// //     return (
// //         <div className='md:px-20 px-4 bg-[#E3F0E9]'>
// //             <h1 className='text-3xl font-bold text-center py-10'>
// //                 Create a new group
// //             </h1>
// //             <form onSubmit={handleSubmit}>
// //                 <div className='grid md:grid-cols-2 gap-4 mt-10 mb-4'>
// //                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
// //                         <label className="label">Group Name</label>
// //                         <input type="text" name='groupName' className="input w-full" placeholder="Group Name" />
// //                     </fieldset>
// //                     {/* <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
// //                         <label className="label">Hobby Category</label>
// //                         <input type="text" name='hobbyCategory' className="input w-full" placeholder="Select your Category" />
// //                     </fieldset> */}

// //                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
// //                         <label className="label">Hobby Category</label>
// //                         <select name="hobbyCategory" className="select select-bordered w-full" defaultValue="">
// //                             <option value="" disabled>Select your Category</option>
// //                             <option value="Drawing & Painting">Drawing & Painting</option>
// //                             <option value="Photography">Photography</option>
// //                             <option value="Video Gaming">Video Gaming</option>
// //                             <option value="Fishing">Fishing</option>
// //                             <option value="Running">Running</option>
// //                             <option value="Cooking">Cooking</option>
// //                             <option value="Reading">Reading</option>
// //                             <option value="Writing">Writing</option>
// //                             {/* Add more options if needed */}
// //                         </select>
// //                     </fieldset>


// //                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
// //                         <label className="label">Meeting Location</label>
// //                         <input type="text" name='location' className="input w-full" placeholder="Select your Location" />
// //                     </fieldset>
// //                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
// //                         <label className="label">Max-members</label>
// //                         <input type="number" name='maxMembers' className="input w-full" placeholder="Enter your Max-members" />
// //                     </fieldset>
// //                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
// //                         <label className="label">Start date</label>
// //                         <input type="date" name='startDate' className="input w-full" placeholder="Select your Start date" />
// //                     </fieldset>
// //                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
// //                         <label className="label">Photo</label>
// //                         <input type="text" name='photo' className="input w-full" placeholder="Image URL" />
// //                     </fieldset>
// //                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
// //                         <label className="label">User Name</label>
// //                         <input type="text" name='userName' className="input w-full" placeholder="Enter your User Name" />
// //                     </fieldset>
// //                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
// //                         <label className="label">User Email</label>
// //                         <input type="email" name='userEmail' className="input w-full" placeholder="Enter your User Email" />
// //                     </fieldset>
// //                     {/* <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
// //                         <label className="label">Hobby Category</label>
// //                         <input type="text" className="input w-full" placeholder="Select your Category" />
// //                     </fieldset> */}

// //                 </div>
// //                 <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
// //                     <label className="label">Description</label>
// //                     <input type="text" name='description' className="input w-full" placeholder="Group Description" />
// //                 </fieldset>
// //                 <div>
// //                     {/* create Button */}
// //                     <div className="form-control py-6">
// //                         <input type="submit" className="btn bg-[#2A9261] text-white font-bold w-full" value="Create Group" />
// //                     </div>
// //                 </div>
// //             </form>
// //         </div>
// //     );
// // };

// // export default CreateGroup;

// // import React, { useContext } from 'react';
// // import Swal from 'sweetalert2';
// // import { AuthContext } from '../../Contexts/AuthContext';
// // import { useNavigate } from 'react-router-dom';

// const CreateGroup = () => {
//     const { user } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const form = e.target;

//         const newGroup = {
//             groupName: form.groupName.value,
//             hobbyCategory: form.hobbyCategory.value,
//             location: form.location.value,
//             maxMembers: parseInt(form.maxMembers.value),
//             startDate: form.startDate.value,
//             image: form.photo.value,
//             description: form.description.value,
//             userName: user.displayName,
//             userEmail: user.email,
//         };

//         // Send group data to backend
//         fetch('https://hobby-hub-server-tawny.vercel.app/groups', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(newGroup),
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.insertedId) {
//                     Swal.fire("Success!", "Group created successfully!", "success");
//                     navigate('/myGroups');
//                 } else {
//                     throw new Error("Failed to create group");
//                 }
//             })
//             .catch(() => {
//                 Swal.fire("Error!", "Something went wrong. Please try again.", "error");
//             });
//     };

//     return (
//         <div className='md:px-20 px-4 bg-[#E3F0E9]'>
//             <h1 className='text-3xl font-bold text-center py-10'>Create a New Group</h1>

//             <form onSubmit={handleSubmit}>
//                 <div className='grid md:grid-cols-2 gap-4 mt-10 mb-4'>
//                     <InputField name="groupName" label="Group Name" placeholder="Group Name" />
//                     <SelectField name="hobbyCategory" label="Hobby Category" />

//                     <InputField name="location" label="Meeting Location" placeholder="Location" />
//                     <InputField name="maxMembers" label="Max Members" type="number" placeholder="Max Members" />
//                     <InputField name="startDate" label="Start Date" type="date" />
//                     <InputField name="photo" label="Image URL" placeholder="Image URL" />

//                     <InputField name="userName" label="User Name" defaultValue={user.displayName} readOnly />
//                     <InputField name="userEmail" label="User Email" defaultValue={user.email} readOnly />
//                 </div>

//                 <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//                     <label className="label">Description</label>
//                     <textarea
//                         name="description"
//                         className="textarea textarea-bordered w-full"
//                         placeholder="Group Description"
//                         required
//                     />
//                 </fieldset>

//                 <div className="form-control py-6">
//                     <Link to="/">
//                         <button type="submit" className="btn bg-[#2A9261] text-white font-bold w-full">
//                             Create Group
//                         </button>
//                     </Link>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default CreateGroup;

// // 🔹 Reusable Input Component
// const InputField = ({ name, label, type = "text", placeholder = "", defaultValue = "", readOnly = false }) => (
//     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//         <label className="label">{label}</label>
//         <input
//             type={type}
//             name={name}
//             className="input w-full"
//             placeholder={placeholder}
//             defaultValue={defaultValue}
//             readOnly={readOnly}
//             required={!readOnly}
//         />
//     </fieldset>
// );

// // 🔹 Hobby Category Dropdown
// const SelectField = ({ name, label }) => (
//     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//         <label className="label">{label}</label>
//         <select name={name} className="select select-bordered w-full" required>
//             <option value="" disabled selected>Select a Hobby Category</option>
//             <option value="Drawing & Painting">Drawing & Painting</option>
//             <option value="Photography">Photography</option>
//             <option value="Video Gaming">Video Gaming</option>
//             <option value="Fishing">Fishing</option>
//             <option value="Running">Running</option>
//             <option value="Cooking">Cooking</option>
//             <option value="Reading">Reading</option>
//             <option value="Writing">Writing</option>
//         </select>
//     </fieldset>
// );

// import { useContext, useState } from "react";
// import { AuthContext } from "../../Contexts/AuthContext";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

const CreateGroup = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const newGroup = {
            groupName: form.groupName.value,
            hobbyCategory: form.hobbyCategory.value,
            location: form.location.value,
            maxMembers: parseInt(form.maxMembers.value),
            startDate: form.startDate.value,
            image: form.image.value,
            description: form.description.value,
            userName: user.displayName,
            userEmail: user.email,
        };

        fetch('https://hobby-hub-server-tawny.vercel.app/groups', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newGroup),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire("Success!", "Group created successfully!", "success");
                    navigate('/myGroup');
                } else {
                    throw new Error("Failed to create group");
                }
            })
            .catch(() => {
                Swal.fire("Error!", "Something went wrong. Please try again.", "error");
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className='md:px-20 px-4 bg-[#E3F0E9]'>
            <h1 className='text-3xl font-bold text-center py-10'>Create a New Group</h1>

            <form onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2 gap-4 mt-10 mb-4'>
                    <InputField name="groupName" label="Group Name" placeholder="Group Name" />
                    <SelectField name="hobbyCategory" label="Hobby Category" />

                    <InputField name="location" label="Meeting Location" placeholder="Location" />
                    <InputField name="maxMembers" label="Max Members" type="number" placeholder="Max Members" />
                    <InputField name="startDate" label="Start Date" type="date" />
                    <InputField name="image" label="Image URL" placeholder="Image URL" />

                    <InputField name="userName" label="User Name" defaultValue={user.displayName} readOnly />
                    <InputField name="userEmail" label="User Email" defaultValue={user.email} readOnly />
                </div>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <label className="label">Description</label>
                    <textarea
                        name="description"
                        className="textarea textarea-bordered w-full"
                        placeholder="Group Description"
                        required
                    />
                </fieldset>

                <div className="form-control py-6">
                    <button type="submit" className="btn bg-[#2A9261] text-white font-bold w-full" disabled={loading}>
                        {loading ? "Creating..." : "Create Group"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateGroup;

// 🔹 Reusable Input Component
const InputField = ({ name, label, type = "text", placeholder = "", defaultValue = "", readOnly = false }) => (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">{label}</label>
        <input
            type={type}
            name={name}
            className="input w-full"
            placeholder={placeholder}
            defaultValue={defaultValue}
            readOnly={readOnly}
            required={!readOnly}
        />
    </fieldset>
);

// 🔹 Hobby Category Dropdown
const SelectField = ({ name, label }) => (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">{label}</label>
        <select name={name} className="select select-bordered w-full" required defaultValue="">
            <option value="" disabled>Select a Hobby Category</option>
            <option value="Drawing & Painting">Drawing & Painting</option>
            <option value="Photography">Photography</option>
            <option value="Video Gaming">Video Gaming</option>
            <option value="Fishing">Fishing</option>
            <option value="Running">Running</option>
            <option value="Cooking">Cooking</option>
            <option value="Reading">Reading</option>
            <option value="Writing">Writing</option>
        </select>
    </fieldset>
);
