import React from 'react'
import {Text, View, SafeAreaView, ScrollView } from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
// import Home from './components/Home';

function App(){


  return (
    <SafeAreaView >
      <ScrollView>
        {/* <Home/> */}
        <FlatCards/>
        <ElevatedCard/>
        <FancyCard/>
        <ContactList/>
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  )
}




export default App;