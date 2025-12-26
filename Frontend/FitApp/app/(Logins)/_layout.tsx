import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'


const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={{
                headerShown:false,
                title:"Home"
            }}
            />
            <Tabs.Screen
                name='login'
                options={{
                headerShown:false,
                title:"Login"
            }}
            />
            <Tabs.Screen
                name='signup'
                options={{
                headerShown:false,
                title:"Signup"
            }}
            />
            <Tabs.Screen
                name='setPassword'
                options={{
                headerShown:false,
                title:"setPassword"
            }}
            />
            <Tabs.Screen
                name='forgetPassword'
                options={{
                headerShown:false,
                title:"forgetPassword"
            }}
            />
            
        </Tabs>
    
    )
}

export default _layout