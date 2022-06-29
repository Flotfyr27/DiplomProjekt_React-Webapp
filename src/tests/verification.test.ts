import { isEmailCorrect, isMessageCorrect, isNameCorrect, isPhoneCorrect } from "../components/widget/contactForm";
const phoneNum = "12345678";
const correctEmail = "test@test.com";
const wrongEmail = "asdda.jkdas@.com@";
const name = "Flotfyr27";
const msg = "FlotFyr27 needs you to fight five rats in the sewers!"

describe("Verify input from form", () => {
    test("Verify phone number has correct format", () => {
    // Correct phonenum
    expect(isPhoneCorrect(phoneNum)).toStrictEqual(true);
    // Wrong phonenum
    expect(isPhoneCorrect(phoneNum+"asdasd")).toStrictEqual(false);
    // Empty
    expect(isPhoneCorrect("")).toStrictEqual(false);
    });

    test("Verify email has correct format", () => {
        //Obvious correct
        expect(isEmailCorrect(correctEmail)).toStrictEqual(true);
        //Obvious wrong
        expect(isEmailCorrect(wrongEmail)).toStrictEqual(false);
        // Empty email
        expect(isEmailCorrect("")).toStrictEqual(false);
    });

    test("Verify name has correct format", () => {
        //Obvious correct name
        expect(isNameCorrect(name)).toStrictEqual(true);
        //Name with spaces
        expect(isNameCorrect("Flot Fyr 27")).toStrictEqual(true);
        // name starting with space
        expect(isNameCorrect(" FlotFyr27")).toStrictEqual(false);
        // No name
        expect(isNameCorrect("")).toStrictEqual(false);
    });

    test("Verify message has correct format", () => {
        // Obvious correct message
        expect(isMessageCorrect(msg)).toStrictEqual(true);
        // Message starting with space
        expect(isMessageCorrect(" " + msg)).toStrictEqual(true);
        // No message
        expect(isMessageCorrect("")).toStrictEqual(false);
        // Just space if for some reason you want to just send a space?
        expect(isMessageCorrect(" ")).toStrictEqual(false)
    });
})
