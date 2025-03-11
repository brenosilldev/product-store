import { Container ,VStack,Heading,Box, useColorModeValue,Button, Input,useToast } from "@chakra-ui/react"
import { useState } from "react"
import { useProductStore } from "../store/product.js"


export const Create = () => {
    const toast = useToast()
    const {createProduct} = useProductStore()

    const [newProduct,setNewProduct] = useState({
        name: '',
        price: '',
        image : ''
    })

    const HandleAddProduct = async () =>{
        const {success,message} = await createProduct(newProduct)


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


        setNewProduct({name: '',price: '',image : ''})
        
        
    }

    return (
        <div>
            <Container maxW={"container.sm"}>
                <VStack spacing={8}>
                    <Heading as={"h1"} bgSize={"2xl"} textAlign={'center'} mt={8}>
                        Create New Product
                    </Heading>
                    <Box w={'full'} bg={useColorModeValue('white','gray.700')} p={6} rounded={"lg"} shadow={"md"}>
                        
                        <VStack spacing={4}>
                            <Input placeholder="Product Name" name="name" value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}/>
                            <Input placeholder="Price" type="number" name="number" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}/>
                            <Input placeholder="Image" name="image"  value={newProduct.image} onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}/>

                            <Button colorScheme="blue"  onClick={HandleAddProduct}>Add Product</Button>
                        </VStack>

                    </Box>
                    

                </VStack>
                
            </Container>
        </div>
    )
}   