import { Card, CardHeader,
    Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
    CardBody,useColorModeValue, useToast,CardFooter,Divider,Image,Heading,Text,Stack,ButtonGroup,Button } from '@chakra-ui/react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useProductStore } from '../store/product';

import { useState } from 'react';
export const ProductCard = ({product,key}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const {deteleProduct,updateProduct} = useProductStore();
    const color = useColorModeValue('black', 'gray.100');
    const toast = useToast()
    const [products,setProducts] = useState(product)
    const handleDelete = async (id) => {

        const {success,message} = await deteleProduct(id)

        if(!success){

            toast({
                title: 'Error',
                description: message,
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
    
        }else{
    
            toast({
                title: 'Sucess',
                description: message,
                status: 'success',
                duration: 9000,
                isClosable: true,
            })

        }

    }


    const handleUpdate = async () =>{
    
        const res = await updateProduct(product._id,products)
        const {success,message} = res

        
        if(!success){
            toast({
                title: 'Error',
                description: message,
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
    
        }else{            
            toast({
                title: 'Success',
                description: message,
                status: 'success',
                duration: 9000,
                isClosable: true,
            })

        }
    }


    return (
      
        <Card maxW='sm' key={key} transition={"all 0.5s"} _hover={{transform: "translateY(-5px)",shadow: "xl"}}>
            <CardBody>
                <Image
                src={product.image}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{product.name}</Heading>
                    
                    <Text color={color} fontSize='2xl' >
                        R$ {product.price}
                    </Text>
                </Stack>
                </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue' onClick={onOpen}>
                        <FaRegEdit  />
                    </Button>
                    <Button variant='ghost' colorScheme='red' onClick={() => handleDelete(product._id)}>
                        <MdDelete size={30} />    
                    </Button>
                </ButtonGroup>
            </CardFooter>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                key={product._id}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update product - {product._id}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input  placeholder='Name' value={products.name} onChange={(e) => setProducts({...products,name:e.target.value})}/>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Price</FormLabel>
                            <Input placeholder='Price' type='number'value={products.price} onChange={(e) => setProducts({...products,price:e.target.value})}/>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Image</FormLabel>
                            <Input placeholder='Image' value={products.image} onChange={(e) => setProducts({...products,image:e.target.value})}/>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleUpdate}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            
        </Card>
    
    )           
}