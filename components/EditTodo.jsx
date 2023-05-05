import { useState } from "react"

const EditTodo = ({modal, setModal,content,id}) => {
    console.log(id);
    const [modalContent,setModalContent] = useState(content)

    const updateTodo = async() => {
        try {
            const response = await fetch(`http://localhost/api/users/${id}`,{
                method:"PUT"
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="fixed inset-0 w-screen bg-[rgba(0,0,0,0.5)] h-screen flex items-center justify-center">
            <div className="w-full sm:w-2/3 md:1/2 bg-white shadow-xl rounded-md p-4">
                <p className="text-lg font-semibold text-purple-700">Edit Todo</p>
                <div>
                    <textarea name="" cols="30" rows="5" className="w-full border border-neutral-400 rounded" value={modalContent} onChange={(e) => setModalContent(e.target.value)}>
                    </textarea>
                </div>
                <div className="text-right space-x-4 text-sm">
                    <button className="bg-gray-700 text-white py-1 px-2 rounded-md" onClick={() => setModal(!modal)}>Cancel</button>
                    <button className="bg-purple-700 text-white py-1 px-2 rounded-md" onClick={() => updateTodo()}>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default EditTodo