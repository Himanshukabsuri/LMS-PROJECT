import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loader2Icon } from 'lucide-react'

const AddUsers = ({ initialData, onSuccess, onCancel }) => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const isEditMode = !!initialData

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.target)

        const userData = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            role: formData.get("role"),
            password: formData.get("password"), // only for create
            status: formData.get("status") || "ACTIVE"
        }

        console.log(userData)

        // 👉 API CALL HERE
        // if(isEditMode) await updateUser(id, userData)
        // else await createUser(userData)

        setLoading(false)

        if (onSuccess) onSuccess()
        else navigate(-1)
    }

    return (
        <form onSubmit={handleSubmit} className='space-y-6 max-w-3xl animate-fade-in'>

            {/* Personal Info */}
            <div className='card p-5 sm:p-6'>
                <h3 className='font-medium mb-6 pb-4 border-b border-slate-100'>
                    User Information
                </h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-700'>

                    <div>
                        <label className='block mb-2'>First Name</label>
                        <input name='firstName' required defaultValue={initialData?.firstName} />
                    </div>

                    <div>
                        <label className='block mb-2'>Last Name</label>
                        <input name='lastName' required defaultValue={initialData?.lastName} />
                    </div>

                    <div>
                        <label className='block mb-2'>Email</label>
                        <input type='email' name='email' required defaultValue={initialData?.email} />
                    </div>

                    <div>
                        <label className='block mb-2'>Phone</label>
                        <input name='phone' required defaultValue={initialData?.phone} />
                    </div>

                </div>
            </div>

            {/* Account Details */}
            <div className='card p-5 sm:p-6'>
                <h3 className='text-base font-medium mb-6 pb-4 border-b border-slate-100'>
                    Account Details
                </h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-700'>

                    <div>
                        <label className='block mb-2'>Role</label>
                        <select name="role" defaultValue={initialData?.role || "USER"}>
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                        </select>
                    </div>

                    {!isEditMode && (
                        <div>
                            <label className='block mb-2'>Password</label>
                            <input type='password' name='password' required />
                        </div>
                    )}

                    {isEditMode && (
                        <div>
                            <label className='block mb-2'>Status</label>
                            <select name="status" defaultValue={initialData?.status || "ACTIVE"}>
                                <option value="ACTIVE">Active</option>
                                <option value="INACTIVE">Inactive</option>
                            </select>
                        </div>
                    )}

                </div>
            </div>

            {/* Buttons */}
            <div className='flex flex-col-reverse sm:flex-row justify-end gap-3 pt-2'>

                <button
                    type='button'
                    className='btn-secondary'
                    onClick={() => (onCancel ? onCancel() : navigate(-1))}
                >
                    Cancel
                </button>

                <button
                    type='submit'
                    disabled={loading}
                    className='btn-primary flex items-center justify-center'
                >
                    {loading && <Loader2Icon className='w-4 h-4 mr-2 animate-spin' />}
                    {isEditMode ? "Update User" : "Add User"}
                </button>

            </div>
        </form>
    )
}

export default AddUsers