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
                      options={{title: 'Список уроков'}}
        />
        <Stack.Screen name='lesson'
                      component={Lesson}
                      options={({route}) => ({
          title: route.params.lessonId+'-й урок. '+route.params.lessonName})}
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
                fontSize: 20,
                color: '#133398',
              }}>
          {'    '}Это приложение развивает навыки слушания и
          говорения. Выбери из списка урок и слушай диалоги.
          В тексте фразы ограничены скобками. Повторяй фразы
          в паузах длительностью, равной самой фразе.
        </Text>
        <Text style={{
                textAlign: 'center',
                color: '#133398',
                fontSize: 30,
                fontWeight: 'bold',
              }}
              onPress={() => navigation.navigate('lessons')}>
          Список уроков
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
  {id: '1', title: 'Здравствуйте! и Labdien!'},
  {id: '2', title: 'Давайте познакомимся!'},
  {id: '3', title: 'Где вы живёте?'},
  {id: '4', title: 'Говорите ли вы по-латышски?'},
  {id: '5', title: 'Приятного аппетита!'},
  {id: '6', title: 'В гостях'},
  {id: '7', title: 'Сколько сейчас времени?'},
  {id: '8', title: 'Погода'},
  {id: '9', title: 'Телефон'},
  {id: '10', title: 'Чем заняться?'},
  {id: '11', title: 'Увлечения'},
  {id: '12', title: 'Немного о семье'},
  {id: '13', title: 'В пути'},
  {id: '14', title: 'В школу'},
  {id: '15', title: 'Я плохо себя чувствую'},
  {id: '16', title: 'Извинения'},
  {id: '17', title: 'На концерте'},
  {id: '18', title: 'Во время антракта'},
  {id: '19', title: 'На Празднике песни'},
  {id: '20', title: 'Поговорим о работе'},
  {id: '21', title: 'На работе'},
  {id: '22', title: 'В магазине'},
  {id: '23', title: 'Дружба и любовь'},
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
