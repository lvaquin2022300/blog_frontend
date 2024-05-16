import { useNavigate } from "react-router-dom"
import { useDeletePost } from "../../shared/hooks"

export const UserPostCard = ({
    usuario,
    _id,
    titulo,
    categoria,
    texto,
    navigateToPostHandler
}) => {

    const navigate = useNavigate()
    const { PostDelete } = useDeletePost()

    const handleEdit = () => {
        navigate(`/editpost/${_id}`)
    }

    const handleDelete = (event) => {
        event.preventDefault()

        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este post?");

        if (confirmDelete) {
            PostDelete(_id);
        }
    }

    const handleNavigate = () => {
        navigateToPostHandler(_id)
    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{titulo}</div>
                <p className="text-gray-700 text-base mb-2">{texto}</p>
                <div className="flex items-center">
                    <i className="mr-1 fas fa-user"></i>
                    <p className="text-gray-600 text-sm">{usuario}</p>
                </div>
                <div className="flex items-center mt-2">
                    <i className="mr-1 fas fa-layer-group"></i>
                    <p className="text-gray-600 text-sm">{categoria}</p>
                </div>
            </div>
            <div className="px-6 py-4">
                <button className="mr-2 text-blue-500 hover:text-blue-700 focus:outline-none" onClick={handleEdit}>
                    <i className="mr-1 fas fa-pencil-alt"></i>Editar
                </button>
                <button className="text-red-500 hover:text-red-700 focus:outline-none" onClick={handleDelete}>
                    <i className="mr-1 fas fa-trash-alt"></i>Eliminar
                </button>
            </div>
        </div>
    );
    

}