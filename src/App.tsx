import React from "react";
import { Home } from "./components";

const App: React.FC = () => (
  <Home>
    <Home.Nav>
      <Home.Logo />
    </Home.Nav>
    <Home.Section>
      <Home.Image />
      <Home.Title>
        We're <span>coming soon</span>
      </Home.Title>
      <Home.Description>
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </Home.Description>
      <Home.Newsletter>
        <Home.Email />
        <Home.SubmitButton />
      </Home.Newsletter>
    </Home.Section>
  </Home>
);

export default App;
