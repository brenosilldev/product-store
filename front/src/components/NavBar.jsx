import { Container ,Flex, Text, HStack, Button,useColorMode, useColorModeValue} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDarkMode ,} from "react-icons/md";
import { CiDark } from "react-icons/ci";
export const NavBar = () => {
    const {colorMode,toggleColorMode} = useColorMode();


    return (
        
        <Container maxW='6xl'  color='white' px={4} bg={useColorModeValue('gray.100', 'gray.500')}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'} flexDirection={{base:'column', sm:'row'}}> 
                <Text
                    bgGradient='linear(to-l,rgb(0, 0, 0),rgb(243, 228, 228))'
                        bgClip='text'
                        fontSize='2xl'
                        fontWeight='extrabold'
                        textTransform={'uppercase'}
                    >
                    
                        <Link to={'/'}>Product Store</Link>
                </Text>

                <HStack spacing={2} alignItems={'center'}>
                    <Link to={'/create'}>
                        <Button><IoIosAddCircleOutline size={40}/></Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <MdDarkMode size={30} />: <CiDark size={30}/> }
                    </Button>
                  
                </HStack>
                        

            </Flex>
        </Container>
    )
}
