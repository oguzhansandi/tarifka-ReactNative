import React from 'react'
import { SafeAreaView  } from 'react-native'
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import DetailPage from './pages/Detail';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Categories' 
          component={Categories}
          options={{
            headerTitleAlign : 'center', 
            headerTintColor:'orange',
            headerTitleStyle : {
              fontWeight : 'bold',
            }
          }}
        />
        <Stack.Screen 
          name='Meals' 
          component={Meals} 
          options={{
            headerTintColor:'orange',
            headerTitleAlign : 'center',
            headerTitleStyle : {
              fontWeight : 'bold',
            }
          }}  
        />
        <Stack.Screen 
          name = 'Detail'
          component={DetailPage}
          options={{
            headerTintColor: 'orange',
            headerTitleAlign : 'center',
            headerTitleStyle : {
              fontWeight : 'bold',
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Router;