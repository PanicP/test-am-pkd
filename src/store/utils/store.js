import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useMemo } from 'react'
import { isShowModalSelector } from './selector'
import { setIsShowModal } from './slice'

const useUtils = () => {
  const dispatch = useDispatch()

  const isShowModal = useSelector(useMemo(isShowModalSelector, [dispatch]))

  const handleSetIsShowModal = useCallback(() => {
    // dispatch(getPokemons())
    dispatch(setIsShowModal())
  }, [dispatch])

//   const handleGetPokemons = () => dispatch(getPokemons())

  return {
    isShowModal,
    handleSetIsShowModal,
  }
}

export default useUtils