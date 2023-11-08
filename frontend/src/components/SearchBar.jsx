import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import { MagnifyingGlass } from "@phosphor-icons/react";

const SearchBar = () => {
  return (
    <InputGroup
      borderColor={'#540302'}
      borderWidth={2}
      rounded={'full'}>
      <InputLeftAddon
      border={'none'}
      bg={'none'}>
        <MagnifyingGlass size={18} />
      </InputLeftAddon>
      <Input 
      type='text' 
      placeholder='Search'
      border={'none'}
      outlineColor={'none'}
      focusBorderColor='transparent' />
    </InputGroup>
  )
}

export default SearchBar