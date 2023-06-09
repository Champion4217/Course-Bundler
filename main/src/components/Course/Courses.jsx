import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Img,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const addToPlayHandler=()=>{
    console.log('added to playlist')
}

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlayHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW={'200px'}
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text children={description} noOfLines={2} />
      <HStack>
        <Text
          children={'Creator'}
          fontWeight={'bold'}
          textTransform={'uppercase'}
        />
        <Text
          children={creator}
          fontFamily={'body'}
          textTransform={'uppercase'}
        />
      </HStack>

      <Heading
        textAlign={'center'}
        size={'xs'}
        children={`Lectures-${lectureCount}`}
        textTransform={'uppercase'}
      />

      <Heading
        size={'xs'}
        children={`Views-${views}`}
        textTransform={'uppercase'}
      />

      <Stack direction={['column', 'row']} alignItems={'center'}>
       <Link to={`/courses/${id}`}>
        <Button colorScheme='yellow'>Watch Now</Button>
       </Link>
       <Button variant={'ghost'} onClick={()=>addToPlayHandler(id)} colorScheme='yellow'>Add to Playlist</Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const categories = [
    'Web development',
    'Artificial Intellegence',
    'Data Structure & Algorithm',
    'App Development',
    'Data Science',
    'Game Development',
  ];

  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />

      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course.."
        type={'text'}
        focusBorderColor="yellow.500"
      />

      <HStack
        overflowX={'auto'}
        paddingY={'8'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          title={'sample'}
          description={'sample'}
          views={23}
          imageSrc={'sample'}
          id={'sample'}
          creator={'sample'}
          lectureCount="2"
          addToPlayHandler={addToPlayHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
