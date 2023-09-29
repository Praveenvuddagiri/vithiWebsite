
import * as React from "react";
import _, { isArray, isObject } from "lodash";
import { findAndReplaceIf } from "find-and-replace-anything";

export declare interface ComponentType {
  component: string;
  props?: { [x: string]: any } | null;
  children:
    | Array<ComponentType>
    | ComponentType
    | null
    | string
    | number
    | boolean;
}
export declare interface ViewType {
  path: string;
  component: ComponentType;
  data?: {
    [x: string]: any;
  };
  methods?: {
    [x: string]: () => void | any;
  };
  templates?: {
    [x: string]: any;
  };
  compoLib: {
    [x: string]: any;
  };
}
export declare interface ViewTypeArray {
  path: string;
  component: Array<ComponentType> | ComponentType;
  data?: {
    [x: string]: any;
  };
  methods?: {
    [x: string]: () => void | any;
  };
  templates?: {
    [x: string]: any;
  };
  compoLib: {
    [x: string]: any;
  };
}

const reactSkipLoader = ({ objReact }: { objReact: ViewType }) => {
  const replaceMe = (foundVal: string) => {
    if (
      objReact.templates &&
      foundVal &&
      typeof foundVal === "string" &&
      foundVal.includes("Template")
    ) {
      return _.get(objReact.templates, foundVal.split(".").slice(1).join("."));
    }
    if (
      objReact.methods &&
      foundVal &&
      typeof foundVal === "string" &&
      foundVal.includes("Function")
    ) {
      return _.get(objReact.methods, foundVal.split(".").slice(1).join("."));
    }
    if (
      objReact.data &&
      foundVal &&
      typeof foundVal === "string" &&
      foundVal.includes("Data")
    ) {
      return _.get(objReact.data, foundVal.split(".").slice(1).join("."));
    }
    return foundVal;
  };
  objReact.component = findAndReplaceIf(objReact.component, replaceMe);
  const baseComponent = objReact.component;
  const BaseComponent = objReact.compoLib[baseComponent.component];
  const childList = isArray(baseComponent.children)
    ? baseComponent.children.map((child) =>
        reactSkipLoader({
          objReact: {
            component: child,
            path: objReact.path,
            compoLib: objReact.compoLib,
            data: objReact.data,
            methods: objReact.methods,
          },
        })
      )
    : isObject(baseComponent.children)
    ? reactSkipLoader({
        objReact: {
          component: baseComponent.children,
          path: objReact.path,
          compoLib: objReact.compoLib,
          data: objReact.data,
          methods: objReact.methods,
        },
      })
    : [baseComponent.children];
  const elemtArr = _.concat([BaseComponent, baseComponent.props], childList);
  return React.createElement.apply(this, elemtArr);
};

const ObjReactComponent = ({ objReact }: { objReact: ViewType }) => {
  const baseComponent = reactSkipLoader({ objReact });
  return React.createElement.apply(this, ["div", "", baseComponent]);
};

const ObjReact = ({ objReact }: { objReact: ViewTypeArray }) => {
  const objReactComponent = isArray(objReact.component)
    ? objReact.component.map((comp) =>
        ObjReactComponent({ objReact: { ...objReact, component: comp } })
      )
    : [
        ObjReactComponent({
          objReact: { ...objReact, component: objReact.component },
        }),
      ];
  const elemtArr = _.concat(["div", ""], objReactComponent);
  return React.createElement.apply(this, elemtArr);
};

export default ObjReact;