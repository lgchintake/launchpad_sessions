export const isAuthenticatedUser = async (req, res, next) => {
  // Logic to check code
  const authorization = req.headers.authorization;
  if (!authorization) {
    res.send({ status: false, message: "Not valid user" });
    return false;
  }

  const tokenArray = req.headers.authorization.split("Bearer ");
  if (tokenArray.length < 2) {
    res.send({ status: false, message: "Not valid user" });
  }
  console.log({ token: tokenArray[1] });

  next();
};
