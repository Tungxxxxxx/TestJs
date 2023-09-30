// Import function
import { getLastDay } from './lastDayOfMonth';
describe('getLastDay(year, month)', () => {
  it('trả về ngày cuối cùng tháng 2 khi year % 4 === 0 && year % 100 !== 0', () => {
    expect(getLastDay(1140, 2)).toBe(29);
  });
  it('trả về ngày cuối cùng tháng 2 khi year % 400 === 0', () => {
    expect(getLastDay(2400, 2)).toBe(29);
  });

  it('trả về ngày cuối cùng tháng 2 khi year % 4 !== 0', () => {
    expect(getLastDay(2021, 2)).toBe(28);
  });
  it('trả về ngày cuối cùng tháng 2 khi year % 4 === 0 && year % 100 === 0 && year % 400 !== 0', () => {
    expect(getLastDay(600, 2)).toBe(28);
  });

  it('trả về ngày cuối cùng của tháng có 30 ngày', () => {
    [4, 6, 9, 11].forEach((month) => {
      expect(getLastDay(2023, month)).toBe(30);
    });
  });

  it('trả về ngày cuối cùng của tháng có 31 ngày', () => {
    [1, 3, 5, 7, 8, 10, 12].forEach((month) => {
      expect(getLastDay(2023, month)).toBe(31);
    });
  });

  it('trả về thông báo lỗi cho năm truyền vào không phải số nguyên', () => {
    expect(() => getLastDay('2000', 2)).toThrow('enter an integer value for year');
  });

  it('trả về thông báo lỗi cho năm truyền vào <= 0', () => {
    expect(() => getLastDay(0, 2)).toThrow('year must be greater than 0');
  });

  it('trả về thông báo lỗi cho tháng truyền vào không phải số nguyên', () => {
    expect(() => getLastDay(2023, [])).toThrow('enter an integer value for month');
  });

  it('trả về thông báo lỗi cho tháng truyền vào <= 0', () => {
    expect(() => getLastDay(2023, 0)).toThrow('month must be between 1 and 12');
  });

  it('trả về thông báo lỗi cho tháng truyền vào > 12', () => {
    expect(() => getLastDay(2023, 13)).toThrow('month must be between 1 and 12');
  });
});
