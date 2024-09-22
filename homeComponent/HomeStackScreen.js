import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Home from './Home';
import VolunteerPositions from './VolunteerPositions';

export default function HomeStackScreen(){

    const HomeStack = createNativeStackNavigator();

    return(
        <>
        <HomeStack.Navigator >
            <HomeStack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <HomeStack.Screen name="VolunteerPositions" component={VolunteerPositions}/>
        </HomeStack.Navigator>
        </>
    );
}