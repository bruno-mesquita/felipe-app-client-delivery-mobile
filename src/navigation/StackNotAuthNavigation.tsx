import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Login,
  Register,
  CodeToPassword,
  ForgotPassword,
  ActiveClient,
} from '@screens/NotAuth';
import { TermsUse } from '@screens/TermsUse';
import { ScreenNotAuthList } from '@utils/ScreenProps';

const { Navigator, Screen } = createNativeStackNavigator<ScreenNotAuthList>();

export const StackNotAuthNavigation = () => (
  <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
    <Screen name="Login" component={Login} />
    <Screen name="Register" component={Register} />
    <Screen name="ForgotPassword" component={ForgotPassword} />
    <Screen name="CodeToPassword" component={CodeToPassword} />
    <Screen name="TermsUse" component={TermsUse} />
    <Screen
      name="ActiveClient"
      initialParams={{ userId: 0 }}
      component={ActiveClient}
    />
  </Navigator>
);
