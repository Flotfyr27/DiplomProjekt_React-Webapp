import { isEmailCorrect, isMessageCorrect, isNameCorrect, isPhoneCorrect } from "../components/widget/contactForm";
const phoneNum = "12345678";
const correctEmail = "test@test.com";
const wrongEmail = "asdda.jkdas@.com@";
const name = "Flotfyr27";
const msg = "FlotFyr27 needs you to fight five rats in the sewers!"

describe("Verify input from form", () => {
    describe("Verify phone number", () => {
        test("Phone with correct input", () => {
            // Correct phonenum
            expect(isPhoneCorrect(phoneNum)).toStrictEqual(true);
        });
        test("Phone with wrong input", () => {
            // Wrong phonenum
            expect(isPhoneCorrect(phoneNum+"asdasd")).toStrictEqual(false);
        });
        test("Phone with empty input", () => {
            // Empty
            expect(isPhoneCorrect("")).toStrictEqual(false);
        });
    });
    describe("Verify email", () => {
        test("Email correct input", () => {
            //Obvious correct
            expect(isEmailCorrect(correctEmail)).toStrictEqual(true);
        });
        test("Email with wrong input", () => {
            //Obvious wrong
            expect(isEmailCorrect(wrongEmail)).toStrictEqual(false);
        });
        test("Email with empty input", () => {
            // Empty email
            expect(isEmailCorrect("")).toStrictEqual(false);
        });
    });
    describe("Verify name", () => {
        test("Name correct input", () => {
            //Obvious correct name
            expect(isNameCorrect(name)).toStrictEqual(true);
        });
        test("Name with spaces", () => {
            //Name with spaces
            expect(isNameCorrect("Flot Fyr 27")).toStrictEqual(true);
        });
        test("Name starting with space", () => {
            // name starting with space
            expect(isNameCorrect(" FlotFyr27")).toStrictEqual(false);
        });
        test("Name is empty", () => {
            // No name
            expect(isNameCorrect("")).toStrictEqual(false);
        });
    });
    describe("Verify message", () => {
        test("Message correct input", () => {
            // Obvious correct message
            expect(isMessageCorrect(msg)).toStrictEqual(true);
        });
        test("Message starting with space", () => {
            // Message starting with space
            expect(isMessageCorrect(" " + msg)).toStrictEqual(true);
        });
        test("Message is empty", () => {
            // No message
            expect(isMessageCorrect("")).toStrictEqual(false);
        });
        test("Message is only space", () => {
        // Just space if for some reason you want to just send a space?
        expect(isMessageCorrect(" ")).toStrictEqual(false)
        })
    });
});
