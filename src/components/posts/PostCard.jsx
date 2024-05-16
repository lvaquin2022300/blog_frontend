export const PostCard = ({
    usuario,
    _id,
    titulo,
    categoria,
    texto,
    navigateToPostHandler
}) => {
    const handleNavigate = () => {
        navigateToPostHandler(_id)
    }

    /*return (
        <div className="post-card" onClick={handleNavigate}>
            <span className="post-card-title">{titulo}</span>
            <div className="post-box">
                <div className="text-box">
                    <i className="fa-solid fa-user"></i>
                    <span className="post-card-text">{usuario}</span>
                </div>
                <div className="text-box">
                    <i className="fa-solid fa-layer-group"></i>
                    <span className="post-card-text">{categoria}</span>
                </div>
            </div>
            <span className="post-card-subtitle">{texto}</span>
        </div>
    )*/

    return (
        <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={handleNavigate}>
            <span className="block text-xl font-semibold text-gray-800 mb-3">{titulo}</span>
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center space-x-2">
                    <i className="fa-solid fa-user text-gray-600"></i>
                    <span className="text-gray-600">{usuario}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <i className="fa-solid fa-layer-group text-gray-600"></i>
                    <span className="text-gray-600">{categoria}</span>
                </div>
            </div>
            <span className="block text-gray-700">{texto}</span>
        </div>
    );
}