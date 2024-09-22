import { Avatar, Button, Card, Icon } from "@rneui/base";
import { StyleSheet, View, Text, FlatList, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Post() {
    const navigation = useNavigation();
    const [issues, setIssues] = useState([]);

    const getIssues = async () => {
        try {
            const response = await axios.get('http://192.168.18.68:5001/issue/getIssues');
            if (response.status === 200) {
                setIssues(response.data.issues);
                Alert.alert(response?.data?.message);
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Failed fetching issues', error.response?.data?.message || 'An error occurred');
        }
    };

    useEffect(() => {
        getIssues();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>All Issues</Text>
            <FlatList
                data={issues}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <Card containerStyle={styles.card}>
                        <View style={styles.header}>
                            <Avatar
                                rounded
                                size="medium"
                                source={{ uri: item.userAvatar }} // Ensure this URL is valid
                            />
                            <Text style={styles.username}>Saima Bibi</Text>
                        </View>
                        <Card.Divider />
                        <Text style={styles.caption}>{item.title}</Text>
                        <Card.Image
                            source={{ uri: item.image }} // Ensure this URL is valid
                            style={styles.image}
                        />
                        <View style={styles.footer}>
                            <Button
                                type="clear"
                                icon={<Icon name="arrow-up" type="feather" size={30} color="grey" />}
                            />
                            <Button
                                type="clear"
                                icon={<Icon name="arrow-down" type="feather" size={30} color="grey" />}
                            />
                            <Button
                                style={styles.contributor}
                                type="solid"
                                title="Contribute Now"
                                onPress={() => navigation.navigate('VolunteerPositions')}
                            />
                        </View>
                    </Card>
                )}
                ListEmptyComponent={<Text style={styles.noIssuesText}>No issues found</Text>}
                contentContainerStyle={{ paddingBottom: 100 }} // Adjust bottom padding for the last item
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingBottom: 200,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    noIssuesText: {
        fontSize: 18,
        color: 'grey',
        textAlign: 'center',
    },
    card: {
        marginBottom: 10,
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    username: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 16,
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    contributor: {
        backgroundColor: '#007bff',
        padding: 10,
    },
});
