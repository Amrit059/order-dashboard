import { UtillModule } from './utill.module';

describe('UtillModule', () => {
  let utillModule: UtillModule;

  beforeEach(() => {
    utillModule = new UtillModule();
  });

  it('should create an instance', () => {
    expect(utillModule).toBeTruthy();
  });
});
