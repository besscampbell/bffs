// import React from 'react';
// import {View, Text} from 'react-native';
// import Response from './Response'
// import {useSelector} from 'react-redux';
// import {useFirestoreConnect, isLoaded} from 'react-redux-firebase';

// const ResponseList = () => {
//   useFirestoreConnect([
//     {collection: 'responses'}
//   ]);
//   const responses = useSelector(state => state.firestore.ordered.responses);
//   console.log(responses);

//   if(isLoaded(responses)){
//     return (
//       <View>
//         <Text>
//           {responses.map((element) => {
//             <Response
//               response={element.response}
//               question={element.question}
//               id={element.id}
//             />
//           })}
//         </Text>
//       </View>
//     );
//   } else {
//     return (
//       <View>
//         <Text>Loading...</Text>
//       </View>
//     )
//   }
// }

// export default ResponseList;