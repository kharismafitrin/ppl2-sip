import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from '@chakra-ui/react'
import React from 'react'

const DeleteModal = ({ title, onSubmit, onOpen, onClose, isOpen, cancelRef }) => {
    return (
        <>
          <Button colorScheme='red' onClick={onOpen}>
              <i className="ph-bold ph-trash"></i>
          </Button>
    
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                  Delete { title }
                </AlertDialogHeader>
    
                <AlertDialogBody>
                  Are you sure? You can't undo this action afterwards.
                </AlertDialogBody>
    
                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme='red' onClick={onSubmit} ml={3}>
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </>
    )
}

export default DeleteModal