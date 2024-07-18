export default class ArrayBufferConverter {
  constructor(buffer) {
    this.buffer = buffer;
  }

  // метод load(), который загружает данные (сигнатура load(buffer))
  load(buffer) {
    this.buffer = buffer;
  }

  // метод toString, который переводит содержимое загруженного ArrayBuffer в строку
  toString() {
    /* создаём представление на основе буфера, чтобы получить доступ к его данным
    в виде 16-битных целых чисел, чтобы работать с буфером как с массивом */
    const bufferView = new Uint16Array(this.buffer);
    let str = '';

    for (let i = 0; i < bufferView.length; i += 1) {
      str += String.fromCharCode(bufferView[i]);
    }
    return str;
  }
}
