import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loader2Icon } from 'lucide-react'

const AddBooks = ({ initialData, onSuccess, onCancel }) => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const isEditMode = !!initialData

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.target)

        const bookData = {
            title: formData.get("title"),
            author: formData.get("author"),
            isbn: formData.get("isbn"),
            publishDate: formData.get("publishDate"),
            genre: formData.get("genre"),
            price: Number(formData.get("price")),
            stock: Number(formData.get("stock")),
            description: formData.get("description"),
        }

        console.log(bookData)

        // 👉 API call here
        // await createBook(bookData)

        setLoading(false)

        if (onSuccess) onSuccess()
        else navigate(-1)
    }

    return (
        <form onSubmit={handleSubmit} className='space-y-6 max-w-3xl animate-fade-in'>

            {/* Book Info */}
            <div className='card p-5 sm:p-6'>
                <h3 className='font-medium mb-6 pb-4 border-b border-slate-100'>
                    Book Information
                </h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-700'>

                    <div>
                        <label className='block mb-2'>Title</label>
                        <input name='title' required defaultValue={initialData?.title} />
                    </div>

                    <div>
                        <label className='block mb-2'>Author</label>
                        <input name='author' required defaultValue={initialData?.author} />
                    </div>

                    <div>
                        <label className='block mb-2'>ISBN</label>
                        <input name='isbn' required defaultValue={initialData?.isbn} />
                    </div>

                    <div>
                        <label className='block mb-2'>Publish Date</label>
                        <input
                            type='date'
                            name='publishDate'
                            required
                            defaultValue={
                                initialData?.publishDate
                                    ? new Date(initialData.publishDate).toISOString().split("T")[0]
                                    : ""
                            }
                        />
                    </div>

                    <div className='sm:col-span-2'>
                        <label className='block mb-2'>Description</label>
                        <textarea
                            name='description'
                            rows={3}
                            className='resize-none'
                            defaultValue={initialData?.description}
                        />
                    </div>

                </div>
            </div>

            {/* Book Details */}
            <div className='card p-5 sm:p-6'>
                <h3 className='text-base font-medium mb-6 pb-4 border-b border-slate-100'>
                    Book Details
                </h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-700'>

                    <div>
                        <label className='block mb-2'>Genre</label>
                        <input name='genre' required defaultValue={initialData?.genre} />
                    </div>

                    <div>
                        <label className='block mb-2'>Price</label>
                        <input
                            type='number'
                            name='price'
                            required
                            min="0"
                            step="0.01"
                            defaultValue={initialData?.price || 0}
                        />
                    </div>

                    <div>
                        <label className='block mb-2'>Stock</label>
                        <input
                            type='number'
                            name='stock'
                            required
                            min="0"
                            defaultValue={initialData?.stock || 0}
                        />
                    </div>

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
                    {isEditMode ? "Update Book" : "Add Book"}
                </button>

            </div>
        </form>
    )
}

export default AddBooks