import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/Bs'
import usePlatform from '../hooks/usePlatform'
import { Platform } from '../hooks/useGames'

interface Props{
    onSelectPlatform: (data : Platform | null) => void
    selcetedPlatforms: Platform | null
}

const PlatformList = ({onSelectPlatform , selcetedPlatforms} : Props) => {
    const {datas , error} = usePlatform()
    if(error) return null
  return (
    <Menu>
        <MenuButton marginY={5} as={Button} rightIcon={<BsChevronDown />}>{selcetedPlatforms? selcetedPlatforms.name : "Platforms"}</MenuButton>
        <MenuList>
            {datas.map(data => <MenuItem onClick={() => onSelectPlatform(data)} key={data.id}>{data.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformList