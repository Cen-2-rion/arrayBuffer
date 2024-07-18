import getBuffer from '../ArrayBuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('loading data and converting ArrayBuffer to string', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer()); // подгружаем буффер в конвертер

  expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
