import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react';
//   import {  InputGroup, VStack } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
// import { Button } from '@chakra-ui/react';
// import { useToast } from '@chakra-ui/react';

export default function Login() {
  return (
    <FormControl isRequired>
    <FormLabel>First name</FormLabel>
    <Input placeholder='First name' />
  </FormControl>
  )
}
