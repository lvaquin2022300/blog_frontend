export const PostDescription = ({
    usuario,
    titulo,
    categoria,
    texto,
}) => {

    return (
        <div className="bg-gradient-to-br from-purple-200 to-pink-200 shadow-lg rounded-lg p-4">
            <div className="mb-4">
                <h2 className="text-xl font-semibold text-purple-800 mb-2">{titulo}</h2>
                <div className="flex justify-between text-gray-600">
                    <div className="flex items-center space-x-2">
                        <i className="fa-solid fa-user text-gray-700"></i>
                        <span>{usuario}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <i className="fa-solid fa-layer-group text-gray-700"></i>
                        <span>{categoria}</span>
                    </div>
                </div>
            </div>
            <p className="text-gray-700">{texto}</p>
        </div>
    );
};
