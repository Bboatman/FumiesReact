import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Routes from '../components/routes';
import {RootStackParamList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {selectPerfume, selectPerfumes} from '../slices/perfume';
import {Perfume} from '../common/types/Perfume.type';
import {Button} from 'react-native-paper';
type Props = NativeStackScreenProps<RootStackParamList, Routes.AllPerfumes>;

export function AllPerfumes({navigation}: Props) {
  const perfumes = useSelector(selectPerfumes);
  const dispatch = useDispatch();

  const createOrEditPerfume = (perfume: Perfume | undefined) => {
    dispatch(selectPerfume(perfume));
    navigation.navigate(Routes.Perfume);
  };

  return (
    <View>
      <Text>All Perfumes</Text>
      {perfumes.map(perfume => {
        return (
          <Pressable
            key={`perfume-${perfume.id}`}
            onPress={() => {
              createOrEditPerfume(perfume);
            }}>
            <Text>{perfume.name}</Text>
          </Pressable>
        );
      })}

      <Button
        onPress={() => {
          createOrEditPerfume(undefined);
        }}>
        Create Perfume
      </Button>
    </View>
  );
}
