import { View, Text,Pressable,TextInput,Image } from 'react-native'

import { router } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Login() {
    return (
        <SafeAreaView className="flex-1 bg-[#232323]">
            <View className='items-center justify-center mt-[40px]'>
                <Pressable
                className='absolute left-4'
                onPress={()=> router.back()}>
                    <MaterialIcons name='arrow-left' size={15} color={"#E2F163"}/>

                </Pressable>     
                <Text className="text-[#E2F163] text-[20px] font-bold">
                    Login
                </Text>
            </View>
            <View className=' items-center  mt-[70px]'>
                <Text className='text-[20px] text-white mb-7 font-bold'>Welcome</Text>
                <Text className='text-[14px]/[14px] font-light  text-gray-300 justify-center text-center flex px-[35px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
            </View>
            <View className='bg-[#B3A0FF] px-[41px] py-[30px] mt-[30px]'>
                <View>
                    <Text>Username or email</Text>
                    <TextInput
                        onPress={() => {}}
                        className='flex-1 rounded-2xl border-0 bg-white p-[15px] mt-2 text-[16px]'                                   
                        style={{outline:'none'}}
                        
                
                        placeholderTextColor="#232323" 
                        placeholder='example@example.com'/>

                </View>
                <View className='mt-[15px]'>
                    <Text>Password</Text>
                    <TextInput
                        onPress={() => {}}
                        className='flex-1 rounded-2xl border-0 bg-white p-[15px] mt-2 text-[16px]'                                   
                        style={{outline:'none'}}
                        secureTextEntry
                        
                        placeholderTextColor="#232323" 
                        placeholder='*************'/>
                    <Pressable className='text-[12px] text[#232323] items-end mt-[10px]' onPress={() => router.push("/signup")}>Forgot Password?</Pressable>

                </View>


            </View>
            <Pressable onPress={() => router.push("/")} className='flex mx-auto mt-[45px]  px-[64px] max-w-[180px] text-[18px] text-white border border-white rounded-[50px] py-[9px] bg-[#FFFFFF17] '>Log in</Pressable>
            <View className='items-center gap-[20px] mt-[25px]'>
                <Text className='text-[14px] font-light  text-gray-300'>or sign up with</Text>
                <View className='flex-row gap-[20px]'>
                    <Pressable onPress={() => router.push("/")} className=" ">
                        <Image
                          source={require("../../assets/icons/google.png")}
                          className=""
                          style={{width:34,height:34}}
                          resizeMode="contain"
                        />
                    </Pressable>
                    <Pressable onPress={() => router.push("/")} className=" ">
                        <Image
                          source={require("../../assets/icons/facebook.png")}
                          className=""
                          style={{width:34,height:34}}
                          resizeMode="contain"
                        />
                    </Pressable>
                </View>
                
            </View>
            <View className='text-[14px] font-light  text-gray-300 flex-row justify-center mt-[70px]'>
                Don’t have an account? {" "} <Pressable className='text-[#E2F163] ml-[2px]' onPress={() => router.push("/signup")}> Sign Up</Pressable>
                
            </View>           
            

        </SafeAreaView>
    )
}
