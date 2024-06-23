import { Icon20GraphOutline } from "@vkontakte/icons";
import { Image } from "@vkontakte/vkui";


const AudioCellImage = ({ notStoped }: { notStoped: boolean }) => {
  const PUBLICURL = process.env.PUBLIC_URL;

  return (
      <>
        <Image className={`cover-overlay ${notStoped ?'cover-overlay_on' : ''}`} size={40} alt='Обложка трека' src={`${PUBLICURL}/audio-cover.jpg`}/>
        <Icon20GraphOutline className={`cover-icon ${notStoped ? 'cover-icon_on' : ''}`} fill='white' style={{ paddingRight: 0 }}/>
      </>
  );
};
export default AudioCellImage;
