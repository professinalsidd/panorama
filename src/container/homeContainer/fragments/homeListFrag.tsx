import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '@/themes/Colors';
import {useNavigation} from '@react-navigation/native';
import {FontSize, Layout, MetricsSizes, fontFamily} from '@/themes/style';

type HomeListFragProps = {
  data?: any;
};

const HomeListFrag = ({data}: HomeListFragProps) => {
  const navigation = useNavigation();
  return (
    <View>
      {data.map((d: any) => (
        <Pressable
          onPress={() => navigation.navigate(d.link as never)}
          key={d.id}
          style={[Layout.justifyCContent, styles.list]}>
          <Text style={styles.test}>{d.name}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default HomeListFrag;

const styles = StyleSheet.create({
  list: {
    height: 50,
    backgroundColor: COLORS.LIGHT_BROWN,
    borderRadius: 8,
    marginVertical: MetricsSizes.SMALL,
    paddingHorizontal: MetricsSizes.SMALL,
  },
  test: {
    color: COLORS.WHITE,
    fontSize: FontSize.md,
    fontWeight: '400',
    fontFamily: fontFamily.FRegular,
  },
});
