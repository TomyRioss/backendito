type Foo = {
  bar: string;
};

type Example = {
  this: string;
  is: number;
  an: boolean;
  example: Foo;
  [key: string]: string;
};

type Language = {
  id?: number;
  value: Locales;
  name: string;
  image: string;
};

type Locales = "en" | "es";
