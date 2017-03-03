import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { headerContentStyle, thumnbailStyle, thumnailContainerStyle,
    headerTextStyle, imageStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumnailContainerStyle}>
          <Image
            style={thumnbailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url) } >
          Buy now!!!
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumnbailStyle: {
    width: 50,
    height: 50
  },
  imageStyle: {
    width: null,
    flex: 1,
    height: 300
  },
  thumnailContainerStyle: {
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5
  }
};
export default AlbumDetail;
