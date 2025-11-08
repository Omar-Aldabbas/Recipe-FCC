import { Count } from "../components/Count";
import { Form } from "../components/Form";
import { Logo } from "../components/Logo";
import {Pads} from "../components/PadsGrid";

export const AIPage = () => {
  return (
    <>
      <header>
        <Logo />
      </header>
      <main>
        <Form />
        {/* <Count /> */}
      </main>
      <Pads />
    </>
  );
};
