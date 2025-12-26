import { View, Text,Pressable,TextInput,Image } from 'react-native'

import { router } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function forgetPassword() {
    return (
        <SafeAreaView className="flex-1 bg-[#232323]">
            <View className='items-center justify-center mt-[40px]'>
                <Pressable
                className='absolute left-4'
                onPress={()=> router.back()}>
                    <MaterialIcons name='arrow-left' size={15} color={"#E2F163"}/>

                </Pressable>     
                <Text className="text-[#E2F163] text-[20px] font-bold">
                    Forgotten Password
                </Text>
            </View>
            <View className=' items-center  mt-[90px]'>
                <Text className='text-[20px] text-white mb-7 font-bold'>Forgot Password?</Text>
                <Text className='text-[14px]/[14px] font-light  text-gray-300 justify-center text-center flex px-[35px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
            </View>
            <View className='bg-[#B3A0FF] px-[41px] py-[30px] mt-[30px]'>
                <View>
                    <Text>Enter your email address</Text>
                    <TextInput
                        onPress={() => {}}
                        className='flex-1 rounded-2xl border-0 bg-white p-[15px] mt-2 text-[16px]'                                   
                        style={{outline:'none'}}
                        
                
                        placeholderTextColor="#232323" 
                        placeholder='example@example.com'/>

                </View>
                


            </View>
            <Pressable onPress={() => router.push("/setPassword")} className='flex mx-auto mt-[45px]  px-[40px] max-w-[180px] text-[18px] text-white border border-white rounded-[50px] py-[9px] bg-[#FFFFFF17] '>Continue</Pressable>
            
                
            
                      
            

        </SafeAreaView>
    )
}
