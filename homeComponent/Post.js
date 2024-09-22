import { Avatar, Button, Card, Icon } from "@rneui/base";
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Post () {
    const navigation = useNavigation();
    
    return(
        <View>
        <Card containerStyle={styles.card}>
            <View style={styles.header}>
                <Avatar rounded size='medium' 
                source={{uri: 'https://img.freepik.com/free-photo/business-concept-portrait-confident-young-businesswoman-keeping-arms-crossed-looking-camera-w_1258-104422.jpg?t=st=1726547412~exp=1726551012~hmac=3a14448a46f6c25b95b304a30f906b4501d606b246a67d7aad9b5c7a15058074&w=900'}}/>
                <Text style={styles.username}>Amna Ashraf</Text>
            </View>
            <Card.Divider/>
           
            <Text style={styles.caption}>Found a pothole near street#49</Text>
            
            <Card.Image 
            source={{uri: 'https://c02.purpledshub.com/uploads/sites/41/2024/01/Pot-hole-in-middle-of-the-road.jpg?w=1029&webp=1'}}
            style={styles.image}/>
            
            <View style={styles.footer}>
                
                <Button type="clear"
                 icon={<Icon name="arrow-up" type="feather" size={30} color='grey'/>}
                 /> 
                
                
                <Button type="clear"
                 icon={<Icon name="arrow-down" type="feather" size={30} color='grey'/>}
                 /> 

                
                <Button style={styles.contributor}
                type='solid' title='Contribute Now' 
                onPress={() => navigation.navigate('VolunteerPositions')}
                /> 
                
            </View>
        </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    card:{
    borderRadius: 10,
    padding: 15,
    margin: 10,
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 7
    },
    username:{
        marginLeft: 10,
        fontSize: 16,
        fontWeight: "bold"
    },
    caption: {
        fontSize: 20,
        margin: 5,
        marginBottom: 17,
    },
    image: {
        width: '100%',
        height: 200

    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    contributor: {
       justifyContent: 'flex-end',
        color: 'white'
    }

});