import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RaiseIssue from './RaiseIssue'

export default function RaiseIssueStackScreen() {
    const RaiseIssueStack = createNativeStackNavigator();

    return (
        <>
            <RaiseIssueStack.Navigator >
                <RaiseIssueStack.Screen name='RaiseScreen' component={RaiseIssue}/>
            </RaiseIssueStack.Navigator>
        </>
    );
}