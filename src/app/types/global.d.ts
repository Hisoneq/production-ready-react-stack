type IClassNames = {
  [className: string]: string;
};

declare module '*.css' {
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.module.css' {
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.scss' {
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.module.scss' {
  const classNames: IClassNames;
  export = classNames;
}
  