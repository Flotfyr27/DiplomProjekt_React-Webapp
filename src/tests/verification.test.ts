import { isPhoneCorrect } from "../components/widget/contactForm";
const phoneNum = "12345678";

describe("Verify input from form", () => {
    test("Verify phone number has correct format", () => {
    expect(isPhoneCorrect(phoneNum)).toStrictEqual(true)
})
})
