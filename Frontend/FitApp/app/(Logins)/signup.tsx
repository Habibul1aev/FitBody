import { View, Text,Pressable,TextInput,Image } from 'react-native'

import { router } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function signup() {
    return (
        <SafeAreaView className="flex-1 bg-[#232323]">
            <View className='items-center justify-center mt-[40px]'>
                <Pressable
                className='absolute left-4'
                onPress={()=> router.back()}>
                    <MaterialIcons name='arrow-left' size={15} color={"#E2F163"}/>

                </Pressable>     
                <Text className="text-[#E2F163] text-[20px] font-bold">
                    Create Account
                </Text>
            </View>
            <View className=' items-center  mt-[40px]'>
                <Text className='text-[20px] text-white  font-bold'>Let's start!</Text>
            </View>
            <View className='bg-[#B3A0FF] px-[41px] py-[30px] mt-[30px]'>
                <View>
                    <Text>Full name</Text>
                    <TextInput
                        onPress={() => {}}
                        className='flex-1 rounded-2xl border-0 bg-white p-[15px] mt-2 text-[16px]'                                   
                        style={{outline:'none'}}
                        
                        
                        placeholderTextColor="#232323" 
                        placeholder='example@example.com'/>

                </View>
                <View className='mt-[15px]'>
                    <Text>Email or Mobile Number</Text>
                    <TextInput
                        onPress={() => {}}
                        className='flex-1 rounded-2xl border-0 bg-white p-[15px] mt-2 text-[16px]'                                   
                        style={{outline:'none'}}
                        keyboardType='numeric'
                        inputMode='numeric'                        
                        placeholderTextColor="#232323" 
                        placeholder='+123 567 89000'/>

                </View>
                <View className='mt-[15px]'>
                    <Text>Password</Text>
                    <TextInput
                        onPress={() => {}}
                        className='flex-1 rounded-2xl border-0 bg-white p-[15px] mt-2 text-[16px]'                                   
                        style={{outline:'none'}}
                        secureTextEntry                      
                        placeholder='*************'                       
                        placeholderTextColor="#232323" />

                </View>
                <View className='mt-[15px]'>
                    <Text> Confirm Password</Text>
                    <TextInput
                        onPress={() => {}}
                        className='flex-1 rounded-2xl border-0 bg-white p-[15px] mt-2 text-[16px]'                                   
                        style={{outline:'none'}}
                        secureTextEntry                      
                        placeholder='*************'                       
                        placeholderTextColor="#232323"/>

                </View>


            </View>
            <View className='text-[14px] font-light  text-gray-300 flex-row justify-center mt-[20px]'>
                By continuing, you agree to <Pressable className='text-[#E2F163] ml-[2px]' onPress={() => router.push("/signup")}> Terms of Use</Pressable> and  {" "} <Pressable className='text-[#E2F163] ml-[2px]' onPress={() => router.push("/signup")}> Privacy Policy.</Pressable>
                
            </View> 
            <Pressable onPress={() => router.push("/")} className='flex mx-auto mt-[20px]  px-[40px] max-w-[180px] text-[18px] border-white text-white border rounded-[50px] py-[9px] bg-[#FFFFFF17] '>Sign Up</Pressable>
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
                Already have an account?  {" "} <Pressable className='text-[#E2F163] ml-[2px]' onPress={() => router.push("/signup")}> Log in</Pressable>
                
            </View>           
            

        </SafeAreaView>
    )
}
