import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TodoStatsProps} from '../types';

const TodoStats: React.FC<TodoStatsProps> = ({pendingCount, completedCount}) => {
  if (pendingCount === 0 && completedCount === 0) {
    return null;
  }

  return (
    <View style={styles.stats}>
      <Text style={styles.statsText}>
        {pendingCount} pending • {completedCount} completed
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  stats: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#2a2a2a',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  statsText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});

export default TodoStats; 