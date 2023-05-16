import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View} from 'react-native';
import {putPerfume, selectActivePerfume} from '../slices/perfume';
import {Perfume} from '../common/types/Perfume.type';
import {Button, TextInput} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import Routes from '../components/routes';
type Props = NativeStackScreenProps<RootStackParamList, Routes.Perfume>;

export function PerfumeScreen({navigation}: Props) {
  const perfume = useSelector(selectActivePerfume);
  const dispatch = useDispatch();
  const [perfumeForm, setPerfumeForm] = useState<Perfume>(
    perfume ?? {
      name: '',
      house: undefined,
      id: undefined,
      notes: [],
      description: undefined,
    },
  );
  return (
    <View>
      <TextInput
        placeholder="Name"
        value={perfumeForm.name}
        onChangeText={(event: string) => {
          setPerfumeForm({
            ...perfumeForm,
            name: event,
          });
        }}
      />
      <Button
        onPress={() => {
          dispatch(putPerfume(perfumeForm));
          navigation.navigate(Routes.AllPerfumes);
        }}>
        Save
      </Button>
    </View>
  );
}
