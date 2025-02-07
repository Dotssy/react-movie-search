import { useCallback, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useMovieSearchContext } from '../context/MovieSearchContext'
import 'react-toastify/dist/ReactToastify.css'

const UserWarning = () => {
  const { error, setError } = useMovieSearchContext()

  const displayToast = (type, message) => {
    toast[type](message)
    toast.clearWaitingQueue()
  }

  const resetErrors = useCallback(() => {
    setError({ type: '', message: '' })
  }, [setError])

  useEffect(() => {
    if (error.type && error.message) {
      displayToast(error.type, error.message)
      resetErrors()
    }
  }, [error, resetErrors])

  return (
    <ToastContainer
      position="top-center"
      autoClose={3500}
      closeOnClick
      limit={4}
      closeButton={false}
    />
  )
}

export default UserWarning
