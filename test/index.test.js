import sut from "../src/index.js" //sut === system under test

describe("The tests for sum", () => {
    it("Should subtract 2 numbers if a < b", () => {
        //Arrange -- Knowing that you're supposed to get 
        const a = 3
        const b = 5
        const expected = 2
    
        //Act -- Calling the action. Perform the action
        const actual = sut.sum(a, b)
    
        //Assert -- Does it do what it's supposed to do
        expect(actual).toBe(expected)
    })
})

it("Should fail with a string input", () => {
    // Arrange 
    const a = "str", b = 5, expected = "Bad Input"

    // Act
    const actual = sut(a, b)

    //Assert
    expect(actual).toBe(expected)
})

describe("The test for cube", () => {
    it ('This shoud raise a number to the third power', () => {
        // Arrange 
        const a = 2, expectedResult = 8

        // Act
        const actual = sut.toCube(a)

        // Assert
        expect(actual).toBe(expectedResult)
    })

    it ('This should fail if a string is entered', () => {
        // Arrange 
        const a = "tom", expectedResult = "Bad input"

        // Act
        const actual = sut.toCube(a)

        // Assert
        expect(actual).toBe(expectedResult)
    })

    fit ('SHould get an error if a boolean is entered', () => {
        // Arrange 
        const a = true, expectedResult = "Bad input"

        // Act
        const actual = sut.toCube(a)

        // Assert
        expect(actual).toBe(expectedResult)
    })
})

