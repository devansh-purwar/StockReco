import React from 'react'
import { useDisclosure, Button } from '@chakra-ui/react'
import { ArrowForwardIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'

import {Link as ChakraLink} from '@chakra-ui/react'
export default function DrawerNews({text,link,title}) {
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
        <Button size={"sm"} style={{ background: "#FFF9DE", border: "1px solid #FF6969" }} onClick={onOpen}>
          Brief
        </Button>
        <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>{title} <Button bg={"#E8F9FD"} variant='outline'>
                            <ChakraLink href={link} isExternal>
                                Info <ExternalLinkIcon />
                            </ChakraLink>
                        </Button></DrawerHeader>
            <DrawerBody>
              <p style={{paddingBottom:"70px",paddingLeft:"20px",paddingRight:"20px",paddingTop:"20px"}} >{text}</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
  )
}