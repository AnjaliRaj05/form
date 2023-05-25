import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react';
  import { Input ,Select} from '@chakra-ui/react';
  import { VStack } from '@chakra-ui/react';
export default function SignUp() {
  return (

    
      <VStack spacing='15px'>   
      <FormControl isRequired>
  <FormLabel>First Name</FormLabel>
  <Input placeholder=' Enter First name' />
  
</FormControl>
<FormControl isRequired>
  <FormLabel>Last Name</FormLabel>
  <Input placeholder='Enter last name' />
</FormControl>
<FormControl isRequired>
  <FormLabel>Password</FormLabel>
  <Input placeholder='Enter password ' />
</FormControl>
<FormControl isRequired>
  <FormLabel>confirm Password</FormLabel>
  <Input placeholder='Enter confirm password' />
 
</FormControl>
    <FormControl isRequired>
  <FormLabel>Email address</FormLabel>
  <Input placeholder='Enter your email address' />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
<FormControl>
  <FormLabel>Gender</FormLabel>
  <Select placeholder='Select gender'>
    <option>Male</option>
    <option>female</option>
    <option>other</option>
  </Select>
</FormControl>
<button>Submit</button>
</VStack>

  )
}
