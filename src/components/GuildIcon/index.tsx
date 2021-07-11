import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
    const uri = 'https://http2.mlstatic.com/D_NQ_NP_878121-MLB20724612377_052016-O.jpg';
    return(
        <Image 
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
    )
}