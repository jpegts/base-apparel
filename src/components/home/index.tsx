import { useFormik } from "formik";
import React, { createContext, useContext } from "react";
import { IHomeComposition } from "../../interfaces/IHome";
import {
  SubmitButton,
  Container,
  Description,
  Image,
  Input,
  Logo,
  Nav,
  Newsletter,
  Section,
  Title,
  Content,
  Error,
} from "./styles/Home";

const FormikContext = createContext<any>(null);

const Home: React.FC & IHomeComposition = ({ children, ...restProps }) => (
  <Container {...restProps}>
    <Content>{children}</Content>
  </Container>
);

Home.Nav = function HomeNav({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>;
};

Home.Logo = function HomeLogo({ ...restProps }) {
  return <Logo src='/images/logo.svg' {...restProps} />;
};

Home.Section = function HomeSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};

Home.Image = function HomeImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Home.Title = function HomeTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Home.Description = function HomeDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

const validate = (values: { email: string }) => {
  const errors: { email: string | null } = { email: null };

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

Home.Newsletter = function HomeNewsletter({ children, ...restProps }) {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Newsletter onSubmit={formik.handleSubmit} {...restProps}>
        <FormikContext.Provider value={formik}>
          {children}
        </FormikContext.Provider>
      </Newsletter>
      {formik.errors.email && <Error>{formik.errors.email}</Error>}
    </>
  );
};

Home.Email = function HomeInput({ children, ...restProps }) {
  const formik = useContext(FormikContext);
  return (
    <Input
      id='email'
      name='email'
      placeholder='Email Address'
      autoComplete='off'
      value={formik.values.email}
      onChange={formik.handleChange}
      {...restProps}
    />
  );
};

Home.SubmitButton = function HomeButton({ children, ...restProps }) {
  const formik = useContext(FormikContext);

  return (
    <SubmitButton ifError={formik.errors.email} type='submit' {...restProps}>
      <img src='/images/icon-arrow.svg' alt='Arrow Icon' />
    </SubmitButton>
  );
};

export default Home;
