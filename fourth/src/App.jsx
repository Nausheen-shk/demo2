import Form2 from "./Form2";
import ReactHookForm from "./ReactHookForm";
import Form3 from "./Form3";
import ErrorDemo from "./ErrorDemo";
import ErrorBoundry from "./ErrorBoundry";
import Demo from "./Demo";

export default function App() {
  return (
    <>
      <div>
        {/* <ReactHookForm /> */}
        {/* <Form2 /> */}
        {/* <Form3 /> */}
        {/* <ErrorDemo/> */}
        <ErrorBoundry>
          <Demo/>
        </ErrorBoundry>
      </div>
    </>
  );
}