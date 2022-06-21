import React,{ useState } from 'react';
import { View, Text,Alert , DevSettings, Dimensions, ScrollView, Pressable, Image} from 'react-native'
import { Button, TextInput, Checkbox, ActivityIndicator, MD2Colors} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
//import firestore from '@react-native-firebase/firestore';
import 'react-native-get-random-values'

import storage from '@react-native-firebase/storage';

function addseller ({navigation}) {
  var w_height = Dimensions.get('window').height;
var w_width = Dimensions.get('window').width;
  var size = w_width<w_height? w_width:w_height;
  var b_width = size/2;
  var i_height = b_width-(b_width/5);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [fblink, setFblink] = useState('');
  const [replink, setReplink] = useState('');
  const [comp, setComp] = useState(false);

  const [img, setImg] = useState(null);
  const [path, setPath] = useState("");

  const [uploading, setUploading] = useState(false);

  const clear = ()=>
  {
    setComp(false); setEmail("");setFblink("");setImg(null);setPhone("");setReplink("");setName("");setPath("");
  }

  const check= async()=>{
    if(name==""|| (email==""&&phone==""&&fblink==""))
    {
      Alert.alert("Can not add seller","Name and a form of contact is a must");
    }
    else
    {
      var url = ""
      if(path!=""){
      const uploaduri = path;
      let filename = (uploaduri).substring((uploaduri).lastIndexOf('/')+1);

        const extension = filename.split('.').pop();
        const nname = filename.split('.').slice(0,-1).join('.');

        filename = nname+Date.now() + '.' + extension;

      console.log('images/Sellers/'+filename);
      setUploading(true)

      const storageRef = storage().ref('images/Sellers/'+filename);
      const task = storageRef.putFile(uploaduri);

        task.on('state_changed', taskSnapshot=>{})

      try{
        await task;

        url = await storageRef.getDownloadURL();
        console.log('Image : '+url);
      }
      catch(e){console.log(e)}
      console.log('images/Sellers/'+filename);
      
      

      //uploadBytes(imageRef, uploaduri).then(()=>{
        //Alert.alert("Success","Image uploaded as "+filename+" : "+uploaduri)
        //console.log("Success","Image uploaded as "+filename+" : "+uploaduri)
      //})
      
    }
/*
    firestore()
    .collection('Sellers')
    .add({
      name: name,
      email: email,
      phone: phone,
      fblink: fblink,
      replink: replink,
      company: comp,
      image: url
    })
    .then(() => {
      
      Alert.alert("Success", "Seller added")
      clear()
    }).catch((e)=>{
      console.log(e);
      Alert.alert("Failed", "Failed to add seller")
    }).finally(()=>{setUploading(false)});
  */    
      /*
      setUploading(true);
      try
      {
        storage().ref(filename).putFile(uploaduri);
        Alert.alert("Success","Image uploaded as "+filename+" : "+uploaduri)
        console.log("Success","Image uploaded as "+filename+" : "+uploaduri)
      }catch(err){console.log(err)}
      setUploading(false);

      console.log(img);
*/
      /*addDoc(collection(db, "Sellers"),{
        name: name,
        email: email,
        phone: phone,
        fblink: fblink,
        replink: replink,
        company: comp,
        image: img
      }).then(()=>{
        Alert.alert("Data entered");
      }).catch((err)=>{
        Alert.alert("Error occured")
      });
    */  
      
    }
    
  }
    

  const imgpick=()=>{

      Alert.alert(
        "Choose Method",
        "From where do you want to get image",
        [
          { text: "Cancel",
           onPress: () => {} 
        }
        ,
        {
            text: "Gallery",
            onPress: () => {
              ImagePicker.openPicker({
                cropping: false
              }).then(image => {
                console.log(image);
                setImg({uri: image.path});
                setPath(image.path);
                
              });
            }
        }
          ,
          { text: "Camera",
           onPress: () => {ImagePicker.openCamera({
            cropping: false,
          }).then(image => {
            console.log(image);
            setImg({uri: image.path});
            setPath(image.path);
          });} 
        }
        ]
      );
    
}

function a (){return(<View style={{alignItems:"center", justifyContent:"center" ,borderColor:"white", width:b_width, height:i_height, borderRadius:6, borderWidth:2}}>
<Text style={{color:"#F5F5F5"}}>Press to select</Text>
<Text style={{color:"#F5F5F5"}}>display image </Text></View>);}

function b (){
  return(<View style={{alignItems:"center", justifyContent:"center" ,borderColor:"white", width:b_width, height:i_height, borderRadius:6, borderWidth:2}}>
<Image source={img} style={{width:b_width, height:i_height}}></Image></View>);
  
}
if(uploading)
{
  return(
  <View style={{flex:1, backgroundColor:"#2D2D2D", justifyContent:"center", alignItems:"center"}}>
      <ActivityIndicator animating={true} size="large" style={{alignSelf:"center"}} />
    </View>
  )
}
else{
    return (
        <ScrollView style={{flex:1, backgroundColor:"#2D2D2D"}}>
        <View style={{backgroundColor:"black", alignItems:"center", padding:"2.5%"}}>
        <Text style={{color:"#FDFE02", fontSize:32, fontWeight:"bold"}}>ADD SELLER</Text>
      </View>
      <View style={{alignItems:"center", marginTop:"10%"}}>
        <Pressable onPress={()=>{imgpick()}} style={{marginBottom:"10%"}}>
            {img==null?a():b()}
        </Pressable>
      <TextInput style={{width:"90%", shadowColor:"#2D2D2D", borderColor:"#2D2D2D", marginBottom:"10%"}}
       mode="outlined"
       onChangeText={setName}
       value={name}
       label="Name"
       theme={{ roundness: 200 }}>

      </TextInput>
      <TextInput style={{width:"90%", shadowColor:"#2D2D2D", borderColor:"#2D2D2D", marginBottom:"10%"}}
       mode="outlined"
       onChangeText={setEmail}
       value={email}
       label="Email"
       theme={{ roundness: 200 }}>

      </TextInput>
      <TextInput style={{width:"90%", shadowColor:"#2D2D2D", borderColor:"#2D2D2D", marginBottom:"10%"}}
       mode="outlined"
       onChangeText={setPhone}
       value={phone}
       keyboardType='numeric'
       label="Phone"
       theme={{ roundness: 200 }}>

      </TextInput>
      <TextInput style={{width:"90%", shadowColor:"#2D2D2D", borderColor:"#2D2D2D", marginBottom:"10%"}}
       mode="outlined"
       onChangeText={setFblink}
       value={fblink}
       label="Facebook Link"
       theme={{ roundness: 200 }}>

      </TextInput>

      <TextInput style={{width:"90%", shadowColor:"#2D2D2D", borderColor:"#2D2D2D", marginBottom:"10%"}}
       mode="outlined"
       onChangeText={setReplink}
       value={replink}
       label="Reputation Link"
       theme={{ roundness: 200 }}>

      </TextInput>

      <View style={{flexDirection:"row"}}>
      <Text style={{color:"#F5F5F5", marginTop:"1.5%"}}>Is a company : </Text>
      <Checkbox
          color="#FDFE02"
          status={comp ? 'checked' : 'unchecked'}
            onPress={() => {
            setComp(!comp);
      }}>
      </Checkbox>
      </View>

        <View style={{flexDirection:"row",marginTop:"10%"}}>
        <Button
          mode="contained"
          style={{
            width:b_width,
            padding:"2%",
            backgroundColor: '#FF0000',
            borderRadius: 200,
            marginBottom:"10%"
          }}
          onPress={() => clear()}>
          <Text style={{color:"black", fontWeight:"bold"}}>CLEAR</Text>
        </Button>

      <Button
          mode="contained"
          style={{
            width:b_width,
            padding:"2%",
            backgroundColor: '#FDFE02',
            borderRadius: 200,
            marginBottom:"10%"
          }}
          onPress={() => {
            check()
            }}>
          <Text style={{color:"black", fontWeight:"bold"}}>ADD</Text>
        </Button>
        </View>
      </View>
      </ScrollView>
    )
  }
}

  export default addseller;