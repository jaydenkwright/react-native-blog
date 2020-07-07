import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import React from 'react'
import IndexScreen from './src/Screens/IndexScreen'
import { Provider } from './src/Context/BlogContext'

const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initalRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
})



const App = createAppContainer(navigator)

export default () => {
  return <Provider>
      <App />
    </Provider>
}
