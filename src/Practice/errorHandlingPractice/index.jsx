import ErrorHandler from "./Components/ErrorHandler";
import ErrorTest from "./Components/ErrorTest";

const ErrorHandlingPractice = () => {
  return (
    <>
      <ErrorHandler>
        <ErrorHandler>
          <ErrorTest haserror={false} ifnot="theres is no Error" />
        </ErrorHandler>
        <ErrorHandler>
          <ErrorTest haserror={false} ifnot="Walag Errorrrrr" />
        </ErrorHandler>
        <ErrorHandler>
          <ErrorTest haserror={true} ifnot="theres is no Error" />
        </ErrorHandler>
        <ErrorTest haserror={true} ifnot="theres is no Error" />
      </ErrorHandler>
    </>
  );
};

export default ErrorHandlingPractice;
