import { View, Text, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Animatable from "react-native-animatable";
import { icons } from "@/constants";
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEvent } from 'expo';


const zoomIn = {
  0: { scale: 0.9 },
  1: { scale: 1 }
}

const zoomOut = {
  0: { scale: 1 },
  1: { scale: 0.9 }
}

const TrendingItem = ({ activeItem, item }) => {

  const [play, setPlay] = useState(false);
  const player = useVideoPlayer(item.video, (player) => {
    player.loop = true;
  });
  // const testVideo = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  // const player = useVideoPlayer(testVideo, (player) => {
  //   player.loop = true;
  // });
  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

  useEvent(player, 'ended', () => {
    setPlay(false);
  });

  // Track play state changes
  useEffect(() => {
    const togglePlayback = async () => {
      try {
        if (!player) return; // Ensure player is initialized
  
        if (play) {
          player.play();  // Use await if play() is asynchronous
        } else {
          player.pause();
        }
      } catch (error) {
        console.error("Video playback error:", error);
      }
    };
  
    togglePlayback();
  }, [play, player]);

  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem === item.$id ? zoomIn : zoomOut} duration={500}
    >

      <View style={{ width: 208, height: 288, borderRadius: 35, backgroundColor: 'black', overflow: "hidden" }}>
        {/* Video View (Always Renders) */}
        <VideoView
          player={player}
          allowsFullscreen
          allowsPictureInPicture
          
          style={{
            width: '100%',
            height: '100%',
            opacity: play ? 1 : 0, // Ensure video becomes visible
            borderRadius: 35
          }}
        />

        {/* Background Thumbnail (Covers Video When Not Playing) */}
        {!play && (
          <ImageBackground
            source={{ uri: item.thumbnail }}
            className="rounded-[35px]"
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 35,
            }}
            resizeMode="cover"
          >
            {/* Play Button */}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setPlay(true)}
            >
              <Image source={icons.play} style={{ width: 48, height: 48 }} resizeMode="contain" />
            </TouchableOpacity>
          </ImageBackground>
        )}
      </View>
    </Animatable.View>
  )
}

const Trending = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[0]);

  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key)
    }
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 90
      }}
      contentOffset={{ x: 170 }}
      horizontal
    />
  )
}

export default Trending;