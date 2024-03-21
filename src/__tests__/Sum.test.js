import Sum from "../components/Sum"


test("Sum Function can caliculate sum of two numbers",()=>{
const result = Sum(1,3)

//Assertion
expect(result).toBe(4)
})