import React, { memo, useCallback } from "react";
import {
  FlatList,
  FlatListProps,
  ListRenderItem,
  StyleProp,
  ViewStyle,
} from "react-native";

interface ReusableFlatListProps<T> extends FlatListProps<T> {
  contentContainerStyle?: StyleProp<ViewStyle>;
}

const MemoizedFlatlist = <T,>({
  data,
  renderItem,
  keyExtractor,
  ...rest
}: ReusableFlatListProps<T>) => {
  const memoizedRenderItem = useCallback<ListRenderItem<T>>(
    renderItem as ListRenderItem<T>,
    [renderItem]
  );

  return (
    <FlatList
      data={data}
      renderItem={memoizedRenderItem}
      keyExtractor={keyExtractor}
      removeClippedSubviews
      windowSize={5}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      updateCellsBatchingPeriod={50}
      {...rest}
    />
  );
};

export const MemoizedList = memo(
  MemoizedFlatlist
) as <T>(props: ReusableFlatListProps<T>) => React.ReactElement;