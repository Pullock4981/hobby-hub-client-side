

// import { useContext, useState } from "react";
// import { AuthContext } from "../../Contexts/AuthContext";
// import { useNavigate } from "react-router";
// import Swal from "sweetalert2";


// const CreateGroup = () => {
//     const { user } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const [loading, setLoading] = useState(false);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setLoading(true);

//         const form = e.target;
//         const newGroup = {
//             groupName: form.groupName.value,
//             hobbyCategory: form.hobbyCategory.value,
//             location: form.location.value,
//             maxMembers: parseInt(form.maxMembers.value),
//             startDate: form.startDate.value,
//             image: form.image.value,
//             description: form.description.value,
//             userName: user.displayName,
//             userEmail: user.email,
//         };

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
//                     navigate('/myGroup');
//                 } else {
//                     throw new Error("Failed to create group");
//                 }
//             })
//             .catch(() => {
//                 Swal.fire("Error!", "Something went wrong. Please try again.", "error");
//             })
//             .finally(() => setLoading(false));
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
//                     <InputField name="image" label="Image URL" placeholder="Image URL" />

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
//                     <button type="submit" className="btn bg-[#2A9261] text-white font-bold w-full" disabled={loading}>
//                         {loading ? "Creating..." : "Create Group"}
//                     </button>
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
//         <select name={name} className="select select-bordered w-full" required defaultValue="">
//             <option value="" disabled>Select a Hobby Category</option>
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

import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

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
        <div className="md:px-20 px-4 py-8 bg-base-200">
            <h1 className="text-3xl font-bold text-center mb-10">Create a New Group</h1>

            <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <InputField name="groupName" label="Group Name" placeholder="Group Name" />
                    <SelectField name="hobbyCategory" label="Hobby Category" />

                    <InputField name="location" label="Meeting Location" placeholder="Location" />
                    <InputField name="maxMembers" label="Max Members" type="number" placeholder="Max Members" />
                    <InputField name="startDate" label="Start Date" type="date" />
                    <InputField name="image" label="Image URL" placeholder="Image URL" />

                    <InputField name="userName" label="User Name" defaultValue={user.displayName} readOnly />
                    <InputField name="userEmail" label="User Email" defaultValue={user.email} readOnly />
                    {/* <label className="block mb-2 font-semibold">Description</label> */}
                    <textarea
                        name="description"
                        className="textarea textarea-bordered w-full"
                        placeholder="Group Description"
                        required
                    />
                </div>
                <div className="form-control">
                    <button
                        type="submit"
                        className="btn font-bold w-full text-white"
                        style={{ backgroundColor: "#6c8da7" }}
                        disabled={loading}
                    >
                        {loading ? "Creating..." : "Create Group"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateGroup;

// 🔹 Minimal Input Component
const InputField = ({ name, label, type = "text", placeholder = "", defaultValue = "", readOnly = false }) => (
    <div>
        <label className="block mb-1 font-semibold">{label}</label>
        <input
            type={type}
            name={name}
            className="input input-bordered w-full"
            placeholder={placeholder}
            defaultValue={defaultValue}
            readOnly={readOnly}
            required={!readOnly}
        />
    </div>
);

// 🔹 Hobby Category Dropdown
const SelectField = ({ name, label }) => (
    <div>
        <label className="block mb-1 font-semibold">{label}</label>
        <select
            name={name}
            className="select select-bordered w-full"
            required
            defaultValue=""
        >
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
    </div>
);
