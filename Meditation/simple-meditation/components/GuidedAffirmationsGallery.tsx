import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import React from 'react';
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import { Link } from 'expo-router';
import { Image } from 'react-native';


interface GuidedAffirmationsGalleryProps  {
  title:  string;
  previews: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({
    title,
    previews,
  }: GuidedAffirmationsGalleryProps) => {
  return (
    <View style={styles.view}>
      <View style={styles.views}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.viewThree}>
        <FlatList
          data={previews}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <Pressable>
                <View style={styles.pressableView}>
                  <Image
                    style={styles.image}
                    source={item.image}
                    resizeMode="cover"
                  />
                </View>
              </Pressable>
            </Link>
          )}
          horizontal
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  view: {
    marginVertical: 5,
  },
  views: {
    marginBottom: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 26,
  },
  viewThree: {
    marginVertical: 2,
  },
  pressableView: {
    height: 200,
    width: 180,
    borderRadius: 5,
    overflow: 'hidden',
    marginRight: 15,
    display: "flex",
  },
  image: {
    flex: 1,
    width: "auto",
    //height: "auto"
  }
})


export default GuidedAffirmationsGallery;