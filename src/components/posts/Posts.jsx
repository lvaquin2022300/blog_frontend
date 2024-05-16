import { useNavigate } from "react-router-dom";
import { PostCard } from "./PostCard";
import Footer from "../footer/Footer";

export const Posts = ({posts}) => {
    const navigate  = useNavigate()

    const handleNavigateToPost = (id) => {
        navigate(`/post/${id}`)
    }


   /* return (
        <div className="posts-container">
          <span className="title-posts">Mis proyectos:</span>
          {Array.isArray(posts.posts) && posts.posts.map((p) => (
            <PostCard
              key={p.id}
              _id={p._id}
              usuario={p.usuario}
              titulo={p.titulo}
              categoria={p.categoria}
              texto={p.texto}
              navigateToPostHandler={handleNavigateToPost}
            />
          ))}
        </div>
      );      */

      return (
        <div className="bg-gray-100 p-6">
          <div className="max-w-7xl mx-auto">
            <span className="block text-2xl font-bold text-gray-800 mb-6">Mis proyectos:</span>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.isArray(posts.posts) && posts.posts.map((p) => (
                <div key={p.id} className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300">
                  <PostCard
                    _id={p._id}
                    usuario={p.usuario}
                    titulo={p.titulo}
                    categoria={p.categoria}
                    texto={p.texto}
                    navigateToPostHandler={handleNavigateToPost}
                  />
                </div>
              ))}
            </div>
          </div>
          <Footer></Footer>

        </div>
        
      );
      
}