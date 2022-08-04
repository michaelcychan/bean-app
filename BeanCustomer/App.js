import * as React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, StyleSheet, TextInput, Switch, TouchableOpacity } from 'react-native';
import { Home, SignUp, SignIn, Id, Beans, Settings } from './components/Screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Realm from 'realm';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Schema
const TaskSchema = {
  name: "Task",
  properties: {
    _id: "int",
    name: "string",
    status: "string?",
  },
  primaryKey: "_id",
};


const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Id' component={Id} />
      <Tab.Screen name='Beans' component={Beans} />
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
  )
} 

const App = () => {

  // input feilds data
  const [text, setText] = React.useState('');
  const [status, setStatus] = React.useState('checked');

  // realm related variables
   const [realm, setRealm] = React.useState(null);
   const [tasks, setTasks] = React.useState([]);

   React.useEffect(() => {
    (async () => {
      // use realm to interact with database
      const realm = await Realm.open({
        path: "myrealm",
        schema: [TaskSchema],
      }).then(realm => {
        //load data in the database...
        const tasks = realm.objects('Task');
  
        // set variable for tasks read from database
        setTasks([...tasks]);
  
        // get realm instance to use later in app
        setRealm(realm);
  
        // set up listener to update task lsit when
        // data is updated
        try {
          tasks.addListener(() => {
            setTasks([...tasks]);
          });
        } catch (error) {
          console.error(`Error updating tasks: ${error}`);
        }
      });
   })();

    // write to database:
    // realm.write(() => {
    //   task1 = realm.create("Task", {
    //     _id: 100,
    //     name: "go grocery shopping",
    //     status: "Open",
    //   });
    //   task2 = realm.create("Task", {
    //     _id: 101,
    //     name: "go exercise",
    //     status: "Open",
    //   });
    //   console.log(`created two tasks: ${task1.name} & ${task2.name}`);
    // });
  
    // read from database:
    // const tasks = realm.objects("Task");
    // console.log(`The list of tasks are: ${tasks.map((task) => task.name)}`);
    // const taskNo101 = realm.objectForPrimaryKey("Task", 101);
    // console.log(`One task with id 101: ${taskNo101.name} & ${taskNo101._id}`)
  
  }, []);

  const addTask = () => {
    realm.write(() => {
      task1 = realm.create('Task', {
        name: text,
        status: status == 'checked' ? 'Closed' : 'Open',
      });
    });

    // clear the fields after writing
    setText('');
    setStatus('');
  };

  return (
    <NavigationContainer>
      <View><Text style={{alignSelf: 'center', marginTop: 400}}>Task:</Text>
      <TextInput
        style={{alignSelf: 'center'}}
        placeholder='enter your task'
        value={text}
        onChangeText={text => setText(text)}
      />
      <Switch></Switch>
      <TouchableOpacity />
      </View>
      
      
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'The Bean App' }}
        />
        <Stack.Screen 
          name="Sign Up" 
          component={SignUp} 
          options={{ title: 'The Bean App'}}
        />
        <Stack.Screen
          name="Sign In"
          component={SignIn}
          options={{ title: 'The Bean App' }}
        />
        <Stack.Screen 
          name="BeanApp" 
          component={HomeTabs} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
