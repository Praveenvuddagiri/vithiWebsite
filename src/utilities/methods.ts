import { ComponentType } from "./DynamicComponent";

export const generateCompoLib = (parentComponent: any, pageComponents: any) => {
    const compLib: Record<string, any> = {};
    pageComponents.map((com: any) => {
        const cname = com.componentName;
        compLib[cname] = parentComponent[cname];
    })

    return compLib;
}


export const generateComponentList = (pageComponents: any) => {
    let componetsList: ComponentType[] = [];
    pageComponents.map((com: any) => {
        let tempComp = {
            component: com.componentName,
            props: com.props,
            children: null
        }
        componetsList.push(tempComp);
    })

    return componetsList;
} 