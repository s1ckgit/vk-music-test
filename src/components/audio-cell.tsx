import { SimpleCell } from '@vkontakte/vkui';

import AudioCellAfter from './audio-cell-after';

import { observer } from 'mobx-react-lite';
import audioStore from '../store/audio-store';
import AudioCellImage from './audio-cell-image';

const AudioCell = observer(() => {
  const PUBLICURL = process.env.PUBLIC_URL;
  const notStoped = audioStore.status !== 'stopped';

  const onAudioClick = () => {
    audioStore.togglePlayPause(`${PUBLICURL}/audio.mp3`);
  };
  
  return (
    <SimpleCell
      before={<AudioCellImage notStoped={notStoped} />}
      after={<AudioCellAfter timeLeft={audioStore.timeLeft} />}
      subtitle="ARUSTAMOV"
      onClick={onAudioClick}
    >
      <span style={{ fontSize: 16 }}>ВИШЛИСТ!</span>
    </SimpleCell>
  );
});
export default AudioCell;
