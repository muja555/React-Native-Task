import { StyleSheet } from "react-native";
import Colors from "core/style/colors";

const postListContainerStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        paddingHorizontal: 16
    },
    list: {
        paddingVertical: 16,
    },
    separator: {
        height: 15,
    },
    item: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.Gray900,
        shadowColor: Colors.Black,
        backgroundColor: Colors.White,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    itemTitle: {
        fontSize: 15,
        color: Colors.Primary1700
    },
    itemBody: {
        fontSize: 12,
        color: Colors.Primary1200
    }
})
export { postListContainerStyle as postListContainerStyle };

