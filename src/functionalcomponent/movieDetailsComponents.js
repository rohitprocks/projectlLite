import React,{useEffect} from 'react'
import {View,StyleSheet,Image, Text, ScrollView} from 'react-native'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fetchMoviesDetailCreatorAction from '../redux/actions/fetchMoviesDetailAction';
import NavigationService from '../navigation/NavigationService';
import { TouchableOpacity } from 'react-native-gesture-handler';



const movieDetailsComponents = props =>{

    useEffect(()=>{
        movieDetailApi();
    },[])


    const movieDetailApi = ()=>{
        console.log("movie id is "+props.navigation.state.params.movieId);
        
        props.fetchMovieDetails.fetchMoviesDetailAction(props.navigation.state.params.movieId);
    }

    return(
        <ScrollView
        keyboardShouldPersistTaps
        contentContainerStyle={{flexGrow: 1}}>
     
        <View style={localstyles.container}>

            
            <Image style={localstyles.movieImagePosterContainer}
            source={{uri:"https://image.tmdb.org/t/p/w500/"+props.movieDetails.poster_path}}
            resizeMode="contain">
            </Image>

            
            <Image 
            style={localstyles.backArrowContainer}
            source={require("../res/images/arrow.png")}
            resizeMode="contain">
            </Image>

           
           

            <Text style={{fontSize:19, fontWeight:"bold", color:'#ffffff', marginStart:10, marginEnd:10,marginTop:10}}>{"Language - "+props.movieDetails.original_language}</Text>

            
    <Text style={{fontSize:19, fontWeight:"bold", color:'#ffffff', marginStart:10, marginEnd:10,marginTop:10}}>{"Released Date - "+props.movieDetails.release_date}</Text>

            <Text style={{fontSize:19, fontWeight:"bold", color:'#ffffff', marginStart:10, marginEnd:10,marginTop:10}}>Overview</Text>

            <Text style={{color:'#ffffff', fontSize:17, marginEnd:10, marginStart:10}}>{props.movieDetails.overview}</Text>

            <Text style={{fontSize:19, fontWeight:"bold",color:'#ffffff', marginEnd:10, marginStart:10, marginTop:10}}>Homepage -</Text>

            <Text style={{color:'#ffffff', fontSize:17, marginEnd:10, marginStart:10, marginBottom:50}}>{props.movieDetails.homepage}</Text>

                </View>
                </ScrollView>
    )
}


const localstyles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#000000',

},
movieImagePosterContainer:{
    width:'100%',
    height:'70%',
},
backArrowContainer:{
    height:25,
    width:25,
    marginTop:40,
    marginLeft:20,
    position:'absolute',

}
});

const mapStateToProps = state => ({
    movieDetails: state.fetchGenreMovieDetailReducer.movieDetails,
  });
  
  const mapDispatchToProps = dispatch => ({
    fetchMovieDetails: bindActionCreators(fetchMoviesDetailCreatorAction, dispatch),  
  
    
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(movieDetailsComponents);


