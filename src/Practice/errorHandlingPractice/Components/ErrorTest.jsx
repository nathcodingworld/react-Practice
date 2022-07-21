const ErrorTest = ({ haserror, ifnot }) => {
  if (haserror) throw new Error("has Error");
  return <p>{ifnot}</p>;
};

export default ErrorTest;
