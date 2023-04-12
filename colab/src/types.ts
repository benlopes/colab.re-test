export type userDataProps = {
  name: {
    first: string;
    middle: string;
    last: string;
  };
  email: string;
  location: {
    city: string;
    country: string;
  };
  picture: {large: string};
  login: {
    uuid: string,
  }
};

export type propsProps = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  country: string;
  imgSrc: string;
  width?: number;
  height?: number;
};