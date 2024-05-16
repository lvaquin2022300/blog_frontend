import { useNavigate } from "react-router-dom";
import { UserPostCard } from "./UserPostCard";


export const UsersPosts = ({ posts }) => {
  const navigate = useNavigate()

  const handleNavigateToPost = (id) => {
    navigate(`/post/${id}`)
  }


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <span className="text-xl font-bold col-span-full">MIS POST</span>
      {Array.isArray(posts.posts) && posts.posts.map((p) => (
        <div key={p._id} className="my-4">
          <div className="bg-white shadow-md rounded-md">
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{p.titulo}</h2>
              <p className="text-gray-700 mb-2">{p.texto}</p>
              <div className="flex items-center mb-2">
                <i className="mr-1 fas fa-user text-gray-600"></i>
                <p className="text-sm text-gray-600">{p.usuario}</p>
              </div>
              <div className="flex items-center">
                <i className="mr-1 fas fa-layer-group text-gray-600"></i>
                <p className="text-sm text-gray-600">{p.categoria}</p>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200">
              <button className="mr-2 text-blue-500 hover:text-blue-700 focus:outline-none" onClick={() => handleNavigateToPost(p._id)}>
                <i className="mr-1 fas fa-eye"></i>Ver más
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

}