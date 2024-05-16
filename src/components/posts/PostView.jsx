import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { PostDescription } from "./PostDescription";
import { MessageDescription } from "./MessageDescription"
import { usePostDetails, useNewComment, useUserDetails } from "../../shared/hooks";
import { LoadingSpinner } from "../LoadingSpinner";
import { Input } from "../Input";
import {
    validateComment,
    validateCommentMessage
} from '../../shared/validators'
import Footer from "../footer/Footer";
import ViewComplement from "./ViewComplement";

export const PostView = ({ getPosts }) => {
    const { isFetching, getPostsDetails, postDetails } = usePostDetails();

    const { comment, isLoading, comments } = useNewComment();

    const { id } = useParams()

    console.log('Comments:', comments);

    useEffect(() => {
        getPostsDetails(id)
    }, [])

    const [formState, setFormState] = useState({
        comment: {
            value: '',
            isValid: false,
            showError: false
        },
    })

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false
        switch (field) {
            case 'comment':
                isValid = validateComment(value)
                break

            default:
                break
        }

        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const handleComment = (event) => {
        event.preventDefault();

        const { isLogger } = useUserDetails()

        if(!isLogger){
            toast.error('Primero debe loggearse');
        }

        comment(id, formState.comment.value);
        setFormState((prevState) => ({
            ...prevState,
            comment: {
                value: '',
                isValid: false,
                showError: false
            }
        }));
    }

    const isSubmitButtonDisable = isLoading || !formState.comment.isValid

    if (isFetching) {
        return <LoadingSpinner />
    }

    /*return (
        <div className="post-container">
            <div className="post-video-description-section">
                <div className="post-description-box2">
                    <PostDescription
                        usuario={postDetails.data.post.usuario}
                        titulo={postDetails.data.post.titulo}
                        categoria={postDetails.data.post.categoria}
                        texto={postDetails.data.post.texto}
                        getPosts={getPosts}
                    />
                </div>
                <div className="message-description-box">
                    
                    <span className="message-title">Comentarios:</span>
                    {postDetails.data.post.comentarios.length === 0 && comments.length === 0 && <p>No hay comentarios aún</p>}
                    {postDetails.data.post.comentarios.map((comentario, index) => (
                        <MessageDescription
                            key={index}
                            usuario={comentario.usuario}
                            texto={comentario.texto}
                        />
                    ))}
                    {comments.map((comentario, index) => (
                        <MessageDescription
                            key={index}
                            usuario={comentario.usuario}
                            texto={comentario.texto}
                        />
                    ))}
                </div>
                <div className="new-message-box">
                    <Input
                        field='comment'
                        placeholder='Nuevo comentario'
                        className='new-message'
                        value={formState.comment.value}
                        onChangeHandler={handleInputValueChange}
                        type='text'
                        onBlurHandler={handleInputValidationOnBlur}
                        showErrorMessage={formState.comment.showError}
                        validationMessage={validateCommentMessage}
                    />
                    <button onClick={handleComment} disabled={isSubmitButtonDisable} className="send-button">
                        <i className="fa-solid fa-arrow-up-from-bracket"></i>
                    </button>
                </div>
            </div>
        </div>
    )*/

    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Sección de Descripción del Post */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <PostDescription
                usuario={postDetails.data.post.usuario}
                titulo={postDetails.data.post.titulo}
                categoria={postDetails.data.post.categoria}
                texto={postDetails.data.post.texto}
                getPosts={getPosts}
              />
            </div>
            
            {/* Sección de Comentarios */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Comentarios:</h2>
                {(postDetails.data.post.comentarios.length === 0 && comments.length === 0) && <p className="text-gray-500">No hay comentarios aún</p>}
                {postDetails.data.post.comentarios.map((comentario, index) => (
                  <MessageDescription
                    key={index}
                    usuario={comentario.usuario}
                    texto={comentario.texto}
                  />
                ))}
                {comments.map((comentario, index) => (
                  <MessageDescription
                    key={index}
                    usuario={comentario.usuario}
                    texto={comentario.texto}
                  />
                ))}
              </div>
              
              {/* Sección de Nuevo Comentario */}
              <div>
                <Input
                  field='comment'
                  placeholder='Nuevo comentario'
                  className='w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400'
                  value={formState.comment.value}
                  onChangeHandler={handleInputValueChange}
                  type='text'
                  onBlurHandler={handleInputValidationOnBlur}
                  showErrorMessage={formState.comment.showError}
                  validationMessage={validateCommentMessage}
                />
                <button onClick={handleComment} disabled={isSubmitButtonDisable} className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none">
                  Enviar
                </button>
              </div>
            </div>
          </div>
          <ViewComplement></ViewComplement>
        </div>
      );
}