import { StyleSheet } from "react-native";
import Colors from "core/style/colors";

const postUpdateContainerStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        paddingTop: 24,
        padding: 16,
    },
    header: {
      height: 40
    },
    label: {
        fontSize: 12,
        color: Colors.Gray1500
    },
    saveBtn: {
        width: '100%',
        height: 45,
        borderRadius: 8,
        backgroundColor: Colors.Primary,
        borderColor: Colors.Secondary,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLabel: {
        color: Colors.White,
    },
    btnDisabled: {
        opacity: 0.5
    },
    backBtn: {
        height: 40,
        width: 30
    },
    scrollView: {
        paddingTop: 10,
        flexGrow: 1
    }
});
export { postUpdateContainerStyle as postUpdateContainerStyle };
