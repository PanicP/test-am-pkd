import { createSelector } from '@reduxjs/toolkit'
import { get } from 'lodash'

export const isShowSearchModalSelector = () =>
    createSelector(
        (state) => state.utils,
        (utils) => get(utils, 'isShowSearchModal', false)
    )

