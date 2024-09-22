import {Header, Icon} from '@rneui/themed'
import Post from './Post';
import { StyleSheet, View } from 'react-native';

export default function HomeFunction(){

    return(
        <View>
        <Header
        containerStyle={{width: "100%"  }}
        leftComponent={<Icon name='menu' color='#fff'/>}
        centerComponent={{text: "KhudKadam", style: { color: '#fff' }}}
        rightComponent={<Icon name='search' color='#fff'/>}
        />
        
        <Post/>
        
        </View>
    );
}

const styles = StyleSheet.create({
    tab: {
        alignItems: 'flex-end',

    }
})