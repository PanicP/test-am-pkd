import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useMemo } from 'react'
import { isShowSearchModalSelector } from './selector'
import { setIsShowSearchModal } from './slice'

const useUtils = () => {
  const dispatch = useDispatch()

  const isShowSearchModal = useSelector(useMemo(isShowSearchModalSelector, [dispatch]))
  console.log(isShowSearchModal, 'asdlfkjldskf')
  const handleSetIsShowSearchModal = useCallback(({ isShowSearchModal }) => {
    dispatch(setIsShowSearchModal({ isShowSearchModal }))
  }, [dispatch])


  return {
    isShowSearchModal,
    handleSetIsShowSearchModal,
  }
}

export default useUtils