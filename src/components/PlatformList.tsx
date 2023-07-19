import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/Bs'
import usePlatform from '../hooks/usePlatform'

const PlatformList = () => {
    const {datas , error} = usePlatform()
    if(error) return null
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>Platform</MenuButton>
        <MenuList>
            {datas.map(data => <MenuItem key={data.id}>{data.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformList