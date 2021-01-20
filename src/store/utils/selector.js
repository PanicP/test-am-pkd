import { createSelector } from '@reduxjs/toolkit'
import { get } from 'lodash'

export const isShowModalSelector = () =>
    createSelector(
        (state) => state.utils,
        (utils) => get(utils, 'isShowModal', false)
    )