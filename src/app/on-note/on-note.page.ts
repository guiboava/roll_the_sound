import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-note',
  templateUrl: './on-note.page.html',
  styleUrls: ['./on-note.page.scss'],
  standalone:false,
})
export class OnNotePage implements OnInit {

  audioContext!: AudioContext;
  analyser!: AnalyserNode;
  source!: MediaStreamAudioSourceNode;
  isTuning: boolean = false;

  note: string = '---';
  frequency: string = '0.0';
  meterPosition: number = 0.5;


  guitarTuning = [
    { note: 'E2', frequency: 82.41 },
    { note: 'A2', frequency: 110.00 },
    { note: 'D3', frequency: 146.83 },
    { note: 'G3', frequency: 196.00 },
    { note: 'B3', frequency: 246.94 },
    { note: 'E4', frequency: 329.63 }
  ];

  constructor() {}

  ngOnInit() {
  }

  async startTuning() {
    if (this.isTuning) return;
    this.isTuning = true;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.audioContext = new AudioContext();
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 2048;

      this.source = this.audioContext.createMediaStreamSource(stream);
      this.source.connect(this.analyser);

      this.updatePitch();
    } catch (err) {
      console.error('Erro ao acessar o microfone:', err);
      this.isTuning = false;
    }
  }

  stopTuning() {
    if (!this.isTuning) return;
    this.isTuning = false;

    if (this.source) this.source.disconnect();
    if (this.audioContext) this.audioContext.close();
    this.updateUI('E', '440', 0.5);
  }

  updatePitch() {
    if (!this.isTuning) return;

    const buffer = new Float32Array(this.analyser.fftSize);
    this.analyser.getFloatTimeDomainData(buffer);

    const frequency = this.detectPitch(buffer, this.audioContext.sampleRate);

    if (frequency) {
      const { note, targetFreq, deviation } = this.findClosestNote(frequency);
      this.updateUI(note, frequency.toFixed(1), this.calculateMeterPosition(deviation));
    }

    requestAnimationFrame(() => this.updatePitch());
  }

  detectPitch(buffer: Float32Array, sampleRate: number): number | null {
    let bestOffset = -1;
    let bestCorrelation = 0;
    let rms = 0;

    for (let i = 0; i < buffer.length; i++) {
      rms += buffer[i] * buffer[i];
    }
    rms = Math.sqrt(rms / buffer.length);
    if (rms < 0.01) return null;

    for (let offset = 20; offset < buffer.length / 2; offset++) {
      let correlation = 0;
      for (let i = 0; i < buffer.length - offset; i++) {
        correlation += Math.abs(buffer[i] - buffer[i + offset]);
      }
      correlation = 1 - correlation / (buffer.length - offset);
      if (correlation > bestCorrelation) {
        bestCorrelation = correlation;
        bestOffset = offset;
      }
    }

    if (bestCorrelation < 0.9) return null;
    return sampleRate / bestOffset;
  }

  findClosestNote(frequency: number) {
    let closest = this.guitarTuning[0];
    let minDiff = Math.abs(frequency - closest.frequency);

    for (const note of this.guitarTuning) {
      const diff = Math.abs(frequency - note.frequency);
      if (diff < minDiff) {
        minDiff = diff;
        closest = note;
      }
    }

    const deviation = (frequency - closest.frequency) / closest.frequency;
    return { note: closest.note, targetFreq: closest.frequency, deviation };
  }

  calculateMeterPosition(deviation: number) {
    const maxDeviation = 0.05;
    let position = 0.5 + deviation * 10;
    return Math.max(0, Math.min(1, position));
  }

  updateUI(note: string, frequency: string, meterPosition: number) {
    this.note = note;
    this.frequency = frequency;
    this.meterPosition = meterPosition;
  }
}
