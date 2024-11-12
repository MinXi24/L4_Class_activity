// //============EX 1=====================
// import React from 'react';
// import {View, Text} from 'react-native';
// const Exercise1 = () => {
//   return (
//       <View>
//         <Text style = {{fontSize: 24}}>RP Values</Text>
//         <Text style ={{color: 'green'}}>Excellence</Text>
//         <Text style ={{backgroundColor:'yellow'}}>Customer-Centric</Text>
//         <Text style ={{fontStyle: "italic"}}>Integrity</Text>
//         <Text style = {{alignSelf: "center"}}>Teamwork</Text>
//         <Text style = {{backgroundColor: 'black', color: 'white'}}>Enterprising</Text>
//       </View>
//   );
// };
// export default Exercise1;

// ==============EX 2============
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   greenBox: {
//     width: 100,
//     height: 100,
//     marginTop: 30,
//     backgroundColor: 'green',
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   boxText: {
//     textAlign: 'center',
//     color: 'white'
//   },
//   title: {
//     fontWeight: 'bold',
//   }
// });
//
// const Exercise2 = () => {
//   return (
//       <View style={{marginTop: 30}}>
//         <View style ={styles.greenBox}>
//           <Text style ={[styles.boxText, styles.title]}>Who we are</Text>
//         </View>
//         <View style ={styles.greenBox}>
//           <Text style ={styles.boxText}>Our People</Text>
//         </View>
//         <View style ={styles.greenBox}>
//           <Text style ={styles.boxText}>Our Campus</Text>
//         </View>
//       </View>
//
//   );
// };
// export default Exercise2;

//===========EX 3================
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: "row",
//     backgroundColor: "#F5fcff",
//     borderColor: "#0099AA",
//     borderWidth: 5,
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: "center",
//     fontSize: 24
//   }
// });
//
// const Exercise3A = () => {
//   return (
//       <View style={[styles.Parent,{marginTop:30}]}>
//         <Text style = {[styles.Child,{backgroundColor: 'powderblue'}]}>Child 1</Text>
//         <Text style = {[styles.Child,{backgroundColor: 'skyblue'}]}>Child 2</Text>
//         <Text style = {[styles.Child,{backgroundColor: 'steelblue'}]}>Child 3</Text>
//       </View>
//   );
// };
// export default Exercise3A;

//=====================EX 4=========================
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex: 1,
//     flexDirection: "column",
//     backgroundColor: "#F5fcff",
//     borderColor: "#0099AA",
//     borderWidth: 5,
//   },
//   Child: {
//     flex: 1,
//     borderWidth: 2,
//     textAlign: "center",
//     fontSize: 24
//   }
// });
//
// const Exercise3B = () => {
//   return (
//       <View style={[styles.Parent,{marginTop:30}]}>
//         <Text style = {[styles.Child,{backgroundColor: 'powderblue'}]}>Child 1</Text>
//         <Text style = {[styles.Child,{backgroundColor: 'skyblue'}]}>Child 2</Text>
//         <Text style = {[styles.Child,{backgroundColor: 'steelblue'}]}>Child 3</Text>
//       </View>
//   );
// };
// export default Exercise3B;

//===============EX 5=================
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex: 1,
//     flexDirection: "column",
//     backgroundColor: "#F5fcff",
//     borderColor: "#0099AA",
//     borderWidth: 5,
//   },
//   Child: {
//     flex: 1,
//     borderWidth: 2,
//     textAlign: "center",
//     fontSize: 24
//   }
// });
//
// const Exercise3C = () => {
//   return (
//       <View style={[styles.Parent,{marginTop:30}]}>
//         <Text style = {[styles.Child,{backgroundColor: 'powderblue', maxWidth: 90}]}>Child 1</Text>
//         <Text style = {[styles.Child,{backgroundColor: 'skyblue'}]}>Child 2</Text>
//         <Text style = {[styles.Child,{backgroundColor: 'steelblue',maxHeight: 120}]}>Child 3</Text>
//       </View>
//   );
// };
// export default Exercise3C;

//======================EX 6==================
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: "row",
//     backgroundColor: "#F5fcff",
//     borderColor: "#0099AA",
//     borderWidth: 5,
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: "center",
//     fontSize: 24
//   }
// });
//
// const Exercise3D = () => {
//   return (
//       <View style={[styles.Parent,{marginTop:30}]}>
//         <Text style = {[styles.Child,{backgroundColor: 'powderblue', flex:1 }]}>Child 1</Text>
//         <Text style = {[styles.Child,{backgroundColor: 'skyblue',flex: 2}]}>Child 2</Text>
//         <Text style = {[styles.Child,{backgroundColor: 'steelblue',flex: 3}]}>Child 3</Text>
//       </View>
//   );
// };
// export default Exercise3D;

//========================EX 7======================
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex: 1,
//     //justifyContent: 'flex-end',
//     // justifyContent: 'space-between',
//     justifyContent: 'space-around',
//     flexDirection: "column",
//     backgroundColor: "#F5fcff",
//     borderColor: "#0099AA",
//     borderWidth: 5,
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: "center",
//     fontSize: 24
//   }
// });
//
// const Exercise3E = () => {
//   return (
//       <View style={[styles.Parent,{marginTop:30}]}>
//         <Text style = {[styles.Child,{backgroundColor: 'powderblue'}]}>Child 1</Text>
//         <Text style = {[styles.Child,{backgroundColor: 'skyblue'}]}>Child 2</Text>
//         <Text style = {[styles.Child,{backgroundColor: 'steelblue'}]}>Child 3</Text>
//       </View>
//   );
// };
// export default Exercise3E;

//====================EX 4=====================
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Parent: {
    flex:1,
    justifyContent:'space-around',
    flexDirection: "row",
    backgroundColor: 'whitesmoke',
    marginTop: 30,
    alignItems: 'center'
  },
  Child: {
    width: 80,
    height: 80,
  },
  Box: {
    width: 100,
    height: 100,
    marginTop: 30,
  },
  boxText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black'
  }
});

const Exercise4 = () => {
  return (
      <View style={[styles.Parent]}>
        <Text style = {[styles.Child,styles.boxText,styles.Box,{backgroundColor: 'powderblue'}]}>Square 1</Text>
        <Text style = {[styles.Child,styles.boxText,styles.Box,{backgroundColor: 'green'}]}>Square 2</Text>
        <Text style = {[styles.Child,styles.boxText,styles.Box,{backgroundColor: 'red'}]}>Square 3</Text>
      </View>
  );
};
export default Exercise4;
