import { Provider } from 'react-redux'
import addons from '@storybook/addons'
import withReduxCore from 'addon-redux/withRedux'
import store from 'store/storybook-store'

export const withRedux: any = (state: any, actions: any) => withReduxCore(addons)({
    Provider, store, state, actions
})