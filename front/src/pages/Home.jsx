import { Box, Container,VStack ,Text,SimpleGrid } from "@chakra-ui/react"
import { useProductStore } from "../store/product"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { ProductCard } from "../components/ProductCard"


export const Home = () => {

    const {products,fetchProducts} = useProductStore()

    useEffect(() => {
        fetchProducts()        
    },[fetchProducts])

 
    return (
        <Container maxW={'container.xl'} py={12} px={12}>
            <VStack spacing={8}>
                <Text
                    fontSize={"30"}
                    fontWeight={"bold"}
                    bgGradient={"linear(to-r,cyan.400,blue.500)"}
                    bgClip={"text"}
                    textAlign={"center"}
                >
                    Current Products
                </Text>

                {products.length > 0 ? (
                    <SimpleGrid columns={[1, 2, 3]} spacing={10}>
                        {products.map((product) => (
                            <ProductCard product={product} key={product._id} />
                        ))}
                    </SimpleGrid>
                ) : (

                <Text fontSize="xl" textAlign={"center"} fontWeight={"bold"} color={"gray.500"}>
                    No products found{","}
                    <Link to={'/create'}>

                    <Text  color={"blue.500"} _hover={{textDecoration:"underline"}}>
                        Create a Product
                        </Text>
                    </Link>
                    
                </Text>

                )}

            </VStack>
            

        </Container>
    )
}   