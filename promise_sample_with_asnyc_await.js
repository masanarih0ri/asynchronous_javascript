async function foo() {
  try {
    const result = await doSomething()
    const newResult = await doSomethingElse(result)
    const finalResult = await doThirdThing(newResult)
    console.log(`Got the final result: ${finalResult}`)
  } catch (error) {
    failureCallback(error)
  }
}