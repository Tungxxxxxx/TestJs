// Import function
const getLastDay = require("./lastDayOfMonth");

describe("getLastDay", () => {
  it("trả về ngày cuối cùng tháng 2 năm nhuận", () => {
    expect(getLastDay(1140, 2)).toBe("29/02/1140");
  });

  it("trả về ngày cuối cùng tháng 2 năm không nhuận", () => {
    expect(getLastDay(600, 2)).toBe("28/02/0600");
  });

  it("trả về ngày cuối cùng của tháng có 30 ngày", () => {
    expect(getLastDay(2023, 4)).toBe("30/04/2023");
  });

  it("trả về ngày cuối cùng của tháng có 31 ngày", () => {
    expect(getLastDay(90, 10)).toBe("31/10/0090");
  });

  it("trả về thông báo lỗi cho năm truyền vào không phải số nguyên", () => {
    expect(() => getLastDay("2000", 2)).toThrow(
      "enter an integer value for year"
    );
  });

  it("trả về thông báo lỗi cho năm truyền vào <= 0", () => {
    expect(() => getLastDay(0, 2)).toThrow("year must be greater than 0");
  });

  it("trả về thông báo lỗi cho tháng truyền vào không phải số nguyên", () => {
    expect(() => getLastDay(2023, [])).toThrow(
      "enter an integer value for month"
    );
  });

  it("trả về thông báo lỗi cho tháng truyền vào <= 0", () => {
    expect(() => getLastDay(2023, 0)).toThrow("month must be between 1 and 12");
  });

  it("trả về thông báo lỗi cho tháng truyền vào > 12", () => {
    expect(() => getLastDay(2023, 13)).toThrow(
      "month must be between 1 and 12"
    );
  });
});
