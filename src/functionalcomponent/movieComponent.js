import React,{useEffect,useState} from 'react'
import {View, FlatList,Text, StyleSheet,TouchableOpacity,Image} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fetchMoviesGenreListCreatorAction from '../redux/actions/fetchMoviesGenreListAction';
import * as fetchMoviesByGenresIdCreatorAction from '../redux/actions/fetchMoviesByGenresIdAction';
import NavigationService from '../navigation/NavigationService';
import { SimpleToolbar } from '../components/SimpleToolbar';




const movieComponent = props=>{

    const[movieGenre, setMovieGenre] = useState();
    
    useEffect(()=>{
        fetchMovieData();
        fetchInitialMovieDataList();

    },[])

 const fetchInitialMovieDataList = ()=>{
    props.fetchMoviesDataAction.fetchMoviesByGenresIdAction("12"); 
 }
    const fetchMovieData =()=>{
        props.moviesGenreAction.fetchMoviesGenreListAction(); 
    }

    const onSelectedItemClicked = (genresId) =>{
        props.fetchMoviesDataAction.fetchMoviesByGenresIdAction(genresId); 

    }

    const renderMovieSelectedItem = (item)=>{
        console.log("movieDataList for image  Data is"+JSON.stringify("https://image.tmdb.org/t/p/w500"+item.poster_path));
        return(
            <TouchableOpacity style={localStyles.movieDetailsContainer}
            onPress={()=> NavigationService.navigate('movieDetail',{movieId:item.id})}>    
            <View style={{flexDirection:"row",flex:1}}> 
            <View style={{flex:0.35}}>
                <Image style={localStyles.imageViewContainer}
                source={{uri:"https://image.tmdb.org/t/p/w500"+item.poster_path}}
                resizeMode="center"></Image>
                
            </View>
            <View style={{flex:0.65,justifyContent:'center',alignContent:'center'}}>
                <View style={{flexDirection:"row", width:100, height:30}}>
                    <View style={{flex:0.5}}>
                    <Image style={{height:25,width:25}}
                        source={require("../res/images/star.png")}>
                        </Image>
                        
                    </View>
                    <View style={{flex:0.5, height:30, marginLeft:-30}}>
                    <Text style={{fontSize:18, color:'#ffffff'}}>
                    {item.vote_average}
                    </Text>
                    </View>
        
                    
                </View>
                <Text style={localStyles.textContainerView}>
                    {item.title}
                </Text>
        
            </View>
            
                </View>            
           
            </TouchableOpacity>
        )
    }

    const renderMovieItem = (item)=>{
        console.log("rendered Data is"+JSON.stringify(item.name));
        return(
            <TouchableOpacity style={localStyles.movieItemContainer}
            onPress={()=>{ onSelectedItemClicked(item.id)}}>
                
                <Text style={{textAlign:'center'}}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        )
    }

    return(
        <View style={localStyles.container}>

        <SimpleToolbar
        title="Demo"></SimpleToolbar>


            <FlatList
            style={localStyles.flatlistContainerView}
            horizontal={true}
            data={props.movieGenreList}
            renderItem={({item})=>(
                renderMovieItem(item)
            )}
            keyExtractor={(item, index) => index}
            > 
            </FlatList>

            <FlatList
            data={props.movieDataList}
            renderItem={({item})=>(
                renderMovieSelectedItem(item)
            )}
            keyExtractor={(item, index) => index}
            > 
            </FlatList>



        </View>
    )
}

const localStyles = StyleSheet.create({
    movieContainer:{
        margin:10,
        backgroundColor:'#FFF000'
    },

    container:{
        backgroundColor:'#000000',
    },
    itemRenderedContainer:{
        flex:1,
    },
    flatlistContainerView:{
        width:'100%',
        height:55,

    },

    textContainerView:{
        color:'#ffffff',
        fontSize:18,
    },

    movieItemContainer:{
        width: 110,
        height: 50,
        backgroundColor: "#61dafb", 
        justifyContent:'center'
       
    },
    movieDetailsContainer:{
        width:'100%',
        height:150,
        backgroundColor:'#1A1A1A',
        
        marginTop:5,
    },

    flatMoviePosterView:{
        height:"90%",
        marginTop:50,

    },
    textContainerView:{
        fontSize:18,
        marginTop:5,
        color:'#ffffff'
    },

    imageViewContainer:{
        width:125,
        height:150,
    }
})

const mapStateToProps = state => ({
    movieDataList: state.fetchMoviesDtatReducer.movieDataList,
    movieGenreList: state.fetchMoviesGenreListActionReducer.movieGenreList,
  });
  
  const mapDispatchToProps = dispatch => ({
    moviesGenreAction: bindActionCreators(fetchMoviesGenreListCreatorAction, dispatch),
    fetchMoviesDataAction: bindActionCreators(fetchMoviesByGenresIdCreatorAction, dispatch),  
  
    
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(movieComponent);
