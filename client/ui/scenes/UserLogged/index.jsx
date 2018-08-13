import React,{Component} from 'react'
import Sidebar from './components/Sidebar/index'
import {Mongo} from 'meteor/mongo'
import './style.css'

    // new Mongo.Collection(user ,[connection])
    // const User= new Mongo.Collection('user');

export default class Home extends Component{
    render(){
        return(
            <Sidebar/>

        );
    }
}