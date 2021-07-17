import 'react-native-gesture-handler';
import * as React from "react";
import {FlatList,
        SafeAreaView,
        StatusBar,
        Text,
        TouchableOpacity,
        ScrollView,
        Image,
        View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Talk } from './Talk';
import Audio from './Audio';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='home'
                      component={Home}
                      options={{ title: 'Latvian' }}
        />
        <Stack.Screen name='lessons'
                      component={Lessons}
                      options={{title: 'Topics'}}
        />
        <Stack.Screen name='lesson'
                      component={Lesson}
                      options={({route}) => ({
          title: route.params.lessonId+'. '+route.params.lessonName})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home = ({ navigation }) => {
  return (
    <View style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}>
      <Image  source={{uri: 'http://158.101.161.91/bg14.png'}}
              style={{
                flex: 1,
                width: '100%',
                opacity: 0.5,
              }}
      />
      <View style={{
              position: 'absolute',
              paddingBottom: 70,
              width: 310,
            }}>
        <Text style={{
                textAlign: 'center',
                fontSize: 20,
                color: '#133398',
              }}>
          {'    '}Choose a topic and listen to the dialogues.{'\n'}
                  Repeat phrases in pauses.
        </Text>
        <Text style={{
                textAlign: 'center',
                color: '#133398',
                fontSize: 30,
                fontWeight: 'bold',
              }}
              onPress={() => navigation.navigate('lessons')}>
          Topics
        </Text>
      </View>
    </View>
  );
};

const Lesson = ({route}) => {
  const id = route.params.lessonId;
  return (
    <View style={{flex: 1,
                  marginBottom: 5,}}>
      <View style={{marginTop: 5,
                    marginBottom: 5,}}>
        <Audio id={id} />
      </View>
      <ScrollView>
        <Talk id={id} />
      </ScrollView>
    </View>
  );
};

const DATA = [
  {id: '1', title: 'Hello and Labdien!'},
  {id: '2', title: 'Getting Acquainted'},
  {id: '3', title: 'Where Do You Live?'},
  {id: '4', title: 'Do You Speak Latvian?'},
  {id: '5', title: 'Meals'},
  {id: '6', title: 'At a Party'},
  {id: '7', title: 'What Time and When?'},
  {id: '8', title: 'Weather'},
  {id: '9', title: 'Telephone'},
  {id: '10', title: 'What Shall We Do?'},
  {id: '11', title: 'Hobbies'},
  {id: '12', title: 'About the Family'},
  {id: '13', title: 'On the Way'},
  {id: '14', title: 'To School'},
  {id: '15', title: "I Don't Feel Well"},
  {id: '16', title: 'Excuses'},
  {id: '17', title: 'At a Concert'},
  {id: '18', title: 'During Intermission'},
  {id: '19', title: 'At the Song Festival'},
  {id: '20', title: "Let's Talk About Work"},
  {id: '21', title: 'At Work'},
  {id: '22', title: 'In a Store'},
  {id: '23', title: 'Friendship and Love'},
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress}
                    style={[{ backgroundColor: '#229d8a',
                              padding: 5,
                              marginVertical: 8,
                              marginHorizontal: 16,
                            }, style]}>
    <Text style={{fontSize: 22,}}>
      {item.id +'. '+ item.title}
    </Text>
  </TouchableOpacity>
);

const Lessons = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <Item item={item}
            onPress={() => navigation.navigate('lesson', {lessonId: item.id, lessonName: item.title})}
      />
    );
  };
  return (
    <SafeAreaView style={{flex: 1,
                          marginTop: StatusBar.currentHeight || 0,}}>
      <FlatList data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
