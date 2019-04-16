import React,{Component} from 'react';
import {Button,View,TextInput,Text, StyleSheet} from 'react-native';
import { db } from '../config';
let itemsRef=db.ref('items');

let additem= (item) => {
    db.ref('/items').push({
        itemInfo:''
    });
};

export default class Additem extends Component{
          constructor(props){
               super(props);
               this.state={
                   itemInfo:'',
                   items:[]
               }
               this.handleChange=this.handleChange.bind(this);
               this.clickToAdd=this.clickToAdd.bind(this);
          }
          clickToAdd(){
              additem(this.state.itemInfo);
          }
          handleChange(e){
              this.setState({itemInfo:e.nativeEvent.text})
          }
          componentDidMount() 
          {
              itemsRef.on('value',snapshot =>{
                  let data=snapshot.val();
                  let items=Object.values(data);
                  this.setState({items});
              });
          }
    render(){
     return(
            <View>
                <TextInput
                onChange={this.handleChange}
                />
                <Button
                     onPress={this.clickToAdd}
                     title="Submit"
                    color="#841584"
                    />
                    {this.state.items.map(x =>{
                        return <Text>
                        {x.itemInfo}
                        </Text>
                    })}
            </View>    
        )
    }
}