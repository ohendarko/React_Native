import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { icons } from "@/constants";
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEvent } from 'expo';

const VideoCard = ({ video: { title, thumbnail, video, creator: { username, avatar } } }) => {

  const [play, setPlay] = useState(false);
  const player = useVideoPlayer(video, (player) => {
    player.loop = false;
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
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5">
            <Image source={{ uri: avatar}} className="w-full h-full rounded-lg" resizeMode='cover' />

          </View>
          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text className="text-white font-psemibold text-sm" numberOfLines={1}>
              {title}
            </Text>
            <Text className="text-xs text-gray-100 font-pregular" numberOfLines={1}>
              {username}
            </Text>
          </View>
        </View>
        <View className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode='contain' />
        </View>
      </View>
      {play ? (
        <VideoView
          player={player}
          allowsFullscreen
          allowsPictureInPicture
          
          style={{
            width: '100%',
            height: 250,
            opacity: play ? 1 : 0, // Ensure video becomes visible
            borderRadius: 10,
            marginTop: 10
          }}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode='cover'
          />
          <Image
            source={icons.play}
            className="w-12 h12 absolute"
            resizeMode='contain'
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default VideoCard;