import { action, computed, makeAutoObservable } from "mobx";

const PUBLICURL = process.env.PUBLIC_URL;

type AudioStatus = 'playing' | 'paused' | 'stopped';

class AudioPlayerStore {
  private _audio: HTMLAudioElement;
  private _status: AudioStatus;
  private _duration: number;
  private _timeLeft: number;

  constructor(url: string) {
    makeAutoObservable(this, {
      play: action,
      pause: action,
      togglePlayPause: action,
      timeLeft: computed,
      status: computed
    });

    this._audio = new Audio(url);
    this._status = 'stopped';
    this._duration = 0;
    this._timeLeft = 0;
    this._audio.addEventListener('loadedmetadata', this.onLoadedMetadata);
    this._audio.addEventListener('timeupdate', this.onTimeUpdate);
    this._audio.addEventListener('ended', this.onEnd);
  }

  onEnd = (): void => {
    this._status = 'stopped';
    this._timeLeft = this._duration;
  };

  onTimeUpdate = (): void => {
    this._timeLeft = Math.round(this._duration - this._audio.currentTime);
  };

  onLoadedMetadata = (): void => {
    const duration = this._audio.duration;
    this._duration = duration;
    this._timeLeft = duration;
    console.log(this._audio);
  };

  play(url: string): void {
    if (!this._audio.src.endsWith(url)) {
      this._audio.src = url;
    }
    this._audio.play();
    this._status = 'playing';
  }

  pause(): void {
    this._audio.pause();
    this._status = 'paused';
  }

  togglePlayPause(url: string): void {
    if (this._status === 'playing') {
      this.pause();
    } else {
      this.play(url);
    }
  }

  get timeLeft(): number {
    return this._timeLeft;
  }

  get status(): AudioStatus {
    return this._status;
  }
}

const audioStore = new AudioPlayerStore(`${PUBLICURL}/audio.mp3`);
export default audioStore;
