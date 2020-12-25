import React from 'react';
import { Modal } from 'react-native';

const CustomModal = ({showModal = false, children, transparent = false, animationType = "slide"}) => {
    return(
        <Modal
            visible={showModal}
            transparent={transparent}
            animationType={animationType}
        >
            {children}
        </Modal>
    )
}

export default CustomModal;