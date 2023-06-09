import {
  Avatar,
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const fileUploadCss = {
  cursor: 'pointer',
  marginLeft: '-5%',
  width: '110%',
  border: 'none',
  height: '100%',
  color: '#ECC94B',
  backgroundColor: 'white',
};

const fileUploadStyle = {
  '&::file-selector-button': fileUploadCss,
};

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [imagePrev, setimagePrev] = useState('');
  const [image, setImage] = useState('');

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setimagePrev(reader.result);
      setImage(file);
    };
  };

  return (
    <Container h={'100vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children={'Registration'} />
        <form style={{ width: '100%' }}>
          <Box my={''} display={'flex'} justifyContent={'center'}>
            <Avatar src={imagePrev} size={'2xl'} />
          </Box>

          <Box marginY={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Name"
              type="text"
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box marginY={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box marginY={'4'}>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box marginY={'4'}>
            <FormLabel htmlFor="chooseAvatar" children="Choose Avatar" />
            <Input
              accept="image/*"
              required
              id="chooseAvatar"
              type="File"
              focusBorderColor="yellow.500"
              css={fileUploadStyle}
              onChange={changeImageHandler}
            />
          </Box>

          <Button my={'4'} colorScheme="yellow" type="submit">
            Sign Up
          </Button>

          <Box my={'4'}>
            Already Signed Up?{' '}
            <Link to={'/login'}>
              <Button colorScheme="yellow" variant={'link'}>
                Log In
              </Button>{' '}
              Here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;