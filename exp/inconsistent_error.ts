class ErrorWrapper extends Error {
  constructor(
    private error: string,
    private errorCode: number,
    private stackTrace = new Error().stack
  ) {
    super(error);
  }
  serialize() {
    const { error, stackTrace, errorCode } = this;
    return { error, stackTrace, errorCode };
  }
}

function doSomething1() {
  // ...
  throw new ErrorWrapper("Unauthorized", 401);
}

function doSomething2() {
  // ...
  throw { code: 401, message: "Unauthorized" };
}

function doSomething3() {
  // ...
  throw new Error(JSON.stringify({ code: 401, message: "Unauthorized" }));
}
