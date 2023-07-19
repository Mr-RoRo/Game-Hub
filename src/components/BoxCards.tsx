import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const BoxCards = ({children} : Props) => {
  return (
    <Box borderRadius={10} overflow={'hidden'}>
        {children}
    </Box>
  )
}

export default BoxCards