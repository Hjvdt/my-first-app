import { StyleSheet, Text, View } from 'react-native'

const FlatList = ({
    itemListProp,
    renderListItemEvent,

}) => {
    return (
        <View style={styles.itemList}>
            data={itemListProp}
            renderItem={renderListItemEvent}
            keyExtractor={item => item.id}
        </View>
    )
}

export default FlatList

const styles = StyleSheet.create({
    itemList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        backgroundColor: "#D0E7D2",
        borderRadius: 10,
    },
})