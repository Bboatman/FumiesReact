import React from 'react';
import type {RootState} from '../app/store';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../app/slices/perfume';
import {StyleSheet, View, Text, Button} from 'react-native';

export function Perfume() {
  const count = useSelector((state: RootState) => state.perfume.value);
  const dispatch = useDispatch();

  return (
    <View>
      <Button
        title="Increment value"
        onPress={() => dispatch(increment())}
        color="green"
      />
      <Text>{count}</Text>
      <Button
        title="Decrement value"
        onPress={() => dispatch(decrement())}
        color="red"
      />
    </View>
  );
}