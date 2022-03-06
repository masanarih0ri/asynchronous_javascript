try {
  const result = doSomething()
  const newResult = doSomethingElse(result)
  const finalResult = doThirdRhing(newResult)
  console.log(`Got the final result: ${finalResult}`)
} catch (error) {
  failureCallback(error)
}