// declare module "*.css";
// declare module "*.scss";

/*
declare module "*.css" {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
*/
declare module '*.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.svg' {
    const content: any;
    export default content;
}
