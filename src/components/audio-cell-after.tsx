import { useCallback } from 'react';

import { Icon16MoreVertical  } from '@vkontakte/icons';
import { Footnote } from '@vkontakte/vkui';

const AudioCellAfter = ({ timeLeft }: { timeLeft: number }) => {

  const formatTime = useCallback((seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }, []);

  return (
    <div 
      style={{ 
        display: 'flex',
        alignItems: 'center',
        padding: '12px 2px 12px 12px'
       }}>
        <Footnote style={{ color: '#818C99' }}>{formatTime(timeLeft)}</Footnote>
        <Icon16MoreVertical style={{ marginLeft: '14px' }}/>
    </div>
  );
};

export default AudioCellAfter;
