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

declare module "*.svg" {
  import React from "react";
  const SVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default SVG;
}

declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";
  