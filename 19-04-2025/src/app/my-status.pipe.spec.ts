import { MyStatusPipe } from './my-status.pipe';

describe('MyStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new MyStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
