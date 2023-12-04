import { View, Text, Modal, StyleSheet, Button } from 'react-native'

const CustomModal = (
    {
        animationTypeProp,
        isVisibleProp,
        itemSelectedProp,
        onDeleteItemHandlerEvent,
        setModalVisibleEvent
    }
) => {
    return (
        <Modal animationType={animationTypeProp} visible={isVisibleProp}>
            <View style={styles.modalMessageContainer}>
                <Text>Se eliminará: </Text>
                <Text>{itemSelectedProp.value}</Text>
            </View>
            <View style={styles.modalButtonContainer}>
                <Button title="Cancelar" color="#2D9596" onPress={() => setModalVisibleEvent(!isVisibleProp)} />
                <Button title="Si, eliminar" color="#ef233c" onPress={onDeleteItemHandlerEvent} />
            </View>
        </Modal>
    )
}

export default CustomModal

const styles = StyleSheet.create({   
    modalMessageContainer: {
        marginTop: 50,
        alignItems: "center",
        backgroundColor: '#D0A2F7',
    },
    modalButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingTop: 20
    }
})