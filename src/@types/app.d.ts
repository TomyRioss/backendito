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
