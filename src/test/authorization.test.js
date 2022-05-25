const AuthController = require("../api/controllers/auth");

describe("AuthController", () => {
  jest.fn("../services/firebase");

  const res = {
    status: null,
    sendStatus: jest.fn(),
    json: jest.fn(),
  };
  const next = jest.fn();

  test("Reply 401 status if you are not logged in", async () => {
    const req = { headers: { authorization: null } };
    await AuthController.login(req, res, next);

    expect(res.sendStatus).toBeCalledTimes(1);
    expect(res.sendStatus).toBeCalledWith(401);
  });
});
